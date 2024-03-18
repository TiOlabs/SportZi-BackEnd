const express = require("express");
const router = express.Router();

const logoutController = require("../controllers/logout.controller");

router.get("/api/logout", logoutController.logout);

module.exports = router;