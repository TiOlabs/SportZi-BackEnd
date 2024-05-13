const express = require("express");
const regCoachDetails = express.Router();
const coachDetailsController = require("../controllers/coachDetails.controller");
const authenticateToken = require("../middlewares/authenticateToken");
const authorizeCoach = require("../middlewares/authorizeCoach");
regCoachDetails.get(
  "/api/auth/getcoachDetailsForCoach",
  authenticateToken,
  authorizeCoach,
  coachDetailsController.getCoachDetails
);

module.exports = regCoachDetails;
