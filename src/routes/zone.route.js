const express = require("express");
const router = express.Router();

const zoneController = require("../controllers/zone.controller");

router.get("/api/getZoneDetails", zoneController.getZone);
router.get("/api/getZoneDetails/:id", zoneController.getZoneById);
router.post("/api/addZoneDetails", zoneController.addZone);
router.put("/api/updateZoneDetails/:id", zoneController.updateZone);
router.delete("/api/deleteZoneDetails/:id", zoneController.deleteZone);

module.exports = router;



