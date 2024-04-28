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

  const pastDayString = pastDay.toISOString().split('T')[0]; // Convert past day to string format "YYYY-MM-DD"

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
      }
    },
  });
};



const getArcadeBookingById = async (id) => {
  try {
    return await prisma.zoneBookingDetails.findMany({
      where: {
       user_id:id,
      },
      include: {
        user:true,
        zone:{
          include:{
            arcade:true,
          }

        }
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
const addArcadeBooking = async (zoneBookingDetails) => {
  return await prisma.zoneBookingDetails.create({
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
  getArcadeBookingByDate,
  addArcadeBooking,
  updateArcadeBooking,
  deleteArcadeBooking,
};