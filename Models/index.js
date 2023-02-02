const User = require("./User");
const Exercise = require("./Exercise");
const Routine = require("./Routine");
const Log = require("./Log");

// User has 1 associated Log
Log.belongsTo(User, {
  foreignKey: "user_id"
});

User.hasOne(Log, {
  foreignKey: "user_id"
})

// Each Log has many attached Routines 
Routine.belongsTo(Log, {
  foreignKey: "log_id", 
  onDelete: "CASCADE"
});

Log.hasMany(Routine, {
  foreignKey: "log_id",
  onDelete: "CASCADE"
}); 

// Routine has many associated exercises 
Routine.hasMany(Exercise, {
  foreignKey: "routine_id",
  onDelete: "CASCADE",
});

Exercise.belongsTo(Routine, {
  foreignKey: "routine_id"
});

module.exports = { User, Exercise, Routine, Log };

// // User has many Routines 
// User.hasMany(Routine, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE",
// });

// Routine.belongsTo(User, {
//   foreignKey: "user_id"
// })
