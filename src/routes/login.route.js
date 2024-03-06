const express = require("express");
const router = express.Router();


const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



const AuthController = require('../controllers/login.controller');

router.post('/api/login', AuthController.login);









// // login athentication (full code )
// router.post('/api/login', async (req, res) => {
//     const { email, password } = req.body;
    
//     // Find user by username
//     const user = await prisma.user.findUnique({
//       where: { email },
//     });
    
//     if (!user) {
//       return res.status(401).json({ message: 'Invalid username or password' });
//     }
  
//     // Verify password
//     if (!await bcrypt.compare(password, user.password)) {
//       return res.status(401).json({ message: 'Invalid username or password' });
//     }
  
//     // Generate JWT token
//     const token = jwt.sign({ userId: user.user_id, role:user.role }, JWT_SECRET, { expiresIn: '1h' });

//     // Set token as an HTTP-only cookie
//     res.cookie("token", token, {
//       httpOnly: true,
//       secure: false, // Set to true if using HTTPS
//       maxAge: 3600000, // 1 hour in milliseconds
//     });
  
//     // Send token to client
//     res.json({ token }); 
//   });
  



const authenticateToken = require('../middlewares/authenticateToken');
const authorizePlayer  = require('../middlewares/authorizePlayer');
const authorizeCoach = require("../middlewares/authorizeCoach");
const authorizeManager = require("../middlewares/authorizeManager");




  // Protected route
  router.get('/api/protected', authenticateToken,authorizeCoach, (req, res) => {
    res.json({ message: 'Protected route accessed successfully',user: req.user});
  });
  
  
  // // Middleware to authenticate token
  // function authenticateToken(req, res, next) {
  //   const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  
  //   if (!token) {
  //     return res.status(401).json({ message: 'Unauthorized' });
  //   }

  //   jwt.verify(token, JWT_SECRET, (err, user) => {
  //     if (err) {
  //       return res.status(403).json({ message: 'Invalid token' });
  //     }
  //     req.user = user;
  //     next();
  //   });
  // }
  
  module.exports = router;