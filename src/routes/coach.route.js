const express = require("express");
const router = express.Router();
const coachController= require("../controllers/coach.controller");

// router.get("/api/getcoach", coachController.getCoach);
router.post("/api/addcoach", coachController.addCoach);
// router.put("/api/updatecoach/:id", coachController.updateCoach);
// router.delete("/api/deletecoach/:id", coachController.deleteCoach);


module.exports = router;