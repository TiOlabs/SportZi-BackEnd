const coachCardService = require("../services/coachAssignArcade.service");

const getCoachCard = async (req, res) => {
  try {
    const coachCards = await coachCardService.getCoachCards();
    res.status(200).json(coachCards);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
  getCoachCard,
  addCoachCard,
  updateCoachCard,
  deleteCoachCard,
};
