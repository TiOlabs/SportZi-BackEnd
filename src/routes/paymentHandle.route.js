const express = require("express");

const router = express.Router();

const paymentController = require("../controllers/payment.controller");

router.get("/api/getpaymentditails", paymentController.getpaymentditails);
router.post("/api/postpaymentStatus", paymentController.postpaymentStatus);
module.exports = router;
