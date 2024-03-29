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

const updatePlayerdetails = async (req, res) => {
  try {
    const { userId } = req.user;
    const { email } = req.params;

    const playerDetails = await PlayerDetailsController.updatePlayerdetails(
      userId,
      email
    );
    res.status(200).json(playerDetails);
    console.log("plaaaaaaaaaaaaaaaaaaaa", playerDetails);
  } catch (error) {
    res.status(500).json({ messageee: error.message });
    console.log("plaaaaaaaaaaaaaaaaaaaa", error);
  }
};

module.exports = {
  getPlayerdetails,
  updatePlayerdetails,
};
