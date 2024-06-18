function authorizeAdmin(req, res, next) {
  const { role } = req.user;
  console.log(role);
  if (role === "ADMIN" || role === "SUPERADMIN") {
    next();
  }
  return res
    .status(403)
    .json({ message: "Forbidden: Only admins can access this route" });
}

module.exports = authorizeAdmin;
