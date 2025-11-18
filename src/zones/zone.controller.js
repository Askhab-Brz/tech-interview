import service from "./zone.service.js";

export default {
  async getAll(req, res) {
    res.json(await service.findAll());
  },

  async assign(req, res) {
    try {
      const container = await service.assignContainer(
        req.params.id,
        req.body.containerId
      );

      res.json(container);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};
