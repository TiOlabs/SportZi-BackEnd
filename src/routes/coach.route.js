const express = require("express");
const router = express.Router();
const coachController= require("../controllers/coach.controller");

router.get("/api/getcoach", coachController.getCoach);
router.get("/api/getcoache/:id", coachController.getCoachById);
router.get("/api/getCoachAvailiability/:id", coachController.getCoachAvailiability);
router.post("/api/addcoach", coachController.addCoach);
// router.put("/api/updatecoach/:id", coachController.updateCoach);
router.delete("/api/deletecoach/:id", coachController.deleteCoach);


module.exports = router;
