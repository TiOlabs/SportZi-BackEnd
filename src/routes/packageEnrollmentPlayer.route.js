const express = require("express");
const route = express.Router();

const packageEnrollmentPlayerController = require("../controllers/packageEnrollmentPlayer.controller");
route.get("/api/getPackageEnrollmentPlayerDetails", packageEnrollmentPlayerController.getPackageEnrollmentPlayer);
route.get("/api/getPackageEnrollmentPlayerDetails/:id", packageEnrollmentPlayerController.getPackageEnrollmentPlayerById);
route.post("/api/addPackageEnrollmentPlayerDetails",  packageEnrollmentPlayerController.addPackageEnrollmentPlayer);
route.put("/api/updatePackageEnrollmentPlayerDetails/:player_id/:package_id", packageEnrollmentPlayerController.updatePackageEnrollmentPlayer);
route.delete("/api/deletePackageEnrollmentPlayerDetails/:id", packageEnrollmentPlayerController.deletePackageEnrollmentPlayer);

module.exports = route;