const router = require("express").Router();
const { User, Routine, Log } = require("../Models");
const withAuth = require("../utils/auth");
const { Op } = require("sequelize");
const { todaysDate, lastDayWeek } = require("../utils/helpers");

// this takes user to portal login if they arent already logged in
router.get("/", withAuth, (req, res) => {
  console.log("Reached line 9");
  Routine.findAll({
    where: {
      id: req.session.user_id,
      
      scheduled: {
          [Op.between]: [todaysDate(), lastDayWeek()],
      },
    },
  })
    .then(routineData => {
      console.log("Reached line 21");
      const routines = routineData.map(routine => routine.get({ plain: true }));
      console.log("Reached line 23");
      res.render("homepage", {
        // render weekly routing with users info
        // logged_in will maybe be changed
        
        logged_in: req.session.logged_in,
      });
      console.log("Reached line 30");
    });
    // .catch(err => {
    //   console.log(err);
    //   res.status(500).json(err);
    // });
});

router.get("/routine/:id", withAuth, async (req, res) => {
  try {
    const routineData = await Routine.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const routine = routineData.get({ plain: true });

    res.render("routine", {
      routine,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/log/:id", withAuth, async (req, res) => {
  try {
    const logData = await Log.findAll({
      where: {
        id: req.params.user_id,
      },
    });

    const log = logData.get({ plain: true });

    res.render("log", {
      ...log,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // if the user is already logged in it will redirect to root route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get('/signup', (req, res) => {
    res.render('signup');
});


module.exports = router;

