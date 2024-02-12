const express = require("express");
const router = express.Router();
const discountCardController = require("../controllers/form.discountcard.controller");

router.get("/api/getdiscoutcardvalues",discountCardController.getDiscountCard);
router.post("/api/adddiscoutcardvalues", discountCardController.addDiscountCard);
router.put("/api/updatediscoutcardvalues/:id", discountCardController.updateDiscountCard);
router.delete("/api/deletediscoutcardvalues/:id", discountCardController.deleteDiscountCard);


module.exports = router;