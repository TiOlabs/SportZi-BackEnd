const PlayerDetailsController = require("../services/Playerdetails.service");

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
    console.log("controller begin");
    const { userId } = req.user;
    let { firstname, lastname, discription, achivements, user_image } =
      req.body;
    // achivements = ["dvdf", " fsd", " sgfvs"];
    // console.log("dds", achivements);
    // try {
    //   if (achivements) {
    //     try {
    //       const deleteAchivments =
    //         await PlayerDetailsController.deleteAchivments(userId);
    //     } catch (error) {
    //       res.status(500).json({ massege: error.massege });
    //     }
    //   }
    // } catch (error) {
    //   throw new error("error");
    // }
    const playerDetails = await PlayerDetailsController.updatePlayerdetails(
      userId,
      firstname,
      lastname,
      discription,
      user_image,
      achivements
    );
    res.status(200).json(playerDetails);
    console.log("controller succes", playerDetails);
  } catch (error) {
    res.status(500).json({ messageee: error.message });
    console.log("plaaaaaaaaaaaaaaaaaaaa", error);
  }
};

module.exports = {
  getPlayerdetails,
  updatePlayerdetails,
};
