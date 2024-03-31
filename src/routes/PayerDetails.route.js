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

regUserRouter.post(
  "/api/auth/PlayerPhotos",
  authenticateToken,
  authorizePlayer,
  PlayerDetailsController.uploadPlayerPhoto
);

regUserRouter.get(
  "/api/auth/getplayerPhotos/:id",
  PlayerDetailsController.getPlayerPhotos
);

regUserRouter.post(
  "/api/auth/addplayerPhotos",
  authenticateToken,
  authorizePlayer,
  PlayerDetailsController.addPlayerphotos
);

module.exports = regUserRouter;
