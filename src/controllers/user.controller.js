const userServices = require('../services/user.service');

const getUser = async (req, res) => {
    try {
        const users = await userServices.getUsers();
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
    }
    };

const addUser = async (req, res) => {
    try {
        const user = req.body;
        const newUser = await userServices.addUser(user);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = req.body;
        const updatedUser = await userServices.updateUser(id, user);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const number = parseInt(id);
        await userServices.deleteUser(number);
        res.status(200).json({ message: "User deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }

module.exports = {

    getUser,
    getUserById,
    addUser,
    updateUser,
    deleteUser

}