const express = require("express");
const router = express.Router();
const arcadeFeedbacksController = require("../controllers/arcadeFeedbacks.controller");


const authenticateToken = require("../middlewares/authenticateToken");

router.get("/")
router.get("/api/getarcadefeedbacks/:arcadeId", arcadeFeedbacksController.getArcadeFeedbacks);
router.post("/api/addarcadefeedbacks/:arcadeId",authenticateToken,arcadeFeedbacksController.addArcadeFeedbacks);
// router.put("/api/updatearcadefeedbacks/:id", arcadeFeedbacksController.updateArcadeFeedbacks);
// router.delete("/api/deletearcadefeedbacks/:id", arcadeFeedbacksController.deleteArcadeFeedbacks);

router.get("/api/getaverageratingbyarcadeId/:arcadeId",arcadeFeedbacksController.getArcadeAvgRating);

module.exports = router;
