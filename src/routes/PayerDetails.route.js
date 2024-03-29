const express = require("express");

const regUserRouter = express.Router();

const PlayerDetailsController = require("../controllers/getplayerdetails.controller");

const authenticateToken = require("../middlewares/authenticateToken");

regUserRouter.get(
  "/api/auth/getplayerdetails/",
  authenticateToken,
  PlayerDetailsController.getPlayerdetails
);

regUserRouter.put(
  "/api/auth/updateplayerdetails",
  authenticateToken,
  PlayerDetailsController.updatePlayerdetails
);
module.exports = regUserRouter;
