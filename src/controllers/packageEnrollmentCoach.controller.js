const packageEnrollmentCoachService = require("../services/packageEnrollmentCoach.service");

const getPackageEnrollmentCoach = async (req, res) => {
  try {
    const packageEnrollmentCoach =
      await packageEnrollmentCoachService.getPackageEnrollmentCoach();
    res.status(200).json(packageEnrollmentCoach);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getPackageEnrollmentCoachById = async (req, res) => {
  try {
    const { id } = req.params;
    const packageEnrollmentCoach =
      await packageEnrollmentCoachService.getPackageEnrollmentCoachById(id);
    if (packageEnrollmentCoach) {
      res.status(200).json(packageEnrollmentCoach);
    } else {
      res.status(404).json({ message: "PackageEnrollmentCoach not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const addPackageEnrollmentCoach = async (req, res) => {
  try {
    const packageEnrollmentCoach = req.body;
    const newPackageEnrollmentCoach =
      await packageEnrollmentCoachService.addPackageEnrollmentCoach(
        packageEnrollmentCoach
      );
    res.status(201).json(newPackageEnrollmentCoach);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePackageEnrollmentCoach = async (req, res) => {
  try {
    const { coach_id, package_id } = req.params;
    const { status, email, arcade_name, package_name, role } = req.body;
    const packageEnrollmentCoach = { status };
    if (role === "ARCADE") {
      try {
        ArcadeCanceledPackageEnrollmentCoach(email, arcade_name, package_name);
      } catch (error) {
        console.log("Error in sending email", error);
      }
    }
    const updatedPackageEnrollmentCoach =
      await packageEnrollmentCoachService.updatePackageEnrollmentCoach(
        coach_id,
        package_id,
        packageEnrollmentCoach
      );
    res.status(200).json(updatedPackageEnrollmentCoach);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePackageEnrollmentCoach = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPackageEnrollmentCoach =
      await packageEnrollmentCoachService.deletePackageEnrollmentCoach(id);
    res.status(200).json(deletedPackageEnrollmentCoach);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPackageEnrollmentCoach,
  getPackageEnrollmentCoachById,
  addPackageEnrollmentCoach,
  updatePackageEnrollmentCoach,
  deletePackageEnrollmentCoach,
};
