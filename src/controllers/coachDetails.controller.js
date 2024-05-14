const coachDetailsServices = require("../services/coachDetails.service");

const getCoachDetails = async (req, res) => {
  const { id } = req.params;
  console.log("ccccc",id);
  try {
    const coachDetails = await coachDetailsServices.getCoachDetails(id);
    res.status(200).json(coachDetails);
    console.log(coachDetails);
  } catch (err) {
    console.log(err);
  }
};
module.exports = { getCoachDetails };
