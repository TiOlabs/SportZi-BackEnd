const packageEnrollmentPlayerService = require("../services/packageEnrollmentPlayer.service");
const {
  ArcadeCanceledPackageEnrollmentPlayer,
} = require("../sentMail/arcadeCanceledPackageEnrollmentPlayer");

const getPackageEnrollmentPlayer = async (req, res) => {
  try {
    const packageEnrollmentPlayer =
      await packageEnrollmentPlayerService.getPackageEnrollmentPlayer();
    console.log("packageEnrollmentPlayer", packageEnrollmentPlayer);
    res.status(200).json(packageEnrollmentPlayer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getPackageEnrollmentPlayerById = async (req, res) => {
  try {
    const { id } = req.params;
    const packageEnrollmentPlayer =
      await packageEnrollmentPlayerService.getPackageEnrollmentPlayerById(id);
    if (packageEnrollmentPlayer) {
      res.status(200).json(packageEnrollmentPlayer);
    } else {
      res.status(404).json({ message: "PackageEnrollmentPlayer not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const addPackageEnrollmentPlayer = async (req, res) => {
  console.log("req.body");
  console.log("req.body", req.body);
  try {
    const packageEnrollmentPlayer = req.body;
    const newPackageEnrollmentPlayer =
      await packageEnrollmentPlayerService.addPackageEnrollmentPlayer(
        packageEnrollmentPlayer
      );
    res.status(201).json(newPackageEnrollmentPlayer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePackageEnrollmentPlayer = async (req, res) => {
  try {
    const { player_id, package_id } = req.params;
    const { status, email, arcade_name, package_name, role } = req.body;
    const packageEnrollmentPlayer = { status };
    if (role === "ARCADE") {
      try {
        ArcadeCanceledPackageEnrollmentPlayer(email, arcade_name, package_name);
      } catch (error) {
        console.log("Error in sending email", error);
      }
    }
    const updatedPackageEnrollmentPlayer =
      await packageEnrollmentPlayerService.updatePackageEnrollmentPlayer(
        player_id,
        package_id,
        packageEnrollmentPlayer
      );
    res.status(200).json(updatedPackageEnrollmentPlayer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePackageEnrollmentPlayer = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("mtyugy7g67", id);
    // const number = parseInt(id);
    await packageEnrollmentPlayerService.deletePackageEnrollmentPlayer(id);
    res
      .status(200)
      .json({ message: "PackageEnrollmentPlayer Booking deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getPackageEnrollmentPlayer,
  getPackageEnrollmentPlayerById,
  addPackageEnrollmentPlayer,
  updatePackageEnrollmentPlayer,
  deletePackageEnrollmentPlayer,
};
