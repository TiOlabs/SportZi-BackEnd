const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

const getPlayers = async () => {
  return await prisma.player.findMany();
};

const addPlayer = async (player) => {
  const hashedPassword = await bcrypt.hash(player.password, 10); // Hash the password

  return await prisma.player.create({
    data: {
      ...player,
      password: hashedPassword,
    },
  });
};

const updatePlayer = async (id, player) => {
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
};








module.exports = {
  getPlayers,
  addPlayer,
  updatePlayer,
  deletePlayer,

};
