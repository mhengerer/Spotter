const sequelize = require('../config/connection');
const { User, Exercise, Routine, Log } = require('../Models');

const userData = require('./userData.json');
const exerciseData = require('./exerciseData.json');
const routineData = require('./routineData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true
  });

  let numLogs = 0; 
  for (const user of userData) {
    await Log.create({
      user_id: user.id,
    });
    numLogs++; 
  };

  let numRoutines = 0; 
  for (const routine of routineData) {
    await Routine.create({
      ...routine,
      log_id: (Math.floor(Math.random() * numLogs))
    });
    numRoutines++; 
  };


  for (const exercise of exerciseData) {
    await Exercise.create({
      ...exercise, 
      routine_id: (Math.floor(Math.random() * numRoutines))
    })
  }
};

seedDatabase();
