const archadeDetailsController = require("../services/ArchadeDetails.service");
const getArchadeDetails = async (req, res) => {
  try {
    const { ArcadeId } = req.query;
    const archadeDetails = await archadeDetailsController.getArchadeDetails(
      ArcadeId
    );
    console.log(ArcadeId);
    res.status(200).json(archadeDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateArcadeDetails = async (req, res) => {
  try {
    const { id } = req.params;
    let {
      arcade_name,
      discription,
      address,
      open_time,
      close_time,
      location,
      arcade_image,
      accNumber,
    } = req.body;
    console.log(accNumber);
    const ArchadeDetails = await archadeDetailsController.updateArcadeDetails(
      id,
      arcade_name,
      discription,
      address,
      open_time,
      close_time,
      location,
      arcade_image,
      accNumber
      //user_image
    );
    res.status(200).json(ArchadeDetails);
  } catch (error) {
    res.status(500).json({ messageee: error.message });

    console.log("eroor", error);
  }
};
module.exports = { getArchadeDetails, updateArcadeDetails };
