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
module.exports = { getCoachDetails, getCoachDetailsToUsers };
