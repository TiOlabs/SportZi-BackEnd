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
  open_time,
  close_time,
  location,
  arcade_image
  //  user_image
) => {
  try {
    return await prisma.arcade.update({
      where: {
        arcade_id: id,
      },
      // include: {
      //   achivement: true,
      // },
      data: {
        arcade_name: arcade_name,
        open_time: open_time,
        close_time: close_time,
        distription: distription,
        location: location,
        arcade_image:arcade_image
        // achivement: {
        //   create: achivements.map((achivement_details) => {
        //     return {
        //       achivement_details,
        //     };
        //   }),
        // },
      },
    });
  } catch (error) {
    throw error;
  }
  // return { ...updatedUser, achivements: createdAchievements };
};
module.exports = { getArchadeDetails, updateArcadeDetails };
