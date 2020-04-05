module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define("Image", {

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