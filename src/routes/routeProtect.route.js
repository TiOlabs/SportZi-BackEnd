const express = require("express");
const router = express.Router();
const authenticateToken = require("../middlewares/authenticateToken");
const authorizeAdmin = require("../middlewares/authorizeAdmin");
const authorizeCoach = require("../middlewares/authorizeCoach");
const authorizeManager = require("../middlewares/authorizeManager");
const authorizePlayer = require("../middlewares/authorizePlayer");

router.get('/api/auth/check', authenticateToken, (req, res) => {
    res.status(200).json();
});
router.get('/api/auth/check-player',authenticateToken,authorizePlayer,(req,res) => {
    res.status(200).json();
});
router.get('/api/auth/check-coach',authenticateToken,authorizeCoach,(req,res) => {
    res.status(200).json();
});
router.get('/api/auth/check-manager',authenticateToken,authorizeManager,(req,res) => {
    res.status(200).json();
})
router.get('/api/auth/check-admin',authenticateToken,authorizeAdmin,(req,res) => {
    res.status(200).json();
})

module.exports = router;