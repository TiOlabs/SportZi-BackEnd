// services/AuthService.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const prisma = require('../prisma'); // assuming this is your Prisma instance
// const { JWT_SECRET } = require('../config'); // assuming you have a config file
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// // const JWT_SECRET = require('../configs/config')
// const JWT_SECRET = process.env.JWT_SECRET;
// // const adduser = async (user) => {
// //   return await prisma.user.create({
// //     data: {
// //       ...user,
// //     }, 
// //   });
// // }
// // module.exports ={
// //   adduser
// } 
  

module.exports = {
  async login(email, password) {
    const user = await prisma.user.findUnique({
      where:{
        user_id:1
      }
    });

    if (!user) {
      throw new Error('Invalid username or password');
    }

    if (!await bcrypt.compare(password, user.password)) {
      throw new Error('Invalid username or password');
    }

    const token = jwt.sign({ userId: user.user_id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
    return token;
  }
};
