const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const getarcadeCard = async () => {
  return await prisma.arcade.findMany({
    include:{
      arcadefeedbacks : true
    }
  });
};

const addarcadeCard = async (discount) => {
  return await prisma.arcade.create({
    data: {
      ...arcadeCard,
    }, 
  });
};

const updatearcadeCard = async (id, discount) => {
  return await prisma.arcade.update({
    where: { id: id },
    data: {
      ...arcadeCard,
    },
  });
};

const deletearcadeCard = async (id) => {
  return await prisma.arcade.delete({
    where: { id: id },
  });
};

module.exports = {
  getarcadeCard,
  addarcadeCard,
  updatearcadeCard,
  deletearcadeCard,
};