const verifyEmailService = require("../services/verifyEmail.service");

const verifyEmail = async (req, res) => {
  const { token } = req.query;
  console.log("Controller:", token);

  try {
    const verifyEmail = await verifyEmailService.verifyUserEmail(token);
    res.status(200).json({ message: "Email verified successfully!" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Invalid or expired token." });
  }
};

const resendVerification = async (req, res) => {
  const { email } = req.body;
  // console.log(email);
  try {
    const user = await verifyEmailService.findUserByEmail(email);
    // console.log(user);
    
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    if (user.is_verified == true) {
      return res.status(400).json({ message: "Email is already verified." });
    }

    const token = verifyEmailService.generateToken(user);
    console.log(token);

    try {
        const verifyEmail =await verifyEmailService.sendVerificationEmail(user, token);
        console.log("email is sent");
      return res.status(200).json({ message: "Verification email sent successfully!" });
    } catch (error) {
      // console.log("email is not sent");
        // console.log(error);
      return res.status(500).json({ message: "Failed to send verification email." });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({message: "An error occurred while resending verification email.",});
}
};


module.exports = {
  verifyEmail,
  resendVerification,
};
