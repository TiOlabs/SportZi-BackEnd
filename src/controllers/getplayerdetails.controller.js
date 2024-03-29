const PlayerDetailsController = require("../services/getplayerdetails.service");

const getPlayerdetails = async (req, res) => {
  const { userId } = req.user;
  try {
    const playerDetails = await PlayerDetailsController.getPlayerdetails(
      userId
    );

    res.status(200).json(playerDetails);
  } catch (error) {
    res.status(500).json({ massege: error.massege });
  }

  // console.log(req.user);
  // console.log("sdfsdf");
};

module.exports = {
  getPlayerdetails,
};
