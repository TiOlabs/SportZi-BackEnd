const authorizeIDgetting = (req, res, next) => {
  const { user_id } = req.user;

  if (user_id == null) {
    return res.status(404);
  }

  next();
};

module.exports = {
  authorizeIDgetting,
};
