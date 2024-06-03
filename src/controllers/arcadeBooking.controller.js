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
    console.log("gggggg");
    const { created_at, userId } = req.params;
    console.log("ccccccccc", created_at);
    console.log("dddddddddddd", userId);

    const arcadeBooking =
      await arcadeBookingService.getArcadeBookingByCretedTime(
        created_at,
        userId
      );
    console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh", arcadeBooking);
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
  console.log("getArcadeBookingByBookingId-------------");
  try {
    const { bookingId } = req.params;
    console.log("bookingId", bookingId);
    const arcadeBooking =
      await arcadeBookingService.getArcadeBookingsByBookingId(bookingId);
      console.log("arcadeBooking", arcadeBooking);
    if (arcadeBooking) {
      res.status(200).json(arcadeBooking);
      console.log("arcadeBooking------", arcadeBooking);
    } else {
      console.log("----Arcade Booking not found-----");
      res.status(404).json({ message: "----Arcade Booking not found-----" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addArcadeBooking = async (req, res) => {
  try {
    const arcadeBooking = req.body;
    const newArcadeBooking = await arcadeBookingService.addArcadeBooking(
      arcadeBooking
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
      } catch (error) {
        console.log("Error in sending email", error);
      }
    } else if (role === "ARCADE" ) {
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
