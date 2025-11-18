import zoneRepo from "./zone.repository.js";
import containerRepo from "../containers/container.repository.js";

export default {
  findAll() {
    return zoneRepo.findAll();
  },

  async assignContainer(zoneId, containerId) {
    const zone = await zoneRepo.findById(zoneId);
    if (!zone) throw new Error("Zone not found");

    const container = await containerRepo.findById(containerId);
    if (!container) throw new Error("Container not found");

    if (zone.current_load >= zone.capacity)
      throw new Error("Zone Overloaded");

    if (container.Zone && container.Zone.id !== zone.id) {
      const oldZone = await zoneRepo.findById(container.Zone.id);
      oldZone.current_load = Math.max(0, oldZone.current_load - 1);
      await zoneRepo.update(oldZone);
    }

    container.zone_id = zone.id;
    container.status = "STORED";
    zone.current_load += 1;

    await containerRepo.update(container);
    await zoneRepo.update(zone);

    return container;
  }
};