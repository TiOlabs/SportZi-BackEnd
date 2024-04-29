const ManagersArchadesController = require("../services/ManagersArcadesse.services");

const getManagersArchades = async (req, res) => {
  const { userId } = req.user;
  console.log("userrId", userId);
  try {
    const ManagersArchades = await ManagersArchadesController.getArchades(
      userId
    );
    console.log("ManagersArchades", ManagersArchades);
    res.status(200).json(ManagersArchades);
  } catch (error) {
    console.log("erroro");
    res.status(500).json({ massege: error.massege });
  }
};
module.exports = { getManagersArchades };
