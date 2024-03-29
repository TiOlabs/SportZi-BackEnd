function authorizePlayer(req, res, next) {
  const { role } = req.user;

  // Check if user is a player
  if (role !== "PLAYER") {
    return res
      .status(403)
      .json({ message: "Forbidden: Only players can access this route" });
  }

  // Proceed to the next middleware or route handler
  next();
}

module.exports = authorizePlayer;
