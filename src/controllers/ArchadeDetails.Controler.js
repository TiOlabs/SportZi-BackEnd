const archadeDetailsController = require("../services/ArchadeDetails.services");
const getArchadeDetails = async (req, res) => {
  try {
    const { ArcadeId } = req.query;
    console.log("controller", ArcadeId);
    const archadeDetails = await archadeDetailsController.getArchadeDetails(
      ArcadeId
    );
    res.status(200).json(archadeDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { getArchadeDetails };
