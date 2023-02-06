const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Exercise extends Model {}

Exercise.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true  
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body_part: {
      type: DataTypes.STRING
    }, 
    target: {
      type: DataTypes.STRING
    },
    equipment: {
      type: DataTypes.STRING,
    },
    gif_url: {
      type: DataTypes.STRING, 
    },
    routine_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "routine",
        key: "id",
      },
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "exercise",
  }
);

module.exports = Exercise;
