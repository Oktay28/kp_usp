module.exports = (sequelize, DataTypes) => {
    const OS = sequelize.define("OS", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        timestamps: false,
        tableName: "os"
    })

    OS.associate = (models) => {
        OS.hasMany(models.Phone, {
            foreignKey: {
                name: "os_id"
            }
        })
    }

    return OS;
}