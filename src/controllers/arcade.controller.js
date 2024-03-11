const arcadeService = require('../services/arcade.service');

const getArcade = async (req, res) => {
    try {
      const arcade = await arcadeService.getArcade();
      res.status(200).json(arcade);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

const addArcade = async (req, res) => {
    try {
      const arcade = req.body;
      const newArcade = await arcadeService.addArcade(
        arcade
      );
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
      const updatedArcade= await arcadeService.updateArcade(
        number,arcade
      );
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
    addArcade,
    updateArcade,
    deleteArcade,
  };