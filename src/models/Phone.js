const {Op} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    const Phone = sequelize.define("Phone", {
        model: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
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
        number_of_cores: {
            type: DataTypes.TINYINT,
            allowNull: false
        },
        cpu:{
            type: DataTypes.STRING,
            allowNull: false
        },
        screen_size: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        color:{
            type: DataTypes.STRING,
            allowNull: false
        },
        internal_memory: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ram: {
            type: DataTypes.TINYINT,
            allowNull: false
        },
        battery: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        numbers_of_camera: {
            type: DataTypes.TINYINT,
            defaultValue: 1
        },
        main_camera_resolution: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }

    }, {
        createdAt: "created_at",
        updatedAt: "updated_at",
        tableName: "phones",
        hooks: {
            beforeFind: (phone, options) => {
                if(typeof phone.where != "undefined"){
                    let priceMin = phone.where.price_min || 0;
                    let priceMax = phone.where.price_max || 0;
                    if(priceMin && priceMax){
                        phone.where.price = {
                            [Op.between] : [priceMin, priceMax]
                        }
                    }
                     else if(priceMin){
                        phone.where.price = {
                            [Op.gte] : priceMin
                        }
                    }
                    else if(priceMax){
                        phone.where.price = {
                            [Op.lte] : priceMax 
                        }
                    }
                    delete phone.where.price_min;
                    delete phone.where.price_max;
                }
                
            }
        }
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

    }


    return Phone;
}