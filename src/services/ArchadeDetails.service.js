const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getArchadeDetails = async (arcade_id) => {
  try {
    return await prisma.arcade.findUnique({
      where: {
        arcade_id: arcade_id,
      },
      include: {
        manager: {
          include: {
            user: true,
          },
        },
      },
    });
  } catch (error) {
    console.log("service error", error);
  }
};

const updateArcadeDetails = async (
  id,
  arcade_name,
  distription,
  address,
  open_time,
  close_time,
  location,
  arcade_image,
  accNumber
) => {
  try {
    const arcade = await prisma.arcade.findUnique({
      where: {
        arcade_id: id,
      },
      select: {
        manager_id: true,
      },
    });

    if (!arcade) {
      throw new Error("Arcade not found");
    }
    await prisma.user.update({
      where: {
        user_id: arcade.manager_id,
      },
      data: {
        accountNumber: accNumber,
      },
    });

    // Step 3: Update the arcade details as before
    return await prisma.arcade.update({
      where: {
        arcade_id: id,
      },
      data: {
        arcade_name,
        address,
        open_time,
        close_time,
        distription,
        location,
        arcade_image,
      },
    });
  } catch (error) {
    throw error;
  }
};
module.exports = { getArchadeDetails, updateArcadeDetails };
