const express = require("express");
const router = express.Router();

const packageEnrollmentCoachController = require("../controllers/packageEnrollmentCoach.controller");
// const router = require("./arcadeBooking.route");

router.get("/api/getPackageEnrollmentCoachDetails", packageEnrollmentCoachController.getPackageEnrollmentCoach);
router.get("/api/getPackageEnrollmentCoachDetails/:id", packageEnrollmentCoachController.getPackageEnrollmentCoachById);
router.post("/api/addPackageEnrollmentCoachDetails",  packageEnrollmentCoachController.addPackageEnrollmentCoach);
router.put("/api/updatePackageEnrollmentCoachDetails/:coach_id/:package_id", packageEnrollmentCoachController.updatePackageEnrollmentCoach);
router.delete("/api/deletePackageEnrollmentCoachDetails/:id", packageEnrollmentCoachController.deletePackageEnrollmentCoach);

module.exports = router;