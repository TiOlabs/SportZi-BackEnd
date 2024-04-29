const coachBookingServices = require("../services/coachBooking.services");

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
    const updatedCoachBooking = await coachBookingServices.updateCoachBooking(
      id,
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
  getCoachBookingByDate,
  addCoachBooking,
  updateCoachBooking,
  deleteCoachBooking,
};
