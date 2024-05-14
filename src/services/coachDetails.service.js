const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getCoachDetails = async (userId) => {
  console.log("service", userId); 
  try {
    return await prisma.user.findUnique({
      where: {
        user_id: userId,
      },
      include: {
        phone: true,
        achivement: true,
      },
    });
  } catch (error) {
    console.log("service error", error);
  }
};
module.exports = { getCoachDetails };
