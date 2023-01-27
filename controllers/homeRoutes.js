const router = require('express').Router();


// this takes user to portal login if they arent already logged in 
router.get('/', (req, res) => {
    // logic to pull routines
    if (req.session.logged_in) {

    } else {
    res.render('homepage', {
        // sending routines to render on homepage
        routines,
        // logged_in will maybe be changed
        logged_in: req.session.logged_in
    })
}
})



module.exports = router;
