const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const authenticateToken = require("../middlewares/authenticateToken");
const authorizeUser = require("../middlewares/authorizeUser");

router.get(
  "/api/getuser",
  authenticateToken,
  authorizeUser,
  userController.getUser
);
router.get(
  "/api/getuser/:id",
  authenticateToken,
  authorizeUser,
  userController.getUserById
);
router.post("/api/adduser", userController.addUser);
router.post("/api/addUserPhoto", userController.addUserPhoto);
router.delete("/api/deleteUserPhoto", userController.deleteUserPhoto);
router.put("/api/updateuser/:id", userController.updateUser);
router.put("/api/deactivateuser/:id", userController.deactivateUser);
router.delete("/api/deleteuser/:id", userController.deleteUser);

module.exports = router;
