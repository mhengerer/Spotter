const router = require('express').Router();
const { User, Routine, Log } = require('../Models');
const withAuth = require('../utils/auth');
const { Op } = require("sequelize");
const { today, lastDay } = require('../utils/helpers');


// this takes user to portal login if they arent already logged in 
router.get('/', withAuth, async (req, res) => {
    try {

        const routineData = await Routine.findAll({
            include: [
                {
                  model: User,
                  attributes: ['name'],
                },
              ],
            // need to query all routines created by logged in user that 
            where: {
                // isnt defined
                id: req.session.user_id,
                // date range 
                scheduled: {
                    [Op.between]: [today, lastDay],
                },

            },
        });

        const routines = routineData.map((routine) => routine.get({ plain: true }));
        
        res.render('homepage', {
            // render weekly routing with users info
            // logged_in will maybe be changed
            routines,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/routine/:id', withAuth, async (req, res) => {
    try {
        const routineData = await Routine.findByPk(req.params.id, {
            include: [
                {
                  model: User,
                  attributes: ['name'],
                },
              ],
        });
        
        const routine = routineData.get({ plain: true });

        res.render('routine', {
            routine,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/log/:id', withAuth, async (req, res) => {
    try {
        
        const logData = await Log.findAll({
            where: {
                id: req.params.user_id,
            },
        });
        
        const log = logData.get({ plain: true });

        res.render('log', {
            ...log,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // if the user is already logged in it will redirect to root route
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});


module.exports = router;
