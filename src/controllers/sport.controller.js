const sportService = require("../services/sport.service");

const getSport = async (req, res) => {
  try {
    const sport = await sportService.getSport();
    res.status(200).json(sport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSportById = async (req, res) => {
  try {
    const { id } = req.params;
    const sport = await sportService.getSportById(id);
    if (sport) {
      res.status(200).json(sport);
    } else {
      res.status(404).json({ message: "Sport not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addSport = async (req, res) => {
  console.log(req.body);
  try {
    const sport = req.body;
    const newSport = await sportService.addSport(sport);
    res.status(201).json(newSport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSport = async (req, res) => {
  try {
    const { id } = req.params;
    const number = id;
    const sport = req.body;
    const updatedSport = await sportService.updateSport(number, sport);
    res.status(200).json(updatedSport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSport = async (req, res) => {
  try {
    const { id } = req.params;
    await sportService.deleteSport(id);
    res.status(200).json({ message: "Sport deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getSport,
  getSportById,
  addSport,
  updateSport,
  deleteSport,
};
