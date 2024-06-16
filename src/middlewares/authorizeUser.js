function authorizeUser(req, res, next) {
  const { role } = req.user;

  // Check if user is a player
  if (
    role === "PLAYER" ||
    role === "ADMIN" ||
    role === "MANAGER" ||
    role === "COACH"
  ) {
    next();
  } else {
    return res
      .status(403)
      .json({ message: "Forbidden: Only Users can access this route" });
  }
}

module.exports = authorizeUser;
