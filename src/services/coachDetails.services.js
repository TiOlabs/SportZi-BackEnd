const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getCoachDetails = async (user_id) => {
  try {
    return await prisma.user.findUnique({
      where: {
        user_id: user_id,
      },
    });
  } catch (error) {
    console.log("service error", error);
  }
};
module.exports = { getCoachDetails };
