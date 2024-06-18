const express = require("express");
const router = express.Router();
const adminController= require("../controllers/admin.controller");


router.get("/api/getadmin",adminController.getAdmin)
router.post("/api/addadmin", adminController.addAdmin);
router.put("/api/updateadmin/:id", adminController.updateAdmin);
router.put("/api/removeadmin", adminController.removeAdmin);
router.delete("/api/deleteadmin/:id", adminController.deleteAdmin);







module.exports = router;