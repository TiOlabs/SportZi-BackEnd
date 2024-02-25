const express = require("express");
const router = express.Router();
const arcadeManagerController= require("../controllers/arcadeManager.controller");

// router.get("/api/getarcadeManager", arcadeManagerController.getArcadeManager);
router.post("/api/addarcadeManager", arcadeManagerController.addArcadeManager);
// router.put("/api/updatearcadeManager/:id", arcadeManagerController.updateArcadeManager);
// router.delete("/api/deletearcadeManager/:id", arcadeManagerController.deleteArcadeManager);


module.exports = router;