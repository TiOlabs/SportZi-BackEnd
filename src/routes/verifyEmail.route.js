const express = require('express');
const router = express.Router();
const verfyEmailController = require('../controllers/verifyEmail.controller');

router.get('/api/verify-email', verfyEmailController.verifyEmail);

router.post('/api/resend-verification', verfyEmailController.resendVerification);

module.exports = router;