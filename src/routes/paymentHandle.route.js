const express = require("express");

const router = express.Router();

const paymentController = require("../controllers/payment.controller");

router.get("/api/getpaymentditails", paymentController.getpaymentditails);

module.exports = router;
