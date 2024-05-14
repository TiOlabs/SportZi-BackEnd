const coachBookingServices = require("../services/coachBooking.service");

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
    const coachBooking = req.body;
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
    const coachBooking = req.body;
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
    const updatedCoachBooking = await coachBookingServices.updateCoachBookingByCreatedTime(
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
  getCoachBookingByBookingId,
  getCoachBookingByDate,
  getCoachBookingByCretedTime,
  addCoachBooking,
  updateCoachBooking,
  updateCoachBookingByCreatedTime,
  deleteCoachBooking,
};