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

const updatePlayerdetails = async (user_id, firstname) => {
  console.log(user_id, firstname);
  return await prisma.user.update({
    where: {
      user_id: user_id,
    },
    include: {
      achivement: true,
    },
    data: {
      firstname: firstname,
      lastname: lastname,
      achivement: achivement,
      discription: discription,
    },
  });
};
module.exports = {
  getPlayerdetails,
  updatePlayerdetails,
};
