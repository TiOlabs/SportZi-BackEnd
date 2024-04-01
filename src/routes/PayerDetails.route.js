const express = require("express");

const regUserRouter = express.Router();

const PlayerDetailsController = require("../controllers/playerdetails.controller");

const authenticateToken = require("../middlewares/authenticateToken");
const authorizePlayer = require("../middlewares/authorizePlayer");

regUserRouter.get(
  "/api/auth/getplayerdetails/",
  authenticateToken,
  authorizePlayer,
  PlayerDetailsController.getPlayerdetails
);

regUserRouter.post(
  "/api/auth/updateplayerdetails",
  authenticateToken,
  authorizePlayer,
  PlayerDetailsController.updatePlayerdetails
);
module.exports = regUserRouter;
