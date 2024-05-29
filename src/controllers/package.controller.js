const packageService = require("../services/package.service");

const getPackage = async (req, res) => {
  try {
    const package = await packageService.getPackage();
    console.log("package", package);
    res.status(200).json(package);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPackageById = async (req, res) => {
  try {
    const { id } = req.params;
    const package = await packageService.getPackageById(id);
    if (package) {
      res.status(200).json(package);
    } else {
      res.status(404).json({ message: "Package not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const addPackage = async (req, res) => {
  console.log("req.body");
  console.log("req.body", req.body);
  try {
    const { combinedTimeslot, ...packageData } = req.body;
    console.log("packageData", packageData);
    console.log("combinedTimeslot", combinedTimeslot);
    const newPackage = await packageService.addPackage(packageData , combinedTimeslot);
    res.status(201).json(newPackage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePackage = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const number = id;
    const package = req.body;
    const updatedPackage = await packageService.updatePackage(number, package);
    res.status(200).json(updatedPackage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePackage = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("mtyugy7g67", id);
    // const number = parseInt(id);
    await packageService.deletePackage(id);
    res.status(200).json({ message: "Package Booking deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPackage,
  getPackageById,
  addPackage,
  updatePackage,
  deletePackage,
};
