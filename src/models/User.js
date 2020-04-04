module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {

    },
    {
        createdAt: "created_at",
        updatedAt: false,
        tableName: "user"
    })


    return User;
}