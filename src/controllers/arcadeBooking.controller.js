const arcadeBookingService = require("../services/arcadeBooking.service");

const getArcadeBookings = async (req, res) => {
  try {
    const arcadeBookings = await arcadeBookingService.getArcadeBookings();
    res.status(200).json(arcadeBookings);
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

module.exports = {
    getArcadeBookings,
    addArcadeBooking,
}
