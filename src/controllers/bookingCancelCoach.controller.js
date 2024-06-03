const bookingCancelCoachService = require("../services/bookingCancelCoach.service");

const getBookingCancelCoaches = async (req, res) => {
  try {
    const bookingCancelCoaches =
      await bookingCancelCoachService.getBookingCancelCoaches();
    res.status(200).json(bookingCancelCoaches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBookingCancelCoachById = async (req, res) => {
  try {
    const { id } = req.params;
    const bookingCancelCoach =
      await bookingCancelCoachService.getBookingCancelCoachById(id);
    if (bookingCancelCoach) {
      res.status(200).json(bookingCancelCoach);
    } else {
      res.status(404).json({ message: "Booking Cancel Coach not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addBookingCancelCoach = async (req, res) => {
  try {
    const bookingCancelCoach = req.body;
    const newBookingCancelCoach =
      await bookingCancelCoachService.addBookingCancelCoach(bookingCancelCoach);
    res.status(201).json(newBookingCancelCoach);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateBookingCancelCoach = async (req, res) => {
  try {
    const { id } = req.params;
    const bookingCancelCoach = req.body;
    const updatedBookingCancelCoach =
      await bookingCancelCoachService.updateBookingCancelCoach(
        id,
        bookingCancelCoach
      );
    res.status(200).json(updatedBookingCancelCoach);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBookingCancelCoach = async (req, res) => {
  try {
    const { id } = req.params;
    const bookingCancelCoach =
      await bookingCancelCoachService.deleteBookingCancelCoach(id);
    res.status(200).json(bookingCancelCoach);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getBookingCancelCoaches,
  getBookingCancelCoachById,
  addBookingCancelCoach,
  updateBookingCancelCoach,
  deleteBookingCancelCoach,
};
