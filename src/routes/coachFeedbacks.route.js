//coachFeedbacks.route.js

const express = require("express");
const router = express.Router();
const coachFeedbacksController = require("../controllers/coachFeedbacks.controller");

const authenticateToken = require("../middlewares/authenticateToken");
const authorizePlayer = require("../middlewares/authorizePlayer");


// router.get("/api/getcoachfeedbacks", coachFeedbacksController.getCoachFeedbacks);
router.post("/api/addcoachfeedbacks",authenticateToken,authorizePlayer,coachFeedbacksController.addCoachFeedbacks);
// router.put("/api/updatecoachfeedbacks/:id", coachFeedbacksController.updateCoachFeedbacks);
// router.delete("/api/deletecoachfeedbacks/:id", coachFeedbacksController.deleteCoachFeedbacks);

router.get("/api/getaverageratingbycoachId/:coachId",coachFeedbacksController.getCoachAvgRating);


module.exports = router;