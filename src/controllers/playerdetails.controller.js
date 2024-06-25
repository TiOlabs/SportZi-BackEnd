const { use } = require("../routes/PayerDetails.route");
const PlayerDetailsController = require("../services/Playerdetails.service");

const getPlayerdetails = async (req, res) => {
  const { userId } = req.user;
  try {
    const { id } = req.params;
    console.log(id);
    const playerDetails = await PlayerDetailsController.getPlayerdetails(id);
    res.status(200).json(playerDetails);
  } catch (error) {
    res.status(500).json({ massege: error.massege });
    console.log("error", error);
  }
};

const getPlayerdetailsUser = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const playerDetails = await PlayerDetailsController.getPlayerdetails(id);
    res.status(200).json(playerDetails);
  } catch (error) {
    res.status(500).json({ massege: error.massege });
    console.log("error", error);
  }
};
const addPlayerdetails = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({ messageee: error.message });
    console.log("error", error);
  }
};

const updatePlayerdetails = async (req, res) => {
  try {
    const { id } = req.params;
    let { firstname, lastname, discription, achivements, user_image } =
      req.body;
    console.log("achivements", achivements);
    console.log(firstname, lastname, discription, achivements);

    try {
      if (achivements) {
        try {
          const deleteAchivments =
            await PlayerDetailsController.deleteAchivments(id);
        } catch (error) {
          res.status(500).json({ massege: error.massege });
        }
      }
    } catch (error) {
      throw new error("error");
    }
    const playerDetails = await PlayerDetailsController.updatePlayerdetails(
      id,
      firstname,
      lastname,
      discription,
      achivements,
      user_image
    );
    console.log("playerDetails", playerDetails);
    res.status(200).json(playerDetails);
  } catch (error) {
    res.status(500).json({ messageee: error.message });

    console.log("eroor", error);
  }
};

module.exports = {
  getPlayerdetails,
  getPlayerdetailsUser,
  addPlayerdetails,
  updatePlayerdetails,
};
