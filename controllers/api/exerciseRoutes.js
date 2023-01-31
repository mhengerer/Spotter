const router = require('express').Router();
const { Exercise } = require('../../Models');
// add withAuth 
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        
    } catch (err) {
        res.status(400).json(err);
    }
});