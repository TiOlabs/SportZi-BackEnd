const express = require("express");
const router = express.Router();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AuthController = require('../controllers/login.controller');

router.post('/api/login', AuthController.login);

module.exports = router;