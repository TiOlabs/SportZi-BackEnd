const express = require("express");
const regArchade = express.Router();
const archadeDetailsController = require("../controllers/ArchadeDetails.Controler");
regArchade.get(
  "/api/auth/getarchadedetails",
  archadeDetailsController.getArchadeDetails
);

module.exports = regArchade;
