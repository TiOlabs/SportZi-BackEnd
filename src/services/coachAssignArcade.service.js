const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getCoachAssignDetailsById = async (id) => {
  console.log(id);
  try {
    return await prisma.coachAssignDetailsForArcade.findMany({
      where: { coach_id: id },

      include: {
        arcade: {
          include: {
            zone: true,
          },
        },
        coach: {
          include: {
            sport: true,
          },
        },
      },
    });
  } catch (error) {
    console.log("error");
    console.log(error);
    throw error;
  }
};

const getZoneForCoachBooking = async (arcadeId, sportId, coachId) => {
  console.log(arcadeId, sportId, coachId)
  try{
  return await prisma.zone.findUnique({
    where: {
      arcade_id_sport_id: {
        arcade_id: arcadeId,
        sport_id: sportId,
      },
      
    },
  });
}catch(error){
  console.log("error");
  console.log(error);
  throw error;
}
}

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
  getCoachAssignDetailsById,
  getZoneForCoachBooking,
  addCoachCard,
  updateCoachCard,
  deleteCoachCard,
};