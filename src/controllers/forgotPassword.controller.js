const forgotPasswordService = require('../services/forgotPassword.service');

const forgotPassword = async (req, res) => {
    const { email } = req.body;

    // console.log(email);

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    try {
        await forgotPasswordService.handleForgotPassword(email);
        res.status(200).json({ message: 'Password reset link sent successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




const resetPassword = async (req, res) => {
    try {
      const { token } = req.params;
      const { password } = req.body;
  
      const result = await forgotPasswordService.resetPasswordService(token, password);
  
      if (result.success) {
        // console.log("password reset")
        res.status(200).json({ message: 'Password has been reset' });
      } else {
        res.status(400).json({ message: result.message });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error resetting password' });
    }
  };

module.exports = {
    forgotPassword,
    resetPassword
  };
