const express = require("express");
const regCoachDetails = express.Router();
const coachDetailsController = require("../controllers/coachDetails.controller");
const authenticateToken = require("../middlewares/authenticateToken");
const authorizeCoach = require("../middlewares/authorizeCoach");
regCoachDetails.get(
  "/api/auth/getcoachDetailsForCoach/:id",
  authenticateToken,
  authorizeCoach,
  coachDetailsController.getCoachDetails
);

regCoachDetails.get(
  "/api/auth/getcoachDetailsForUsers",
  coachDetailsController.getCoachDetailsToUsers
);
regCoachDetails.put(
  "/api/auth/updatecoachDetails/:id",
  authenticateToken,
  authorizeCoach,
  coachDetailsController.updateCoachDetailsController
);
module.exports = regCoachDetails;
