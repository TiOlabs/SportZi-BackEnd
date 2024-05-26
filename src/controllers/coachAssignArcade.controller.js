const { sentEmail } = require("../sentMail/Sentmail");
const coachCardService = require("../services/coachAssignArcade.service");
const { CoachAcceptEmail } = require("../sentMail/coachAcception");
const { CoachUnassigned } = require("../sentMail/coachUnassigned");
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

const getCoachApplyingDetailsById = async (req, res) => {
  try {
    const { id } = req.params;
    const coachApplyDetails =
      await coachCardService.getCoachApplyingDetailsById(id);
    if (coachApplyDetails) {
      res.status(200).json(coachApplyDetails);
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
    console.log("coach", coach);
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

const updateCoachAssignDetailsForArcade = async (req, res) => {
  console.log("req.body", req.body);
  console.log("req.body.email", req.body.email);
  console.log("req.body.coach_name", req.body.coach_name);
  try {
    const { email, coach_name, arcade_name, arcade_email, role } = req.body;
    // Send email
    if (role === "COACH") {
      try {
        CoachUnassigned(arcade_email, coach_name, arcade_name);
      } catch (error) {
        console.log("Error in sending email", error);
      }
    } else {
      try {
        CoachAcceptEmail(email, coach_name, arcade_name);
      } catch (error) {
        console.log("Error in sending email", error);
      }
    }

    // Extract only the fields needed for updating the coach assignment details
    const { coach_id, arcade_id, status } = req.body;
    console.log("coach_id", coach_id);
    console.log("arcade_id", arcade_id);
    console.log("status", status);

    const coachAssignDetails = { coach_id, arcade_id, status };

    // Update coach assignment details
    const updatedCoachCard =
      await coachCardService.updateCoachAssignDetailsForArcade(
        coachAssignDetails
      );

    // Send the updated coach card in the response
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
  getCoachApplyingDetailsById,
  addCoachCard,
  updateCoachCard,
  updateCoachAssignDetailsForArcade,
  deleteCoachCard,
};
