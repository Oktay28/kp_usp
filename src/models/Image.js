module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define("Image", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        timestamps: false,
        tableName: "images"
    })

    Image.associate = (models) =>{
        Image.belongsTo(models.Phone, {
            foreignKey: {
                name: "phone_id"
            }
        })

    }

    return Image;
}