const arcadeBookingService = require("../services/arcadeBooking.service");
const {
  PlayerCanceledArcadeBooking,
} = require("../sentMail/playerCanceledArcadeBookings");
const {
  ArcadeCanceledArcadeBooking,
} = require("../sentMail/arcadeCanceledArcadeBooking");
const {
  ArcadeCanceledCoachBooking,
} = require("../sentMail/arcadeCanceledCoachBookings");
const {
  ArcadeBookingEmailForArcade,
} = require("../sentMail/arcadeBookingEmail");
const {
  ArcadeBookingEmailForUser,
} = require("../sentMail/arcadeBookingEmailForUser");
const { ArcadeCloseArcade } = require("../sentMail/arcadeCloseArcade");
const {
  sendNotificationToArcadeAboutZoneBooking,
  sendNotificationToPlayerAboutPlayerCancelZoneBooking,
  sendNotificationToArcadeAboutPlayerCancelZoneBooking,
  sendNotificationToArcadeAboutArcadeCancelZoneBooking,
  sendNotificationToPlayerAboutArcadeCancelZoneBooking,
} = require("../services/notification.service");

const getArcadeBooking = async (req, res) => {
  try {
    const arcadeBookings = await arcadeBookingService.getArcadeBookings();
    res.status(200).json(arcadeBookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getCompleteArcadeBooking = async (req, res) => {
  try {
    const arcadeBookings =
      await arcadeBookingService.getCompleteArcadeBooking();
    res.status(200).json(arcadeBookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getArcadeBookingById = async (req, res) => {
  try {
    const { id } = req.params;
    const arcadeBooking = await arcadeBookingService.getArcadeBookingById(id);
    if (arcadeBooking) {
      res.status(200).json(arcadeBooking);
    } else {
      res.status(404).json({ message: "Arcade Booking not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getArcadeBookingForArcade = async (req, res) => {
  try {
    const { id } = req.params;
    const arcadeBooking = await arcadeBookingService.getArcadeBookingForArcade(
      id
    );
    if (arcadeBooking) {
      res.status(200).json(arcadeBooking);
    } else {
      res.status(404).json({ message: "Arcade Booking not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getArcadeBookingByDate = async (req, res) => {
  try {
    const { date, zoneId } = req.params;
    const arcadeBooking = await arcadeBookingService.getArcadeBookingByDate(
      date,
      zoneId
    );
    if (arcadeBooking) {
      res.status(200).json(arcadeBooking);
    } else {
      res.status(404).json({ message: "Arcade Booking not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getArcadeBookingByCretedTime = async (req, res) => {
  try {
    const { created_at, userId } = req.params;

    const arcadeBooking =
      await arcadeBookingService.getArcadeBookingByCretedTime(
        created_at,
        userId
      );
    if (arcadeBooking) {
      res.status(200).json(arcadeBooking);
    } else {
      res.status(404).json({ message: "Arcade Booking not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getArcadeBookingByBookingId = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const arcadeBooking =
      await arcadeBookingService.getArcadeBookingsByBookingId(bookingId);
    if (arcadeBooking) {
      res.status(200).json(arcadeBooking);
    } else {
      res.status(404).json({ message: "----Arcade Booking not found-----" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addArcadeBooking = async (req, res) => {
  try {
    const {
      status,
      date,
      time,
      full_amount,
      participant_count,
      user_id,
      zone_id,
      way_of_booking,
      booking_type,
      created_at,
      arcade_email,
      arcade_name,
      role,
      reservation_type,
      zone_name,
      user_name,
      email,
      arcadeId,
    } = req.body;
    if (booking_type === "zone") {
      try {
        ArcadeBookingEmailForArcade(
          arcade_email,
          arcade_name,
          role,
          reservation_type,
          zone_name,
          full_amount,
          date,
          time,
          participant_count,
          user_name
        );
        sendNotificationToArcadeAboutZoneBooking({
          arcadeId: arcadeId,
          message: `Zone ${zone_name} has been booked on ${date} at ${time} by ${user_name}`,
        });
      } catch (error) {
        console.log("Error in sending email", error);
      }
      try {
        ArcadeBookingEmailForUser(
          email,
          arcade_name,
          role,
          reservation_type,
          zone_name,
          full_amount,
          date,
          time,
          user_name
        );
      } catch (error) {
        console.log("Error in sending email", error);
      }
    }
    const arcadeBaooking = {
      status,
      date,
      time,
      full_amount,
      participant_count,
      user_id,
      zone_id,
      way_of_booking,
      booking_type,
      created_at,
    };
    const newArcadeBooking = await arcadeBookingService.addArcadeBooking(
      arcadeBaooking
    );
    res.status(201).json(newArcadeBooking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateArcadeBookingByCretedTime = async (req, res) => {
  try {
    const { created_at, userId } = req.params;
    const arcadeBooking = req.body;
    const updatedArcadeBooking =
      await arcadeBookingService.updateArcadeBookingByCretedTime(
        created_at,
        userId,
        arcadeBooking
      );
    res.status(200).json(updatedArcadeBooking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateArcadeBooking = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      booking_id,
      status,
      email,
      role,
      zone_name,
      player_name,
      booking_date,
      booking_time,
      arcade_name,
      arcade_email,
      coach_email,
      coach_name,
      reason,
      timeForDay,
      timeForDate,
      user_names,
      emails,
      user_ids,
      user_id,
      arcade_id,
    } = req.body;
    console.log("reason", reason);

    if (role === "PLAYER") {
      try {
        console.log(reason);
        PlayerCanceledArcadeBooking(
          email,
          zone_name,
          player_name,
          booking_date,
          booking_time,
          arcade_name,
          arcade_email,
          reason
        );
        sendNotificationToPlayerAboutPlayerCancelZoneBooking({
          playerId: user_id,
          message: `successfully canceled booking for ${zone_name} on ${booking_date} at ${booking_time}`,
        });
        sendNotificationToArcadeAboutPlayerCancelZoneBooking({
          arcadeId: arcade_id,
          message: `${player_name} has canceled booking for ${zone_name} on ${booking_date} at ${booking_time}`,
        });
      } catch (error) {
        console.log("Error in sending email", error);
      }
    } else if (role === "ARCADE") {
      try {
        ArcadeCanceledArcadeBooking(
          email,
          zone_name,
          player_name,
          booking_date,
          booking_time,
          arcade_name,
          reason
        );
        sendNotificationToArcadeAboutArcadeCancelZoneBooking({
          arcadeId: arcade_id,
          message: `successfully canceled booking for ${zone_name} on ${booking_date} at ${booking_time}`,
        });
        sendNotificationToPlayerAboutArcadeCancelZoneBooking({
          playerId: user_id,
          message: `${arcade_name} has canceled booking for ${zone_name} on ${booking_date} at ${booking_time}`,
        });
      } catch (error) {
        console.log("Error in sending email", error);
      }
    } else if (role === "ForceDeleteZoneBookings") {
      try {
        emails.forEach((email) => {
          user_names.forEach((user_name) => {
            ArcadeCloseArcade(
              email,
              zone_name,
              arcade_name,
              reason,
              user_name,
              timeForDay
            );
          });
        });
        user_ids.forEach((user_id) => {
          sendNotificationToPlayerAboutArcadeCancelZoneBooking({
            playerId: user_id,
            message: `${arcade_name} has canceled booking for ${zone_name} on ${timeForDate} at ${timeForDay}`,
          });
        });
      } catch (error) {
        console.log("Error in sending email", error);
      }
    }
    const arcadeBooking = { status };
    const updatedArcadeBooking = await arcadeBookingService.updateArcadeBooking(
      id,
      arcadeBooking
    );
    res.status(200).json(updatedArcadeBooking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteArcadeBooking = async (req, res) => {
  try {
    const { id } = req.params;
    await arcadeBookingService.deleteArcadeBooking(id);
    res.status(200).json({ message: "Arcade Booking deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getArcadeBooking,
  getCompleteArcadeBooking,
  getArcadeBookingById,
  getArcadeBookingForArcade,
  getArcadeBookingByDate,
  getArcadeBookingByCretedTime,
  getArcadeBookingByBookingId,
  addArcadeBooking,
  updateArcadeBookingByCretedTime,
  updateArcadeBooking,
  deleteArcadeBooking,
};
