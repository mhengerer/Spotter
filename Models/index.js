const User = require("./User");
const Exercise = require("./Exercise");
const Routine = require("./Routine");

User.hasMany(Routine, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Exercise, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Routine.hasMany(Exercise, {
  foreignKey: "routine_id",
  onDelete: "CASCADE",
});

module.exports = { User, Exercise, Routine };
