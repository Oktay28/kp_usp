module.exports = (sequelize, DataTypes) => {
    const Phone = sequelize.define("Phone", {

    },
    {
        createdAt: "created_at",
        updatedAt: "updated_at",
        tableName: "phones"
    })


    return Phone;
}