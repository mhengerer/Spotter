const router = require('express').Router();
const { Exercise } = require('../../Models');
// add withAuth 
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newExercise = await Exercise.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newExercise);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const exerciseData = await Exercise.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!exerciseData) {
            res.status(404).json({ message: 'Cant Find this Exercise!' });
            return;
        }

        res.status(200).json(exerciseData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const exerciseData = await Exercise.findAll();

        if (!exerciseData) {
            res.status(404).json({ message: 'Cant Find this Exercise!' });
            return;
        }

        res.status(200).json(exerciseData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/byRoutineId/:routineId', async (req, res) => {
    try {
        const routineId = req.params.routineId;
        const exerciseData = await Exercise.findAll({ where: { routine_Id: routineId } });

        if (!exerciseData) {
            res.status(404).json({ message: 'Cant Find Exercises for this Routine ID!' });
            return;
        }

        res.status(200).json(exerciseData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;