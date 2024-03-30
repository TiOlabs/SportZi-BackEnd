const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getPlayerdetails = async (user_id) => {
  return await prisma.user.findUnique({
    include: {
      phone: true,
    },

    where: {
      user_id: user_id,
    },
  });
};

const updatePlayerdetails = async (
  user_id,
  firstname,
  lastname,
  discription,
  user_image,
  achivements // assuming this is an array of achievements
) => {
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
    },
  });

  // Create multiple achievements
  const createdAchievements = await prisma.achievement.createMany({
    data: achivements.map((achievement) => ({
      ...achievement,
      user_id: user_id, // assuming the foreign key in the achievement table is user_id
    })),
  });

  return { ...updatedUser, achivements: createdAchievements };
};
module.exports = {
  getPlayerdetails,
  updatePlayerdetails,
};
