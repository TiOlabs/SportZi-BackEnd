const express = require("express");
const router = express.Router();
const sportController = require("../controllers/sport.controller");

router.get("/api/getSportDetails", sportController.getSport);
router.get("/api/getSportDetails/:id", sportController.getSportById);
router.post("/api/addSportDetails",  sportController.addSport);
router.put("/api/updateSportDetails/:id", sportController.updateSport);
router.delete("/api/deleteSportDetails/:id", sportController.deleteSport);

module.exports = router;
