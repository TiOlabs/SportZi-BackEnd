const express = require("express");
const regArchade = express.Router();
const archadeDetailsController = require("../controllers/ArchadeDetails.Controler");
const authenticateToken = require("../middlewares/authenticateToken");
const authorizeManager = require("../middlewares/authorizeManager");

regArchade.get(
  "/api/auth/getarchadedetails",
  authenticateToken,
  authorizeManager,
  archadeDetailsController.getArchadeDetails
);

module.exports = regArchade;
