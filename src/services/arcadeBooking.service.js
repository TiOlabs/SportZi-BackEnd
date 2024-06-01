const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getArcadeBookings = async () => {
  return await prisma.zoneBookingDetails.findMany({
    include: {
      user: true,
      zone: true,
    },
  });
};

const getCompleteArcadeBooking = async () => {
  const today = new Date(); // Get the current date
  const pastDay = new Date(today); // Create a copy of the current date
  pastDay.setDate(today.getDate() - 1); // Subtract 1 day from the copy

  const pastDayString = pastDay.toISOString().split("T")[0]; // Convert past day to string format "YYYY-MM-DD"

  return await prisma.zoneBookingDetails.findMany({
    where: {
      status: "success",
      date: {
        lte: pastDayString, // Filter where the date is less than or equal to the past day
      },
    },
    include: {
      user: true,
      zone: {
        include: {
          arcade: true,
        },
      },
    },
  });
};

const getArcadeBookingById = async (id) => {
  try {
    return await prisma.zoneBookingDetails.findMany({
      where: {
        user_id: id,
      },
      include: {
        user: true,
        zone: {
          include: {
            arcade: true,
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getArcadeBookingForArcade = async (id) => {
  try {
    return await prisma.arcade.findUnique({
      where: {
        arcade_id: id,
      },
      include: {
        zone: {
          include: {
            zoneBookingDetails: {
              include: {
                user: true,
              },
            },
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getArcadeBookingByDate = async (date, zoneId) => {
  return await prisma.zoneBookingDetails.findMany({
    where: {
      date: date,
      zone_id: zoneId,
      status: "success",
    },
    include: {
      user: true,
      zone: true,
    },
  });
};

const getArcadeBookingByCretedTime = async (created_at, userId) => {
  console.log("sssssssss", created_at);
  console.log("sssssssss", userId);
  return await prisma.zoneBookingDetails.findMany({
    where: {
      user_id: userId,
      created_at: created_at,
    },
  });
};

const getArcadeBookingsByBookingId = async (bookingId) => {
  console.log("getArcadeBookingByBookingId Serviceeeeeeee-------------");
  try {
    return await prisma.zoneBookingDetails.findUnique({
      where: {
        zone_booking_id: bookingId,
      },
      include: {
        user: true,
        zone: true,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const addArcadeBooking = async (zoneBookingDetails) => {
  return await prisma.zoneBookingDetails.create({
    data: {
      ...zoneBookingDetails,
    },
  });
};

const updateArcadeBookingByCretedTime = async (
  created_at,
  userId,
  zoneBookingDetails
) => {
  return await prisma.zoneBookingDetails.update({
    where: {
      user_id_created_at: {
        created_at: created_at,
        user_id: userId,
      },
    },
    data: {
      ...zoneBookingDetails,
    },
  });
};

const updateArcadeBooking = async (id, zoneBookingDetails) => {
  return await prisma.zoneBookingDetails.update({
    where: { zone_booking_id: id },
    data: {
      ...zoneBookingDetails,
    },
  });
};

const deleteArcadeBooking = async (id) => {
  return await prisma.zoneBookingDetails.delete({
    where: { zone_booking_id: id },
  });
};

module.exports = {
  getArcadeBookings,
  getCompleteArcadeBooking,
  getArcadeBookingById,
  getArcadeBookingForArcade,
  getArcadeBookingByDate,
  getArcadeBookingByCretedTime,
  getArcadeBookingsByBookingId,
  addArcadeBooking,
  updateArcadeBookingByCretedTime,
  updateArcadeBooking,
  deleteArcadeBooking,
};
