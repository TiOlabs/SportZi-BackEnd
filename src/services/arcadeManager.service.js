const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getArcadeManagers = async () => {
  return await prisma.arcadeManager.findMany();
};

const addArcadeManager = async (arcadeManager) => {
  return await prisma.arcadeManager.create({
    data: {
      ...arcadeManager,
    },
  });
};

const updateArcadeManager = async (id,player) => {
    return await prisma.arcadeManager.update({
      where: { id: id },
      data: {
        ...arcadeManager,
      },
    });
  };


  const deleteArcadeManager = async (id) => {
    return await prisma.arcadeManager.delete({
      where: { id: id },
    });
  }



  module.exports = {
      getArcadeManagers,
      addArcadeManager,
      updateArcadeManager,
      deleteArcadeManager
  }