const bookingCancelArcadeService = require("../services/bookingCancelArcade.service");

const getBookingCancelArcades = async (req, res) => {
  try {
    const bookingCancelArcades =
      await bookingCancelArcadeService.getBookingCancelArcades();
    res.status(200).json(bookingCancelArcades);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBookingCancelArcadeById = async (req, res) => {
  try {
    const { id } = req.params;
    const bookingCancelArcade =
      await bookingCancelArcadeService.getBookingCancelArcadeById(id);
    if (bookingCancelArcade) {
      res.status(200).json(bookingCancelArcade);
    } else {
      res.status(404).json({ message: "Booking Cancel Arcade not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addBookingCancelArcade = async (req, res) => {
  try {
    const bookingCancelArcade = req.body;
    const newBookingCancelArcade =
      await bookingCancelArcadeService.addBookingCancelArcade(
        bookingCancelArcade
      );
    res.status(201).json(newBookingCancelArcade);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateBookingCancelArcade = async (req, res) => {
  try {
    const { id } = req.params;
    const bookingCancelArcade = req.body;
    const updatedBookingCancelArcade =
      await bookingCancelArcadeService.updateBookingCancelArcade(
        id,
        bookingCancelArcade
      );
    res.status(200).json(updatedBookingCancelArcade);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBookingCancelArcade = async (req, res) => {
  try {
    const { id } = req.params;
    const bookingCancelArcade =
      await bookingCancelArcadeService.deleteBookingCancelArcade(id);
    res.status(200).json(bookingCancelArcade);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getBookingCancelArcades,
  getBookingCancelArcadeById,
  addBookingCancelArcade,
  updateBookingCancelArcade,
  deleteBookingCancelArcade,
};
