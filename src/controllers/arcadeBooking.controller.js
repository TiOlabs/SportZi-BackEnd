const arcadeBookingService = require("../services/arcadeBooking.service");

const getArcadeBooking = async (req, res) => {
  try {
    const arcadeBookings = await arcadeBookingService.getArcadeBookings();
    res.status(200).json(arcadeBookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getArcadeBookingById = async (req, res) => {
    try {
      const { id } = req.params;
      const number = parseInt(id);
      const arcadeBooking = await arcadeBookingService.getArcadeBookingById(number);
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
      const { date,zoneId } = req.params;
      console.log(date,zoneId);
      const arcadeBooking = await arcadeBookingService.getArcadeBookingByDate(date,zoneId);
      if (arcadeBooking) {
        res.status(200).json(arcadeBooking);
      } else {
        res.status(404).json({ message: "Arcade Booking not found" });
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

const updateArcadeBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const arcadeBooking = req.body;
    const updatedArcadeBooking = await arcadeBookingService.updateArcadeBooking(
      id,arcadeBooking
    );
    res.status(200).json(updatedArcadeBooking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteArcadeBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const number = parseInt(id);
    await arcadeBookingService.deleteArcadeBooking(number);
    res.status(200).json({ message: "Arcade Booking deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getArcadeBooking,
  getArcadeBookingById,
  getArcadeBookingByDate,
  addArcadeBooking,
  updateArcadeBooking,
  deleteArcadeBooking,
};
