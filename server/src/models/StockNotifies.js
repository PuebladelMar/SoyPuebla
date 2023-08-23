const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
    const StockNotifies = sequelize.define(
        'StockNotifies', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
        }
    )
}