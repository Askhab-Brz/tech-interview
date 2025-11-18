import db from "../db/index.js";
const { Container, Zone } = db;

export default {
  findAll() {
    return Container.findAll({ include: Zone });
  },
  findById(id) {
    return Container.findByPk(id, { include: Zone });
  },
  create(data) {
    return Container.create(data);
  },
  update(model) {
    return model.save();
  }
};