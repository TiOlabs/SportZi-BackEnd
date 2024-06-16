const arcadeService = require("../services/arcade.service");

const getArcade = async (req, res) => {
  try {
    const arcade = await arcadeService.getArcade();
    res.status(200).json(arcade);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getArcadeById = async (req, res) => {
  try {
    const { id } = req.params;
    const arcade = await arcadeService.getArcadeById(id);
    if (arcade) {
      res.status(200).json(arcade);
    } else {
      res.status(404).json({ message: "Arcade Booking not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getArcadeByArcadeId = async (req, res) => {
  try {
    const { id } = req.params;
    const arcade = await arcadeService.getArcadeByArcadeId(id);
    if (arcade) {
      res.status(200).json(arcade);
    } else {
      res.status(404).json({ message: "Arcade Booking not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getArcadeByArcadeIdForCoachBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const arcade = await arcadeService.getArcadeByArcadeIdForCoachBooking(id);
    if (arcade) {
      res.status(200).json(arcade);
    } else {
      res.status(404).json({ message: "Arcade Booking not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const addArcadePhoto = async (req, res) => {
  try {
    let { arcade_id, image } = req.body;
    const arcade = await arcadeService.addArcadePhoto(arcade_id, image);
    res.status(201).json(newarcade);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteArcadePhoto = async (req, res) => {
  try {
    const { arcade_id, image } = req.body;
    await arcadeService.deleteArcadePhoto(arcade_id, image);
    res.status(200).json({ message: "Arcade Booking deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addArcade = async (req, res) => {
  try {
    const arcade = req.body;
    console.log("arcade", arcade);  
    const newArcade = await arcadeService.addArcade(arcade);
    res.status(201).json(newArcade);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateArcade = async (req, res) => {
  try {
    const { id } = req.params;
    const number = parseInt(id);
    const arcade = req.body;
    const updatedArcade = await arcadeService.updateArcade(number, arcade);
    res.status(200).json(updatedArcade);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteArcade = async (req, res) => {
  try {
    const { id } = req.params;
    const number = parseInt(id);
    await arcadeService.deleteArcade(number);
    res.status(200).json({ message: "Arcade Booking deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getArcade,
  getArcadeById,
  getArcadeByArcadeId,
  getArcadeByArcadeIdForCoachBooking,
  addArcadePhoto,
  deleteArcadePhoto,
  addArcade,
  updateArcade,
  deleteArcade,
};
