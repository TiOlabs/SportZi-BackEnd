const { adminEmail } = require("../sentMail/adminEmail");
const adminService = require("../services/admin.service");

const getAdmin = async (req, res) => {
  try {
    const admins = await adminService.getAdmins();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addAdmin = async (req, res) => {
  console.log("addAdmin");
  console.log(req.body);
  try {
    const { firstname, lastname, email, password, phone_number,role } = req.body;
    try {
      adminEmail(email, firstname, lastname, password);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
    console.log(firstname, lastname, email, password, phone_number);
    const admin = (firstname, lastname, email, password, phone_number);
    const newAdmin = await adminService.addAdmin(firstname, lastname, email, password, phone_number,role);
    res.status(201).json(newAdmin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.body);
    const { firstname, lastname, email,phone,password,currentPassword,role } = req.body;
    const updatedAdmin = await adminService.updateAdmin(
      id,
      firstname,
      lastname,
      email,
      phone,
      password,
      currentPassword,
      role

    );
    res.status(200).json(updatedAdmin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeAdmin = async (req, res) => {
  console.log("admin in controllerr",req.body);
  try {
    const { id,status } = req.body;
    const removedAdmin = await adminService.removeAdmin(id,status);
    res.status(200).json({ message: "Admin Removed", RemovedAdmin: removedAdmin });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAdmin = await adminService.deleteAdmin(id);
    res
      .status(200)
      .json({ message: "Admin Deleted", DeletedAdmin: deletedAdmin });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAdmin,
  addAdmin,
  updateAdmin,
  removeAdmin,
  deleteAdmin,
};
