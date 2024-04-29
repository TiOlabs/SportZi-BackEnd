const express = require('express');
const router = express.Router();
const userController = require("../controllers/user.controller");

router.get("/api/getuser", userController.getUser);
router.get("/api/getuser/:id", userController.getUserById);
router.post("/api/adduser", userController.addUser);
router.post("/api/addUserPhoto", userController.addUserPhoto);
router.put("/api/updateuser/:id", userController.updateUser);
router.delete("/api/deleteuser/:id", userController.deleteUser);

module.exports = router;