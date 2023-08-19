const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Questions",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      questions: {
        type: DataTypes.TEXT,
        allowNull: false,
       
      },
      answers: {
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
