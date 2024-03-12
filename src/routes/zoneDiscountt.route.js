const express = require("express");
const router = express.Router();
const discountCardController = require("../controllers/zoneDiscount.controller");

router.get("/api/getdiscountcardvalues",discountCardController.getDiscountCard);
router.post("/api/adddiscountcardvalues", discountCardController.addDiscountCard);
router.put("/api/updatediscountcardvalues/:id", discountCardController.updateDiscountCard);
router.delete("/api/deletediscountcardvalues/:id", discountCardController.deleteDiscountCard);


module.exports = router;