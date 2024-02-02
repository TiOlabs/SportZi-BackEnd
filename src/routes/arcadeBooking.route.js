const express = require("express");
const router = express.Router();
const arcadeBookingController = require("../controllers/arcadeBooking.controller");

router.get("/api/getarcadebookings", arcadeBookingController.getArcadeBookings);
router.post("/api/addarcadeBooking", arcadeBookingController.addArcadeBooking);

module.exports = router;
