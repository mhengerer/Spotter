const router = require('express').Router();
const { Routine } = require('../../Models');
const withAuth = require('../../utils/auth');

// pull user_id From session 

router.post('/', withAuth, async (req, res) => {
    try {
        const newRoutine = await Routine.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newRoutine);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const routineData = await Routine.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!routineData) {
            res.status(404).json({ message: 'Cant Find this Routine!' });
            return;
        }

        res.status(200).json(routineData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const routineData = await Routine.findAll();
  
        if (!routineData) {
            res.status(404).json({ message: 'Cant Find routines' });
            return;
        }
  
        res.status(200).json(routineData);
    } catch (err) {
        res.status(500).json(err);
    }
  });

module.exports = router;