const express = require("express");
const regCoachDetails = express.Router();
const { getCoachDetails } = require("../controllers/CoachDetaila.controller");
const getCoachDetailsController = require("../controllers/CoachDetaila.controller");
const authenticateToken = require("../middlewares/authenticateToken");
const authorizeCoach = require("../middlewares/authorizeCoach");
regCoachDetails.get(
  "/api/auth/getcoachdetails",
  authenticateToken,
  authorizeCoach,
  getCoachDetailsController.getCoachDetails
);

module.exports = regCoachDetails;
