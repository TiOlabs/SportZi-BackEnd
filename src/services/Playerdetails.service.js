const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getPlayerdetails = async (user_id) => {
  return await prisma.user.findUnique({
    include: {
      phone: true,
    },

    where: {
      user_id: user_id,
    },
  });
};

const updatePlayerdetails = async (user_id, email) => {
  return await prisma.user.update({
    where: {
      user_id: user_id,
    },
    data: {
      email: email,
    },
  });
};
module.exports = {
  getPlayerdetails,
  updatePlayerdetails,
};
