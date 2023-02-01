//const sequelize = require('');
const { User, Exercise, Routine, Log } = require('../Models');

const userData = require('./userData.json');
const exerciseData = require('./exerciseData.json');
const routineData = require('./routineData.json');

const seedDatabase = async () => {
  //await sequelize.sync({ force: true });
  // const users = await User.bulkCreate(userData, {
  //   individualHooks: true,
  //   returning: true
  // });

  for (const user of userData) {
    await Log.create({
      user_id: user.id,
    });
  };

  let routineArray = [];

  for (const routine of routineData) {
    await Routine.create({
      ...routine,
      log_id: 1 // Dummy value
      //routine[Math.floor(Math.random() * routines.length)].id,
    });
  };

  for (const exercise of exerciseData) {
     

    seedArray += await Exercise.create({
      ...exercise,
      routine_id: routine[Math.floor(Math.random() * routine.length)].id,
    });
  };
};

seedDatabase();
