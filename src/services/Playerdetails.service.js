const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getPlayerdetails = async (id) => {
  try {
    return await prisma.user.findUnique({
      include: {
        phone: true,
        achivement: true,
      },

      where: {
        user_id: id,
      },
    });
  } catch (error) {
    throw error;
  }
};

const addPlayerdetails = async (
  user_id,
  firstname,
  lastname,
  discription,
  user_image,
  achivements // assuming this is an array of achievements
) => {
  try {
    console.log(user_id, firstname);

    const updatedUser = await prisma.user.update({
      where: {
        user_id: user_id,
      },
      include: {
        achivement: true,
      },
      data: {
        firstname: firstname,
        lastname: lastname,
        Discription: discription,
        user_image: user_image,
        achivement: {
          create: achivements.map((achivement_details) => {
            return {
              achivement_details,
            };
          }),
        },
      },
    });
  } catch (error) {
    throw error;
  }
  return { ...updatedUser, achivements: createdAchievements };
};

const updatePlayerdetails = async (
  id,
  firstname,
  lastname,
  discription,
  achivements, // assuming this is an array of achievements
  user_image
) => {
  try {
    console.log(id, firstname);
    console.log("hai", achivements);
    console.log("image", user_image);

    return await prisma.user.update({
      where: {
        user_id: id,
      },
      include: {
        achivement: true,
      },
      data: {
        firstname: firstname,
        lastname: lastname,
        Discription: discription,
        achivement: {
          create: achivements.map((achivement_details) => {
            return {
              achivement_details,
            };
          }),
        },
        user_image: user_image,
      },
    });
  } catch (error) {
    throw error;
  }
  // return { ...updatedUser, achivements: createdAchievements };
};

const deleteAchivments = async (user_id) => {
  try {
    const player = await prisma.user.findUnique({
      where: {
        user_id: user_id,
      },
    });
    if (!player) {
      throw error;
    }
    await prisma.achivement.deleteMany({
      where: {
        user_id: user_id,
      },
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getPlayerdetails,
  addPlayerdetails,
  deleteAchivments,
  updatePlayerdetails,
};
