function authorizeSuperAdmin(req, res, next) {
    const { role } = req.user;
    if (role !== "SUPERADMIN") {
      return res.status(403).json({ message: "Forbidden: Only superadmins can access this route" });
    }
    next();
  }
  
  module.exports = authorizeSuperAdmin;