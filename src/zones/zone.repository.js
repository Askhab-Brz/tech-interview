import db from "../db/index.js";
const { Zone } = db;

export default {
  findAll() {
    return Zone.findAll();
  },
  findById(id) {
    return Zone.findByPk(id);
  },
  save(data) {
    return Zone.create(data);
  },
  update(zone) {
    return zone.save();
  }
};
