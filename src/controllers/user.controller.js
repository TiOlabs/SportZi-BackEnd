const userServices = require("../services/user.service");

const getUser = async (req, res) => {
  try {
    const users = await userServices.getUser();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userServices.getUserById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("error", error);
  }
};

const addUser = async (req, res) => {
  try {
    const user = req.body;
    const newUser = await userServices.addUserPhoto(user);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addUserPhoto = async (req, res) => {
  try {
    let { user_id, image } = req.body;
    const user = await userServices.addUserPhoto(user_id, image);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUserPhoto = async (req, res) => {
  try {
    const { user_id, image } = req.body;
    await userServices.deleteUserPhoto(user_id, image);
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.body;
    const updatedUser = await userServices.updateUser(id, user);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deactivateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.body;
    const updatedUser = await userServices.deactivateUser(id, user);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};  

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const number = parseInt(id);
    await userServices.deleteUser(number);
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUser,
  getUserById,
  addUser,
  addUserPhoto,
  updateUser,
  deactivateUser,
  deleteUserPhoto,
  deleteUser,
};
