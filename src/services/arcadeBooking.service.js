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

const addArcadeBooking = async (zoneBookingDetails) => {
  return await prisma.zoneBookingDetails.create({
    data: {
      ...zoneBookingDetails,
    },
  });
};

const updateArcadeBooking = async (id,zoneBookingDetails) => {
  return await prisma.zoneBookingDetails.update({
    where: { id: id },
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
  addArcadeBooking,
  updateArcadeBooking,
  deleteArcadeBooking,
};
