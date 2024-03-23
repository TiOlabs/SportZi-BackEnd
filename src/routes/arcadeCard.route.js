const express = require("express");
const router = express.Router();
const arcadeCardController = require("../controllers/arcadeCard.controller");

router.get("/api/getarcadeCardvalues",arcadeCardController.getarcadeCard);
router.post("/api/addarcadeCardvalues", arcadeCardController.addarcadeCard);
router.put("/api/updatearcadeCardvalues/:id", arcadeCardController.updatearcadeCard);
router.delete("/api/deletearcadeCardvalues/:id", arcadeCardController.deletearcadeCard);

module.exports = router;




