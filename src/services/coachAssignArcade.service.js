const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getCoachAssignDetailsById = async (id) => {
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
            coachApplyDetailsForPackage:true,
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

const getCoachApplyingDetailsById = async (id) => {
  try {
    return await prisma.coachAssignDetailsForArcade.findMany({
      where: { arcade_id: id },

      include: {
        arcade: {
          include: {
            zone: true,
          },
        },
        coach: {
          include: {
            sport: true,
            user: true,
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
  try {
    return await prisma.zone.findUnique({
      where: {
        arcade_id_sport_id: {
          arcade_id: arcadeId,
          sport_id: sportId,
        },
      },
    });
  } catch (error) {
    console.log("error");
    console.log(error);
    throw error;
  }
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

const updateCoachAssignDetailsForArcade = async (coachAssignDetails) => {
  try {
    // Update coachAssignDetailsForArcade
    await prisma.coachAssignDetailsForArcade.update({
      where: {
        coach_id_arcade_id: {
          coach_id: coachAssignDetails.coach_id,
          arcade_id: coachAssignDetails.arcade_id,
        },
      },
      data: {
        ...coachAssignDetails,
      },
    });

    // Update coach table
    await prisma.coach.update({
      where: {
        coach_id: coachAssignDetails.coach_id,
      },
      data: {
        status: "active",
      },
    });

    // Return whatever you need to return
  } catch (error) {
    console.error("Error updating coachAssignDetailsForArcade:", error);
    throw error; // Rethrow the error for handling further up the call stack if needed
  }
};

const deleteCoachCard = async (id) => {
  return await prisma.coachAssignDetailsForArcade.delete({
    where: { id: id },
  });
};

module.exports = {
  getCoachAssignDetailsById,
  getZoneForCoachBooking,
  getCoachApplyingDetailsById,
  addCoachCard,
  updateCoachCard,
  updateCoachAssignDetailsForArcade,
  deleteCoachCard,
};
