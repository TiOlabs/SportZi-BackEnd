const PlayerDetailsService = require("../services/Playerdetails.service");

const getPlayerdetails = async (req, res) => {
  const { userId } = req.body;
  try {
    const playerDetails = await PlayerDetailsService.getPlayerdetails(userId);
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
    const { firstname, lastname, discription, achivement, user_image } =
      req.body;
    const playerDetails = await PlayerDetailsService.updatePlayerdetails(
      userId,
      firstname,
      lastname,
      discription,
      achivement,
      user_image
    );
    res.status(200).json(playerDetails);
  } catch (error) {
    res.status(500).json({ messageee: error.message });
  }
};

const uploadPlayerPhoto = async (req, res) => {
  try {
    const { user_id } = req.body;
    const { image_url } = req.body;
    const playerDetails = await PlayerDetailsService.uploadPlayerPhoto(
      user_id,
      image_url
    );
    res.status(200).json(playerDetails);
  } catch (error) {
    res.status(500).json({ messageee: error.message });
  }
};

const getPlayerPhotos = async (req, res) => {
  try {
    const { userId } = req.params;
    const playerDetails = await PlayerDetailsService.getPlayerPhotos(userId);
    res.status(200).json(playerDetails);
  } catch (error) {
    res.status(500).json({ messageee: error.message });
  }
};

const addPlayerphotos = async (req, res) => {
  try {
    const { user_id } = req.body;
    const { image_url } = req.body;
    const playerDetails = await PlayerDetailsService.addPlayerphotos(
      user_id,
      image_url
    );
    res.status(200).json(playerDetails);
  } catch (error) {
    res.status(500).json({ messageee: error.message });
  }
};

module.exports = {
  getPlayerdetails,
  updatePlayerdetails,
  uploadPlayerPhoto,
  getPlayerPhotos,
  addPlayerphotos,
};
