const coachDetailsServices = require("../services/coachDetails.services");

const getCoachDetails = async (req, res) => {
  const { userId } = req.user;
  console.log(userId);
  try {
    const coachDetails = await coachDetailsServices.getCoachDetails(userId);
    res.status(200).json(coachDetails);
    console.log(coachDetails);
  } catch (err) {
    console.log(err);
  }
};
module.exports = { getCoachDetails };
