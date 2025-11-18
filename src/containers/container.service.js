import containerRepo from "./container.repository.js";
import zoneRepo from "../zones/zone.repository.js";

export default {
  findAll() {
    return containerRepo.findAll();
  },

  async create(data) {
    let zone = null;

    if (data.zone_id) {
      zone = await zoneRepo.findById(data.zone_id);
      if (!zone) throw new Error("Zone not found");

      if (zone.current_load >= zone.capacity)
        throw new Error("Zone Overloaded");

      zone.current_load += 1;
      await zoneRepo.update(zone);
    }

    return containerRepo.create(data);
  },

  async updateStatus(id, status) {
    const container = await containerRepo.findById(id);
    if (!container) throw new Error("Container not found");

    if (status === "SHIPPED" && container.zone_id) {
      const zone = await zoneRepo.findById(container.zone_id);
      zone.current_load = Math.max(0, zone.current_load - 1);
      await zoneRepo.update(zone);
      container.zone_id = null;
    }

    container.status = status;
    return containerRepo.update(container);
  }
};
