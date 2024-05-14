const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getCoachBookings = async () => {
  return await prisma.coachBookingDetails.findMany({
    include: {
      coach: {
        include: {
          user: true,
        },
      },
      player: {
        include: {
          user: true,
        },
      },
      zone: true,
      arcade: true,
      coachBookingDayAndTime: true,
    },
  });
};

const getCoachBookingById = async (id) => {
  try {
    return await prisma.coachBookingDetails.findMany({
      where: {
        player_id: id,
      },
      include: {
        coach: {
          include: {
            user: true,
          },
        },
        player: {
          include: {
            user: true,
          },
        },
        zone: true,
        arcade: true,
        coachBookingDayAndTime: true,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getCoachBookingByBookingId = async (bookingId) => {
  return await prisma.coachBookingDetails.findUnique({
    where: {
      booking_id: bookingId,
    },
    include: {
      coach: {
        include: {
          user: true,
        },
      },
      player: {
        include: {
          user: true,
        },
      },
      zone: true,
      arcade: true,
      coachBookingDayAndTime: true,
    },
  });
};

const getCoachBookingByDate = async (date, coachId) => {
  try {
    return await prisma.coachBookingDetails.findMany({
      where: {
        date: date,
        coach_id: coachId,
        status: "success",
      },
      include: {
        user: true,
        coach: true,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getCoachBookingByCretedTime = async (created_at, player_id) => {
  try {
    return await prisma.coachBookingDetails.findUnique({
      where: {
        player_id_created_at: {
          created_at: created_at,
          player_id: player_id,
        },
      },
      include: {
        player: {
          include: {
            user: true,
          },
        },
        coach: {
          include: {
            user: true,
          },
        },
        zone: true,
        arcade: true,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const addCoachBooking = async (coachBookingDetails) => {
  return await prisma.coachBookingDetails.create({
    data: {
      ...coachBookingDetails,
    },
  });
};

const updateCoachBooking = async (id, coachBookingDetails) => {
  return await prisma.coachBookingDetails.update({
    where: { booking_id: id },
    data: {
      ...coachBookingDetails,
    },
  });
};

const updateCoachBookingByCreatedTime = async (
  created_at,
  userId,
  coachBooking
) => {
  try{
  return await prisma.coachBookingDetails.update({
    where: {
      player_id_created_at: { created_at: created_at, player_id: userId },
    },
    data: {
      ...coachBooking,
    },
  });
}catch(error){
  console.log(error);
}
};

const deleteCoachBooking = async (id) => {
  return await prisma.coachBookingDetails.delete({
    where: { coach_booking_id: id },
  });
};

module.exports = {
  getCoachBookings,
  getCoachBookingById,
  getCoachBookingByBookingId,
  getCoachBookingByDate,
  getCoachBookingByCretedTime,
  addCoachBooking,
  updateCoachBooking,
  updateCoachBookingByCreatedTime,
  deleteCoachBooking,
};
