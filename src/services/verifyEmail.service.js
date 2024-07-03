const { PrismaClient } = require("@prisma/client");
const prismaClient = new PrismaClient();
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const verifyUserEmail = async (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userEmail = decoded.email;
    // console.log(userEmail);

    const isVerified = await prismaClient.user.update({
      where: { email: userEmail },
      data: { is_verified: true },
    });
    if(isVerified){
        // console.log("IsVerified:", isVerified);
        return isVerified;  
    }
    else{
        throw new Error("Email is not verified");
    }
    
  } 
  catch (error) {
    console.log(error);
    return error;
  }
};



const findUserByEmail = async (email) => {
    const user = prismaClient.user.findUnique({ where: { email } });
    return user;
  };

const generateToken = (user) => {
    try {
      return jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const sendVerificationEmail = async (user, token) => {
    try{
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        },
      });
    
      // console.log(user.email);
      const mailOptions = {
        from: process.env.SMTP_USER,
        to: user.email,
        subject: 'Email Verification',
        html: `<p>Please verify your email by clicking the following link: <a href="http://localhost:3000/verify-email?token=${token}">Verify Email</a></p>`,
      };
    
      return transporter.sendMail(mailOptions);
    }catch(err){
      throw new Error(err);
    }
  };



module.exports = {
  verifyUserEmail,
  findUserByEmail,
  generateToken,
  sendVerificationEmail,
};
