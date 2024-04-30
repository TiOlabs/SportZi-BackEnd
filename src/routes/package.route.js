const express = require("express");
const route = express.Router();

const packageController = require("../controllers/package.controller");
route.get("/api/getPackageDetails", packageController.getPackage);
route.get("/api/getPackageDetails/:id", packageController.getPackageById);
route.post("/api/addPackageDetails",  packageController.addPackage);
route.put("/api/updatePackageDetails/:id", packageController.updatePackage);
route.delete("/api/deletePackageDetails/:id", packageController.deletePackage);

module.exports = route;