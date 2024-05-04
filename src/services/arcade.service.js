const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getArcade = async () => {
  return await prisma.arcade.findMany({
    include: {
      arcadefeedbacks: true,
      manager: {
        include: {
          user: true,
        },
      },
    },
  });
};

const getArcadeById = async (id) => {
  try {
    return await prisma.arcadeManager.findUnique({
      where: {
        manager_id: id,
      },
      include: {
        arcade:true,
        user: true,      
      },
    });
  } catch (error) {
    console.log("error", error);
  }
};

const getArcadeByArcadeId = async (id) => {
  try {
    return await prisma.arcade.findUnique({
      where: {
        arcade_id: id,
      },
      include: {
       zone:{
        include:{
          sport:true,
        }
       }
      },
    });
  } catch (error) {
    console.log("error", error);
  }
}

const addArcade = async (arcade) => {
  return await prisma.arcade.create({
    data: {
      ...arcade,
    },
  });
};

const updateArcade = async (id, arcade) => {
  return await prisma.arcade.update({
    where: { id: id },
    data: {
      ...arcade,
    },
  });
};

const deleteArcade = async (id) => {
  return await prisma.arcade.delete({
    where: { id: id },
  });
};

module.exports = {
  getArcade,
  getArcadeById,
  getArcadeByArcadeId,
  addArcade,
  updateArcade,
  deleteArcade,
};