const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getCoachCards = async () => {
  return await prisma.coachAssignDetailsForArcade.findMany({
    include: {
      coach: {},
    },
  });
};

const addCoachCard = async (coachAssignDetailsForArcade) => {
  return await prisma.coachAssignDetailsForArcade.create({
    data: {
      ...coachAssignDetailsForArcade,
    },
  });
};

const updateCoachCard = async (id, coach) => {
  return await prisma.coachAssignDetailsForArcade.update({
    where: { id: id },
    data: {
      ...coachAssignDetailsForArcade,
    },
  });
};

const deleteCoachCard = async (id) => {
  return await prisma.coachAssignDetailsForArcade.delete({
    where: { id: id },
  });
};

module.exports = {
  getCoachCards,
  addCoachCard,
  updateCoachCard,
  deleteCoachCard,
};
