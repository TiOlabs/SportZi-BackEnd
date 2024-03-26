// authMiddleware.js

const jwt = require("jsonwebtoken");
// const JWT_SECRET = require('../configs/config')

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  // console.log(authHeader)

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: Token missing" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden: Invalid token" });
    }

    // Attach user information to the request object
    req.user = decodedToken;
    // console.log(req.user);
    next();
  });
}

module.exports = authenticateToken;
