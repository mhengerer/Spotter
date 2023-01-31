//const sequelize = require('');
const { User } = require('../Models');
const { Exercise } = require('../Models');
const { Routine } = require('../Models');
const  { Log } = require('../Models');


const userData = require('../seeds/userData.json');
const exerciseData = require('../seeds/exerciseData.json');
const routineData = require('../seeds/routineData.json');

const seedDatabase = async () => {
  //await sequelize.sync({ force: true });

  await User.bulkCreate(userData);
  await Exercise.bulkCreate(exerciseData);
  await Routine.bulkCreate(routineData);
  
};

seedDatabase();
