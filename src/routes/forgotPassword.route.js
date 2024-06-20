const express = require('express');
const router = express.Router();
const forgotPasswordController = require('../controllers/forgotPassword.controller');

// Forgot password route
router.post('/api/forgot-password', forgotPasswordController.forgotPassword);
router.post('/api/reset-password/:token', forgotPasswordController.resetPassword);

module.exports = router;
