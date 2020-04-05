module.exports = (sequelize, DataTypes) => {
    const Phone = sequelize.define("Phone", {
        brand: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL
        },
        image: {
            type: DataTypes.STRING,
            defaultValue: "/public/images/default-phone-photo.png"
        },
        availability: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1
        },
        sim_slots: {
            type: DataTypes.TINYINT,
            defaultValue: 1
        },
        number_of_cors: {
            type: DataTypes.TINYINT
        },
        screen_size: {
            type: DataTypes.DECIMAL
        },
        internal_memory: {
            type: DataTypes.TINYINT
        },
        ram: {
            type: DataTypes.TINYINT
        },
        battery: {
            type: DataTypes.TINYINT
        },
        numbers_of_camera: {
            type: DataTypes.TINYINT,
            defaultValue: 1
        },
        main_camera_resolution: {
            type: DataTypes.DECIMAL
        }

    }, {
        createdAt: "created_at",
        updatedAt: "updated_at",
        tableName: "phones"
    })

    Phone.associate = (models) => {
        Phone.hasMany(models.Image, {
            foreignKey: {
                name: "phone_id"
            }
        })
        Phone.belongsTo(models.Brand, {
            foreignKey: {
                name: "brand_id"
            }
        })
        Phone.belongsTo(models.OS, {
            foreignKey: {
                name: "os_id"
            }
        })

    }


    return Phone;
}