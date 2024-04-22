const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getArchadeDetails = async (user_id) => {
  try {
    console.log("service", user_id);
    return await prisma.arcade.findUnique({
      where: {
        user_id: user_id,
      },
      include: {
        achivement: true,
      },
    });

    console.log("serviceeeeeeeeee", user_id);
  } catch (error) {
    console.log("service error", error);
  }
};
module.exports = { getArchadeDetails };
