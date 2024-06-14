const archadeDetailsController = require("../services/ArchadeDetails.service");
const getArchadeDetails = async (req, res) => {
  try {
    const { ArcadeId } = req.query;
    const archadeDetails = await archadeDetailsController.getArchadeDetails(
      ArcadeId
    );
    res.status(200).json(archadeDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateArcadeDetails = async (req, res) => {
  try {
    const { id } = req.params;
    let { arcade_name, discription, open_time, close_time,location ,arcade_image } = req.body;

    // try {
    //   if (paymentTypes) {
    //     try {
    //       const deletePaymentType =
    //         await PlayerDetailsController.deleteAchivments(id);
    //     } catch (error) {
    //       res.status(500).json({ massege: error.massege });
    //     }
    //   }
    // } catch (error) {
    //   throw new error("error");
    // }
    const ArchadeDetails = await archadeDetailsController.updateArcadeDetails(
      id,
      arcade_name,
      discription,
      open_time,
      close_time,
      location,
      arcade_image
      //user_image
    );
    res.status(200).json(ArchadeDetails);
  } catch (error) {
    res.status(500).json({ messageee: error.message });

    console.log("eroor", error);
  }
};
module.exports = { getArchadeDetails, updateArcadeDetails };
