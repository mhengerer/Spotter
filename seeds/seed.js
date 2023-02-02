//const sequelize = require('');
const { User } = require('../Models');
const { Exercise } = require('../Models');
const { Routine } = require('../Models');
const  { Log } = require('../Models');


const userData = require('./userData.json');
const exerciseData = require('./exerciseData.json');
const routineData = require('./routineData.json');

const seedDatabase = async () => {
  //await sequelize.sync({ force: true });

  await User.bulkCreate(userData);
  await Exercise.bulkCreate(exerciseData);
  await Routine.bulkCreate(routineData);
  
};

seedDatabase();
