const express = require("express");
const router = express.Router();
const coachCardController = require("../controllers/form.coachCard.controller");

router.get("/api/getcoachassignvalues",coachCardController.getCoachCard);
router.post("/api/addcoachassignvalues", coachCardController.addCoachCard);
router.put("/api/updatecoachcardvalues/:id", coachCardController.updateCoachCard);
router.delete("/api/deletecoachcardvalues/:id", coachCardController.deleteCoachCard);


module.exports = router;