const sequelize = require('../config/connection');
const { User, Exercise, Routine } = require('./models');

const users = [
  { name: 'John Doe', email: 'johndoe@example.com' },
  { name: 'Jane Doe', email: 'janedoe@example.com' },
];

const exercises = [
  { name: 'Squats', description: 'Stand with feet hip-width apart, then lower your body as if sitting back into a chair.' },
  { name: 'Push-ups', description: 'Start in a plank position with hands shoulder-width apart, lower yourself towards the ground, then push back up.' },
];

const routines = [
  { name: 'Full Body Workout', user_id: 1 },
  { name: 'Cardio', user_id: 2 },
];

const createSeeds = async () => {
  await User.bulkCreate(users, { ignoreDuplicates: true });
  await Exercise.bulkCreate(exercises, { ignoreDuplicates: true });
  await Routine.bulkCreate(routines, { ignoreDuplicates: true });
};

createSeeds();