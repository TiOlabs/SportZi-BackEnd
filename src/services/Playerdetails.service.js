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
  achivements, // assuming this is an array of achievements
  user_image
) => {
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
const uploadPlayerPhoto = async (user_id, image_url) => {
  console.log("user_idbb", user_id);
  console.log("image_urlbb", image_url);
  return await prisma.user.update({
    where: {
      user_id: user_id,
    },
    data: {
      user_image: image_url,
    },
  });
};

const getPlayerPhotos = async (userId) => {
  return await prisma.userPhotoAlbum.findMany({
    where: {
      user_id: userId
    },
  });
};

const addPlayerphotos = async (user_id, image_url) => {
  return await prisma.userPhotoAlbum.create({
    data: {
      user_id: user_id,
      image_url: image_url,
    },
  });
};

module.exports = {
  getPlayerdetails,
  updatePlayerdetails,
  uploadPlayerPhoto,
  getPlayerPhotos,
  addPlayerphotos,
};
