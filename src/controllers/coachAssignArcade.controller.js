const coachCardService = require("../services/coachAssignArcade.service");

const getCoachAssignDetailsById = async (req, res) => {
  try {
    const { id } = req.params;
    const coachCards = await coachCardService.getCoachAssignDetailsById(id);
    if (coachCards) {
      res.status(200).json(coachCards);
    } else {
      res.status(404).json({ message: "Coach Card not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getZoneForCoachBooking = async (req, res) => {
  try {
    const { arcadeId, sportId, coachId } = req.params;
    const zone = await coachCardService.getZoneForCoachBooking(
      arcadeId,
      sportId,
      coachId
    );
    if (zone) {
      res.status(200).json(zone);
    } else {
      res.status(404).json({ message: "Zone not found" });
      console.log("Zone not found");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

const addCoachCard = async (req, res) => {
  try {
    const coach = req.body;
    const newCoach = await coachCardService.addCoachCard(coach);
    res.status(201).json(newCoach);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCoachCard = async (req, res) => {
  try {
    const { id } = req.params;
    const number = parseInt(id);
    const coachCard = req.body;
    const updatedCoachCard = await coachCardService.updateCoachCard(
      number,
      coachCard
    );
    res.status(200).json(updatedCoachCard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCoachCard = async (req, res) => {
  try {
    const { id } = req.params;
    const number = parseInt(id);
    await coachCardService.deleteCoachCard(number);
    res.status(200).json({ message: "Coach Card deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCoachAssignDetailsById,
  getZoneForCoachBooking,
  addCoachCard,
  updateCoachCard,
  deleteCoachCard,
};