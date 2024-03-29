const express = require("express");

const regUserRouter = express.Router();

const PlayerDetailsController = require("../controllers/getplayerdetails.controller");

const authenticateToken = require("../middlewares/authenticateToken");

regUserRouter.get(
  "/api/auth/getplayerdetails/",
  authenticateToken,
  PlayerDetailsController.getPlayerdetails
);
module.exports = regUserRouter;
