const express = require("express");
const router = express.Router();
const coachBookingController = require("../controllers/coachBooking.controller");

router.get("/api/getCoachBookings", coachBookingController.getCoachBooking);
router.get(
  "/api/getCoachBooking/:id",
  coachBookingController.getCoachBookingById
);
router.get(
  "/api/getCoachBookinByBookingId/:bookingId",
  coachBookingController.getCoachBookingByBookingId
);
router.get(
  "/api/getCoachBookingByDate/:date/:coachId",
  coachBookingController.getCoachBookingByDate
);
router.get(
  "/api/getCoachBookingByCreatedTime/:created_at/:player_id",
  coachBookingController.getCoachBookingByCretedTime
);
router.post("/api/addCoachBooking", coachBookingController.addCoachBooking);
router.put(
  "/api/updatecoachBooking/:id",
  coachBookingController.updateCoachBooking
);
router.put(
  "/api/updateCoachBookingByCreatedTime/:created_at/:userId",
  coachBookingController.updateCoachBookingByCreatedTime
);
router.delete(
  "/api/deleteCoachBooking/:id",
  coachBookingController.deleteCoachBooking
);

module.exports = router;
