module.exports = (sequelize, DataTypes) => {
    const Brand = sequelize.define("Brand", {
        name:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        timestamps: false,
        tableName: "brands"
    })

    Brand.associate = (models) => {
        Brand.hasMany(models.Phone, {
            foreignKey: {
                name: "brand_id"
            }
        })
    }

    return Brand;
}