function authorizeAdmin(req, res, next) {
    const { role } = req.user;
    if (role !== "ADMIN") {
      return res.status(403).json({ message: "Forbidden: Only admins can access this route" });
    }
    next();
  }
  
  module.exports = authorizeAdmin;