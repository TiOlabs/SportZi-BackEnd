const express = require("express");
const router = express.Router();
const arcadeBookingController = require("../controllers/arcadeBooking.controller");

router.get("/api/getarcadebookings", arcadeBookingController.getArcadeBooking);
router.get(
  "/api/getCompleteArcadeBookings",
  arcadeBookingController.getCompleteArcadeBooking
);
router.get(
  "/api/getarcadebooking/:id",
  arcadeBookingController.getArcadeBookingById
);
router.get(
  "/api/getarcadebookingForArcade/:id",
  arcadeBookingController.getArcadeBookingForArcade
);
router.get(
  "/api/getarcadebookingbydate/:date/:zoneId",
  arcadeBookingController.getArcadeBookingByDate
);
router.get(
  "/api/getarcadebookingbyCreatedTime/:created_at/:userId",
  arcadeBookingController.getArcadeBookingByCretedTime
);
router.get(
  "/api/getArcadeBookingsByBookingId/:bookingId",
  arcadeBookingController.getArcadeBookingByBookingId
);
router.post("/api/addarcadebooking", arcadeBookingController.addArcadeBooking);
router.put(
  "/api/updateArcadeBookingByCreatedTime/:created_at/:userId",
  arcadeBookingController.updateArcadeBookingByCretedTime
);
router.put(
  "/api/updatearcadebooking/:id",
  arcadeBookingController.updateArcadeBooking
);
router.delete(
  "/api/deletearcadebooking/:id",
  arcadeBookingController.deleteArcadeBooking
);

module.exports = router;
