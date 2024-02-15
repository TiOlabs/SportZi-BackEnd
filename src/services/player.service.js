const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getPlayers = async () => {
  return await prisma.player.findMany();
};

const addPlayer = async (player) => {
  return await prisma.player.create({
    data: {
      ...player,
    },
  });
};

const updatePlayer = async (id,player) => {
    return await prisma.player.update({
      where: { id: id },
      data: {
        ...player,
      },
    });
  };


  const deletePlayer = async (id) => {
    return await prisma.player.delete({
      where: { id: id },
    });
  }



  module.exports = {
      getPlayers,
      addPlayer,
      updatePlayer,
      deletePlayer
  }