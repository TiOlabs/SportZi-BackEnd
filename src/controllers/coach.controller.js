const coachService = require("../services/coach.service");

const getCoach = async (req, res) => {
  try {
    const coaches = await coachService.getCoaches();
    res.status(200).json(coaches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//   const addCoach = async (req, res) => {
//     try {
//       const coach = req.body;
//       const newCoach = await coachService.addCoach(
//         coach
//       );
//       res.status(201).json(newCoach);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   };

//   const updateCoach = async (req, res) => {
//     try {
//       const { id } = req.params;
//       const number = parseInt(id);
//       const coach = req.body;
//       const updatedCoach = await coachService.updateCoach(
//         number,coach
//       );
//       res.status(200).json(updatedCoach);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   };

const deleteCoach = async (req, res) => {
  try {
    const { id } = req.params;
    // const number = parseInt(id);
    const deletedCoach = await coachService.deleteCoach(id);
    res
      .status(200)
      .json({ message: "Coach deleted", DeletedCoach: deletedCoach });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//new controllers

const addCoach = async (req, res) => {
  try {
    const coach = req.body;
    const newCoach = await coachService.addCoach(req, res, coach);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCoach,
  addCoach,
  // updateCoach,

  deleteCoach,
};
