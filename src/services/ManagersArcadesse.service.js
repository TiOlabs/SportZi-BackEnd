const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getArchades = async (user_id) => {
  try {
    return await prisma.user.findUnique({
      where: {
        user_id: user_id,
      },
      include: {
        Manager: {
          include: {
            arcade: true,
          },
        },
      },
    });
  } catch (error) {
    // handle error
    console.log("error service", error);
  }
};
module.exports = {
  getArchades,
};
