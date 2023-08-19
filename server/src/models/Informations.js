const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Informations",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
       
      },
      phone: {
        type: DataTypes.STRING, // Corregido a STRING
        allowNull: false,
       
      },
      whatsapp: {
        type: DataTypes.TEXT,
        allowNull: false,
        
      },
      facebook: {
        type: DataTypes.TEXT,
        allowNull: false,
       
      },
      instagram: {
        type: DataTypes.TEXT,
        allowNull: false,
       
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: false,
        
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
      },
    },
    { timestamps: true, paranoid: true } 
     );
};
