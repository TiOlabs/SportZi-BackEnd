const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getCoachDetails = async (userId) => {
  try {
    return await prisma.user.findUnique({
      where: {
        user_id: userId,
      },
      include: {
        phone: true,
        achivement: true,
        Coach: {
          include: {
            availability: true,
            sport: true,
          },
        },
      },
    });
  } catch (error) {
    console.log("service error", error);
  }
};

const getCoachDetailsToUsers = async (coachId) => {
  try {
    if (coachId.startsWith(":")) {
      coachId = coachId.slice(1);
    }

    return await prisma.coach.findUnique({
      where: {
        coach_id: coachId,
      },
      include: {
        user: {
          include: {
            phone: true,
            achivement: true,
          },
        },
        availability: true,
        sport: true,
      },
    });
  } catch (error) {
    console.log("service error", error);
  }
};
const updateCoachDetails = async (
  id,
  firstname,
  lastName,
  user_image,
  distription,
  sport_id,
  combinedTimeslot,
  qulifications,
  accnumber
) => {
  try {
    console.log("service", sport_id);
    await prisma.user.update({
      where: { user_id: id },
      include: {
        achivement: true,
      },
      data: {
        firstname: firstname,
        lastname: lastName,
        Discription: distription,
        accountNumber: accnumber,
        user_image: user_image,
        achivement: {
          create: qulifications.map((achivement_details) => {
            return {
              achivement_details,
            };
          }),
        },
      },
    });
    await prisma.coach.update({
      where: { coach_id: id },
      data: {
        sport_id: sport_id,
      },
    });
    for (const slot of combinedTimeslot) {
      await prisma.availiability.create({
        data: {
          coach_id: id,
          day: slot.day,
          time: slot.timeslot,
        },
      });
    }
  } catch (error) {
    console.log("service error cokm", error);
  }
};
const deleteQulifications = async (user_id) => {
  try {
    const coach = await prisma.user.findUnique({
      where: {
        user_id: user_id,
      },
    });
    if (!coach) {
      throw error;
    }
    await prisma.achivement.deleteMany({
      where: {
        user_id: user_id,
      },
    });
  } catch (error) {
    throw error;
  }
};
const deleteAvailability = async (user_id) => {
  try {
    const coach = await prisma.coach.findUnique({
      where: {
        coach_id: user_id,
      },
    });
    if (!coach) {
      throw error;
    }
    await prisma.availiability.deleteMany({
      where: {
        coach_id: user_id,
      },
    });
  } catch (error) {
    throw error;
  }
};
module.exports = {
  getCoachDetails,
  getCoachDetailsToUsers,
  updateCoachDetails,
  deleteQulifications,
  deleteAvailability,
};
