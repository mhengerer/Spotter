const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Log extends Model {}

Log.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    routine_id: {
      type: DataTypes.INTEGER, 
      allowNull: false, 
      references: {
        model: "routine", 
        key: "id"
      }
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "log",
  }
);

module.exports = Log;
