// services/AuthService.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();  

const JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
  async login(email, password) {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      // console.log("Invalid username or password")
      throw new Error('Invalid username or password');
    }
    if (!await bcrypt.compare(password, user.password)) {
      // console.log("Invalid username or password")
      throw new Error('Invalid username or password');
    }
    if(user.is_verified == false){
      // console.log("email is not verified")
      return false;    
    }
    const token = jwt.sign({ userId: user.user_id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
    return token;
  }
};
