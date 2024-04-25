const zoneService = require("../services/zone.service");

const getZone = async (req, res) => {
  try {
    const zone = await zoneService.getZone();
    res.status(200).json(zone);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getZoneById = async (req, res) => {
  try {
    const { id } = req.params;
    const zone = await zoneService.getZoneById(id);
    if (zone) {
      res.status(200).json(zone);
    } else {
      res.status(404).json({ message: "Zone not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addZone = async (req, res) => {
  try {
    const zone = req.body;
    const newZone = await zoneService.addZone(zone);
    res.status(201).json(newZone);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateZone = async (req, res) => {
  try {
    const { id } = req.params;
    const number = parseInt(id);
    const zone = req.body;
    const updatedZone = await zoneService.updateZone(number, zone);
    res.status(200).json(updatedZone);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteZone = async (req, res) => {
  try {
    const { id } = req.params;
    const number = parseInt(id);
    await zoneService.deleteZone(number);
    res.status(200).json({ message: "Zone Booking deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getZone,
  getZoneById,
  addZone,
  updateZone,
  deleteZone,
};
