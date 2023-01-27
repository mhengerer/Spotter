const User = require("./User");
const Exercise = require("./Exercise");
const Routine = require("./Routine");
const Log = require("./Log");

// User has many Routines 
User.hasMany(Routine, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Routine.belongsTo(User, {
  foreignKey: "user_id"
})

// Routine has many associated exercises 
Routine.hasMany(Exercise, {
  foreignKey: "routine_id",
  onDelete: "CASCADE",
});

Exercise.belongsTo(Routine, {
  foreignKey: "routine_id"
})

// User table can have many logs attached to it
Log.belongsTo(User, {
  foreignKey: "user_id"
});

User.hasMany(Log, {
  foreignKey: "user_id"
})

// Each Routine has one attached log
Log.belongsTo(Routine, {
  foreignKey: "routine_id"
});

Routine.hasOne(Log, {
  foreignKey: "routine_id"
}); 

module.exports = { User, Exercise, Routine };
