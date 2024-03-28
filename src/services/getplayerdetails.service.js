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
    //how to get user table relation data to the this get methord
  });
};
module.exports = {
  getPlayerdetails,
};
