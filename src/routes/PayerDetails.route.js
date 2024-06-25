const express = require("express");

const regUserRouter = express.Router();

const PlayerDetailsController = require("../controllers/playerdetails.controller");

const authenticateToken = require("../middlewares/authenticateToken");
const authorizePlayer = require("../middlewares/authorizePlayer");

regUserRouter.get(
  "/api/auth/getplayerdetails/:id",
  authenticateToken,
  authorizePlayer,
  PlayerDetailsController.getPlayerdetails
);
regUserRouter.get(
  "/api/auth/getplayerdetailsUser/:id",
  PlayerDetailsController.getPlayerdetailsUser
);

regUserRouter.post(
  "/api/auth/addPlayerdetails",
  authenticateToken,
  authorizePlayer,
  PlayerDetailsController.addPlayerdetails
);

regUserRouter.put(
  "/api/auth/updatePlayerdetails/:id",
  authenticateToken,
  authorizePlayer,
  PlayerDetailsController.updatePlayerdetails
);
module.exports = regUserRouter;
