

// controllers/AuthController.js
const AuthService = require('../services/login.service');

module.exports = {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const token = await AuthService.login(email, password);
      res.cookie("token", token, {
        httpOnly: true,
        secure: false, // Set to true if using HTTPS
        maxAge: 3600000, // 1 hour in milliseconds
      });
      res.json({ token });
    } catch (error) {
      res.status(401).json({ message:error.message });
    }
  }
};
