const express = require("express");
const router = express.Router();


const authenticateToken = require("../middlewares/authenticateToken");
const authorizePlayer = require("../middlewares/authorizePlayer");
// const authorizeCoach = require("../middlewares/authorizeCoach");
// const authorizeManager = require("../middlewares/authorizeManager");


router.get('/api/coaches', authenticateToken,authorizePlayer, (req, res) => {

    res.status(200).json();
});

module.exports = router;