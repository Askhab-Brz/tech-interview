export default (sequelize, DataTypes) => {
  const Zone = sequelize.define("Zone", {
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
    capacity: { type: DataTypes.INTEGER, allowNull: false },
    current_load: { type: DataTypes.INTEGER, defaultValue: 0 },
    type: { type: DataTypes.STRING, allowNull: false }
  });

  Zone.associate = (models) => {
    Zone.hasMany(models.Container, { foreignKey: "zone_id" });
  };

  return Zone;
};
