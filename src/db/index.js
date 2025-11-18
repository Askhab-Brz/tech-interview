import { Sequelize, DataTypes } from "sequelize";
import ZoneModel from "./models/zone.model.js";
import ContainerModel from "./models/container.model.js";

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: false
  }
);

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Zone = ZoneModel(sequelize, DataTypes);
db.Container = ContainerModel(sequelize, DataTypes);
if (db.Zone.associate) db.Zone.associate(db);
if (db.Container.associate) db.Container.associate(db);

export default db;