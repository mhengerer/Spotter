const User = require("./User");
const Exercise = require("./Exercise");
const Routine = require("./Routine");

User.hasMany(Routine, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Routine.hasMany(Exercise, {
  foreignKey: "routine_id",
  onDelete: "CASCADE",
});

Log.belongsTo(User, {
  foreignKey: "user_id"
});

Log.belongsTo(Routine, {
  foreignKey: "routine_id"
});

module.exports = { User, Exercise, Routine };
