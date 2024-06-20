const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const nodemailer = require('nodemailer');
const bcrypt = require("bcrypt");

const handleForgotPassword = async (email) => {
    // Find user by email
    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        throw new Error('Email was not registered');
    }

    // Generate reset token
    const resetToken = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // console.log(resetToken);


    const resetLink = `${process.env.FRONTEND_URL}/resetPassword/${resetToken}`;


    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    // Define email options
    const mailOptions = {
        from: process.env.SMTP_USER,
        to: email,
        subject: 'Password Reset',
        text: `You requested to reset your password. Click the link below to reset it:\n\n${resetLink}\n\nIf you did not request this, please ignore this email.`,
        html: `<p>You requested to reset your password. Click the link below to reset it:</p><p><a href="${resetLink}">${resetLink}</a></p><p>If you did not request this, please ignore this email.</p>`,
    };

    // Send email
    try{
        await transporter.sendMail(mailOptions);
        // console.log("Email sent successfully");
    }catch (error) {
        console.error('Error sending email:', error);
      }
    

    // Optionally, you can store the reset token in the database, associated with the user, to verify later
    // For example:
    await prisma.user.update({
        where: { email },
        data: { resetPasswordToken:resetToken },
    });
};




const resetPasswordService = async (token, password) => {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await prisma.user.findUnique({
        where: { email: decoded.email },
      });
  
      if (!user || user.resetPasswordToken !== token) {
        // console.log("no user or token invalid");
        return { success: false, message: 'Password reset token is invalid or has expired' };
      }
  
      // Hash the new password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Update user password and clear the reset token
      await prisma.user.update({
        where: { email: decoded.email },
        data: {
          password: hashedPassword,
          resetPasswordToken: null,
        },
      });

    //   console.log("database updated");
  
      return { success: true };
    } catch (error) {
      console.error(error);
      throw new Error('Error resetting password');
    }
  };
  



module.exports = {
    handleForgotPassword,
    resetPasswordService
};
