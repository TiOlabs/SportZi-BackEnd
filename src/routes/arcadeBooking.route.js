const express = require("express");
const router = express.Router();
const arcadeBookingController = require("../controllers/arcadeBooking.controller");

router.get("/api/getarcadebookings", arcadeBookingController.getArcadeBooking);
router.post("/api/addarcadebooking", arcadeBookingController.addArcadeBooking);
router.put("/api/updatearcadebooking/:id", arcadeBookingController.updateArcadeBooking);
router.delete("/api/deletearcadebooking/:id", arcadeBookingController.deleteArcadeBooking);


module.exports = router;
