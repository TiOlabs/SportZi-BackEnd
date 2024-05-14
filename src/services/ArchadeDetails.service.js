const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getArchadeDetails = async (arcade_id) => {
  try {
    return await prisma.arcade.findUnique({
      where: {
        arcade_id: arcade_id,
      },
    });
  } catch (error) {
    console.log("service error", error);
  }
};
module.exports = { getArchadeDetails };
