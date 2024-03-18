const logout = (req, res) => {
    res.cookie("jwt", "loggedout", {
      expires: new Date(0), // Set expiration date to a past date
      httpOnly: true,
    });
    res.status(200).json({ status: "success" });
  };
  
  module.exports = { logout };