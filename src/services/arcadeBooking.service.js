const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getArcadeBookings = async () => {
  return await prisma.arcadeBooking.findMany();
};

const addArcadeBooking = async (arcadeBooking) => {
  return await prisma.arcadeBooking.create({
    data: {
      ...arcadeBooking,
    },
  });
};

module.exports = {
  getArcadeBookings,
  addArcadeBooking,
};
