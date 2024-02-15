const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getCoaches = async () => {
  return await prisma.coach.findMany();
};

const addCoach = async (coach) => {
  return await prisma.coach.create({
    data: {
      ...coach,
    },
  });
};

const updateCoach = async (id,coach) => {
    return await prisma.coach.update({
      where: { id: id },
      data: {
        ...coach,
      },
    });
  };


  const deleteCoach= async (id) => {
    return await prisma.coach.delete({
      where: { id: id },
    });
  }



  module.exports = {
      getCoaches,
      addCoach,
      updateCoach,
      deleteCoach
  }