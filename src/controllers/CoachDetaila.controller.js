const getCoachDetailsController = require("../services/coachDetails.services");
const getCoachDetails = async (req, res) => {
  const { userId } = req.user;
  try {
    const coachDetails = await getCoachDetailsController.getCoachDetails(
      userId
    );
    console.log(coachDetails);
    res.status(200).json(coachDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getCoachDetails };
