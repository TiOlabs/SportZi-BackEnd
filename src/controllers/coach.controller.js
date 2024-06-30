const coachService = require("../services/coach.service");
const verifyEmailService = require("../services/verifyEmail.service");

const getCoach = async (req, res) => {
  try {
    const coaches = await coachService.getCoaches();
    const reversedcoaches = coaches.reverse();
    res.status(200).json(reversedcoaches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCoachById = async (req, res) => {
  try {
    const { id } = req.params;
    const coach = await coachService.getCoachById(id);
    if (coach) {
      res.status(200).json(coach);
    } else {
      res.status(404).json({ message: "Coach not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCoachAvailiability = async (req, res) => {
  try {
    const { id } = req.params;

    const coach = await coachService.getCoachAvailiability(id);
    if (coach) {
      res.status(200).json(coach);
    } else {
      res.status(404).json({ message: "Coach not found" });
    }
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

const updateCoach = async (req, res) => {
  try {
    const { id } = req.params;
    const coach = req.body;
    const updatedCoach = await coachService.updateCoach(id, coach);
    res.status(200).json(updatedCoach);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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
    const { 
      // combinedTimeslot,
       ...coach } = req.body;

    const user = await coachService.addCoach(
      req,
      res,
      coach,
      // combinedTimeslot
    );
    const token = verifyEmailService.generateToken(user);
    // console.log(token);
    const verifcationEmail = await verifyEmailService.sendVerificationEmail(user, token);

    res.status(200).json({ message: 'Signup successful! Please check your email to verify your account.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCoach,
  getCoachById,
  getCoachAvailiability,
  addCoach,
  updateCoach,
  deleteCoach,
};
