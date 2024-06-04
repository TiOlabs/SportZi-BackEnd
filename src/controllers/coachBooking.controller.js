const coachBookingServices = require("../services/coachBooking.service");
const { PlayerCanceled } = require("../sentMail/playerCanceled");
const { CoachCanceled } = require("../sentMail/coachCanceled");
const {
  ArcadeCanceledCoachBooking,
} = require("../sentMail/arcadeCanceledCoachBookings");
const { CoachBookingEmailForCoach } = require("../sentMail/coachBookingEmail");
const { CoachBookingEmailForUser } = require("../sentMail/coachBookingEmailForUsers");

const getCoachBooking = async (req, res) => {
  try {
    const coachBookings = await coachBookingServices.getCoachBookings();
    res.status(200).json(coachBookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getCoachBookingById = async (req, res) => {
  try {
    const { id } = req.params;
    const coachBooking = await coachBookingServices.getCoachBookingById(id);
    if (coachBooking) {
      res.status(200).json(coachBooking);
    } else {
      res.status(404).json({ message: "Coach Booking not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCoachBookingForCoach = async (req, res) => {
  try {
    const { id } = req.params;
    const coachBooking = await coachBookingServices.getCoachBookingForCoach(id);
    if (coachBooking) {
      res.status(200).json(coachBooking);
    } else {
      res.status(404).json({ message: "Coach Booking not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCoachBookingByArcadeId = async (req, res) => {
  try {
    const { ArcadeId } = req.params;
    const coachBooking = await coachBookingServices.getCoachBookingByArcadeId(
      ArcadeId
    );
    if (coachBooking) {
      res.status(200).json(coachBooking);
    } else {
      res.status(404).json({ message: "Coach Booking not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCoachBookingByBookingId = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const coachBooking = await coachBookingServices.getCoachBookingByBookingId(
      bookingId
    );
    if (coachBooking) {
      res.status(200).json(coachBooking);
    } else {
      res.status(404).json({ message: "Coach Booking not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCoachBookingByDate = async (req, res) => {
  try {
    const { date, coachId } = req.params;
    const coachBooking = await coachBookingServices.getCoachBookingByDate(
      date,
      coachId
    );
    if (coachBooking) {
      res.status(200).json(coachBooking);
    } else {
      res.status(404).json({ message: "Coach Booking not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCoachBookingByCretedTime = async (req, res) => {
  try {
    const { created_at, player_id } = req.params;
    const coachBooking = await coachBookingServices.getCoachBookingByCretedTime(
      created_at,
      player_id
    );
    if (coachBooking) {
      res.status(200).json(coachBooking);
    } else {
      res.status(404).json({ message: "Coach Booking not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addCoachBooking = async (req, res) => {
  try {
    const {
      status,
      date,
      time,
      full_amount,
      participant_count,
      player_id,
      zone_id,
      coach_id,
      arcade_id,
      created_at,
      coach_email,
      coach_name,
      role,
      reservation_type,
      zone_name,
      user_name,
      email,
      arcade_name
    } = req.body;
    const coachBooking = {
      status,
      date,
      time,
      full_amount,
      participant_count,
      player_id,
      zone_id,
      coach_id,
      arcade_id,
      created_at,
    };
    try {
      CoachBookingEmailForCoach(
        coach_email,
        coach_name,
        reservation_type,
        zone_name,
        full_amount,
        date,
        time,
        participant_count,
        user_name,
        arcade_name
      );
    } catch (error) {
      console.log("Error in sending email", error);
    }
    try {
      CoachBookingEmailForUser(
        email,
        reservation_type,
        zone_name,
        full_amount,
        date,
        time,
        participant_count,
        user_name,
        arcade_name
      );
    } catch (error) {
      console.log("Error in sending email", error);
    }
    const newCoachBooking = await coachBookingServices.addCoachBooking(
      coachBooking
    );
    res.status(201).json(newCoachBooking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCoachBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      status,
      email,
      role,
      coach_name,
      player_name,
      booking_date,
      booking_time,
      arcade_email,
      arcade_name,
      coach_email,
      zone_name,
      reason
    } = req.body;
    if (role === "PLAYER") {
      try {
        PlayerCanceled(
          arcade_email,
          email,
          coach_name,
          player_name,
          booking_date,
          booking_time,
          reason
        );
      } catch (error) {
        console.log("Error in sending email", error);
      }
    } else if (role === "COACH") {
      try {
        CoachCanceled(
          email,
          coach_name,
          player_name,
          booking_date,
          booking_time,
          arcade_email,
          arcade_name,
          reason
        );
      } catch (error) {
        console.log("Error in sending email", error);
      }
    } else if (role === "ARCADE" && coach_name !== "") {
      try {
        ArcadeCanceledCoachBooking(
          coach_email,
          zone_name,
          player_name,
          booking_date,
          booking_time,
          arcade_name,
          coach_name,
          email,
          reason
        );
      } catch (error) {
        console.log("Error in sending email", error);
      }
    }
    const coachBooking = { status };
    console.log(id);
    console.log(coachBooking);
    const updatedCoachBooking = await coachBookingServices.updateCoachBooking(
      id,
      coachBooking
    );
    res.status(200).json(updatedCoachBooking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCoachBookingByCreatedTime = async (req, res) => {
  try {
    const { created_at, userId } = req.params;
    const coachBooking = req.body;
    const updatedCoachBooking =
      await coachBookingServices.updateCoachBookingByCreatedTime(
        created_at,
        userId,
        coachBooking
      );
    res.status(200).json(updatedCoachBooking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCoachBooking = async (req, res) => {
  try {
    const { id } = req.params;
    await coachBookingServices.deleteCoachBooking(id);
    res.status(200).json({ message: "Coach Booking deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCoachBooking,
  getCoachBookingById,
  getCoachBookingForCoach,
  getCoachBookingByArcadeId,
  getCoachBookingByBookingId,
  getCoachBookingByDate,
  getCoachBookingByCretedTime,
  addCoachBooking,
  updateCoachBooking,
  updateCoachBookingByCreatedTime,
  deleteCoachBooking,
};
