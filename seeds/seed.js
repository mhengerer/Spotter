const sequelize = require('../config/connection');
const { User, Exercise, Routine, Log } = require('../Models');

const userData = require('./userData.json');
const exerciseData = require('./exerciseData.json');
const routineData = require('./routineData.json');

// Seeds the database
// Generates Users first 
// Generates Routines randomly under these user profiles.
// In the same loop, generates a Log for each Routine
// Fills the routines with random exercises 
// I'm so proud of this -df
const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  // Generate Users
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true
  });

  //Generate Routines and Logs
  for (const routine of routineData) {
    const routineObj = await Routine.create({
      ...routine,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });

    await Log.create({
      user_id: users[Math.floor(Math.random() * users.length)].id,
      routine_id: routineObj.id
    });
  }

  // Generate Exercises
  for (const exercise of exerciseData) {
    await Exercise.create({
      ...exercise, 
      routine_id: (Math.floor(Math.random() * routineData.length + 1))
    })
  }
};

seedDatabase();
