const express = require("express");
const router = express.Router();

// login athentication
// router.post('/api/login', async (req, res) => {
//     const { username, password } = req.body;
    
//     // Find user by username
//     const player = player.find(u => u.email === username);
    
//     if (!player) {
//       return res.status(401).json({ message: 'Invalid username or password' });
//     }
  
//     // Verify password
//     if (!await bcrypt.compare(password, user.password)) {
//       return res.status(401).json({ message: 'Invalid username or password' });
//     }
  
//     // Generate JWT token
//     const token = jwt.sign({ userId: player.player_id, username: player.email }, JWT_SECRET, { expiresIn: '1h' });
  
//     // Send token to client
//     res.json({ token }); 
//   });
  
//   // Protected route
//   router.get('/api/protected', authenticateToken, (req, res) => {
//     res.json({ message: 'Protected route accessed successfully' });
//   });
  
//   // Middleware to authenticate token
//   function authenticateToken(req, res, next) {
//     const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  
//     if (!token) {
//       return res.status(401).json({ message: 'Unauthorized' });
//     }
  
//     jwt.verify(token, JWT_SECRET, (err, user) => {
//       if (err) {
//         return res.status(403).json({ message: 'Invalid token' });
//       }
//       req.player = player;
//       next();
//     });
//   }
  
  module.exports = router;