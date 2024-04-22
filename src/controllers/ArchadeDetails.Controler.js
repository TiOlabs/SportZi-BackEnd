const archadeDetailsController = require("../services/ArchadeDetails.services");
const getArchadeDetails = async (req, res) => {
  try {
    const { userId } = req.user;
    const archadeDetails = await archadeDetailsController.getArchadeDetails(
      userId
    );
    res.status(200).json(archadeDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { getArchadeDetails };
