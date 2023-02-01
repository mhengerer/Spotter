const router = require('express').Router();
const { Log } = require('../../Models');

router.post('/', withAuth, async (req, res) => {
    try {
        const newLog = await Log.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newLog);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const logData = await Log.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!logData) {
            res.status(404).json({ message: 'Cant Find this Log!' });
            return;
        }

        res.status(200).json(logData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;