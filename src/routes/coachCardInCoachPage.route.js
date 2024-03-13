const express = require("express");
const router = express.Router();
const coachCardInCoachPageController = require("../controllers/coachCardInCoachPage.controller");

router.get("/api/getcoachcardincoachpagevalues",coachCardInCoachPageController.getCoachCardInCoachPage);
router.post("/api/addcoachcardincoachpagevalues", coachCardInCoachPageController.addCoachCardInCoachPage);
router.put("/api/updatecoachcardincoachpagevalues/:id", coachCardInCoachPageController.updateCoachCardInCoachPage);
router.delete("/api/deletecoachcardincoachpagevalues/:id", coachCardInCoachPageController.deleteCoachCardInCoachPage);


module.exports = router;