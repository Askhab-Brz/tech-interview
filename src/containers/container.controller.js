import service from "./container.service.js";

export default {
  async getAll(req, res) {
    res.json(await service.findAll());
  },

  async create(req, res) {
    try {
      const container = await service.create(req.body);
      res.status(201).json(container);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async updateStatus(req, res) {
    try {
      const updated = await service.updateStatus(
        req.params.id,
        req.body.status
      );

      res.json(updated);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};
