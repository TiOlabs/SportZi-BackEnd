const express = require("express");
const regManagesArcade = express.Router();
const ManagersArcadesController = require("../controllers/ManagersArcades.controller");

const authenticateToken = require("../middlewares/authenticateToken");
const authorizeManager = require("../middlewares/authorizeManager");

regManagesArcade.get(
  "/api/auth/getchoosenArcade/",
  authenticateToken,
  authorizeManager,
  ManagersArcadesController.getManagersArchades
);

module.exports = regManagesArcade;
