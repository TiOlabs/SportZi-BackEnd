const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getCoachDetails = async (userId) => {
  try {
    console.log("service", userId);
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

const getCoachDetailsToUsers = async (coachId) => {
  try {
    if (coachId.startsWith(":")) {
      coachId = coachId.slice(1);
    }

    return await prisma.user.findUnique({
      where: {
        user_id: coachId,
      },
    });
  } catch (error) {
    console.log("service error", error);
  }
};

module.exports = { getCoachDetails, getCoachDetailsToUsers };
