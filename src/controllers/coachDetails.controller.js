const coachDetailsServices = require("../services/coachDetails.service");

const getCoachDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const coachDetails = await coachDetailsServices.getCoachDetails(id);
    res.status(200).json(coachDetails);
    console.log(coachDetails);
  } catch (err) {
    console.log(err);
  }
};

const getCoachDetailsToUsers = async (req, res) => {
  const { coachId } = req.query;
  try {
    const coachDetails = await coachDetailsServices.getCoachDetailsToUsers(
      coachId
    );
    res.status(200).json(coachDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateCoachDetailsController = async (req, res) => {
  const { id } = req.params;
  console.log("kkkkk", id);
  const {
    firstname,
    lastName,
    //   photo,
    discription,
    sport_id,
    combinedTimeslot,
    qulifications,
  } = req.body;
  console.log(qulifications);
  try {
    if (qulifications) {
      try {
        const deleteQulifications =
          await coachDetailsServices.deleteQulifications(id);
      } catch (error) {
        res.status(500).json({ massege: error.massege });
      }
    }
  } catch (error) {
    throw new error("error");
  }
  // try {
  //   if (combinedTimeslot) {
  //     try {
  //       const deleteTimeSlots = await coachDetailsServices.deleteAvailability(
  //         id
  //       );
  //     } catch (error) {
  //       res.status(500).json({ massege: error.massege });
  //     }
  //   }
  // } catch (error) {
  //   throw new error("error");
  // }
  try {
    await coachDetailsServices.updateCoachDetails(
      id,
      firstname,
      lastName,
      // photo,
      discription,
      sport_id,
      combinedTimeslot,
      qulifications
    );
    res.status(200).json({ message: "Coach details updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCoachDetails,
  getCoachDetailsToUsers,
  updateCoachDetailsController,
};
