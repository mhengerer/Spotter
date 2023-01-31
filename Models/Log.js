const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Log extends Model {}

Log.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  last_use: {
    type: DataTypes.DATETIME,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "user",
      key: "id",
    },
  },
  routine_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "routine",
      key: "id",
    },
  }
});

module.exports = Routine;
