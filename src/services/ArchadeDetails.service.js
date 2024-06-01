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

const updateArcadeDetails = async (
  id,
  firstname,
  discription,
  paymentTypes, // assuming this is an array of achievements
  user_image
) => {
  try {
    return await prisma.user.update({
      where: {
        user_id: id,
      },
      // include: {
      //   achivement: true,
      // },
      data: {
        firstname: firstname,
        lastname: lastname,
        Discription: discription,
        // achivement: {
        //   create: achivements.map((achivement_details) => {
        //     return {
        //       achivement_details,
        //     };
        //   }),
        // },
        user_image: user_image,
      },
    });
  } catch (error) {
    throw error;
  }
  // return { ...updatedUser, achivements: createdAchievements };
};
module.exports = { getArchadeDetails, updateArcadeDetails };
