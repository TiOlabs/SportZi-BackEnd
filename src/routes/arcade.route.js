const express = require("express");
const router = express.Router();
const arcadeController = require("../controllers/arcade.controller");

router.get("/api/getarcadeDetails", arcadeController.getArcade);
router.post("/api/addarcadeDetails", arcadeController.addArcade);
router.put("/api/updatearcadeDetails/:id", arcadeController.updateArcade);
router.delete("/api/deletearcadeDetails/:id", arcadeController.deleteArcade);


module.exports = router;
