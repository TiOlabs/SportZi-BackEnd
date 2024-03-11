const express = require("express");
const router = express.Router();
const arcadeRatingsController = require("../controllers/arcadeFeedbacks.controller");

router.get("/api/getarcaderatings", arcadeRatingsController.getArcadeRatings);
router.post("/api/addarcaderatings", arcadeRatingsController.addArcadeRatings);
router.put("/api/updatearcaderatings/:id", arcadeRatingsController.updateArcadeRatings);
router.delete("/api/deletearcaderatings/:id", arcadeRatingsController.deleteArcadeRatings);


module.exports = router;