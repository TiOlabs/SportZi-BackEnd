const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getArcadeBookings = async () => {
  const usersCount = await prisma.zoneBookingDetails.count();
  const bookingDate = await prisma.zoneBookingDetails.findMany({
    select: {
      booking_date: true,
    },
  });
  const ArcadeBookings = await prisma.player.findMany({
    include: {
      user: true,
      zone: true,
    },
  });
  return {
    userCount: usersCount,
    players: ArcadeBookings,
  };
};

const getArcadeBookingById = async (id  ) => {
  return await prisma.zoneBookingDetails.findUnique({
    where: {
      id: id,
    },
    include: {
      user: true,
      zone: true,
    },
  });
};

const getArcadeBookingByDate = async (date) => {
  return await prisma.zoneBookingDetails.findMany({
    where: {
        date: date,
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

const updateArcadeBooking = async (id,zoneBookingDetails) => {
  return await prisma.zoneBookingDetails.update({
    where: { zone_booking_id: id },
    data: {
      ...zoneBookingDetails,
    },
  });
};

const deleteArcadeBooking = async (id) => {
  return await prisma.zoneBookingDetails.delete({
    where: { id: id },
  });
}



module.exports = {
  getArcadeBookings,
  getArcadeBookingById,
  getArcadeBookingByDate,
  addArcadeBooking,
  updateArcadeBooking,
  deleteArcadeBooking,
};
