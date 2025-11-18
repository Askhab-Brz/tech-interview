export default (sequalize, DataTypes) => {
    const Container = sequalize.define("Container",{
        number: { type: DataTypes.STRING, unique: true, allowNull: false},
        type: { type: DataTypes.STRING, allowNull: false},
        status: {
            type: DataTypes.ENUM("ARRIVED", "STORED", "SHIPPED"),
            defaultValue: "ARRIVED"
        },
        arrival_time: { type: DataTypes.DATE, defaultValue: DataTypes.NOW}
    });
    Container.associate = (models)=> {
        Container.belongsTo(models.Zone, {foreignKey: "zone_id"})
    }
    return Container;
}