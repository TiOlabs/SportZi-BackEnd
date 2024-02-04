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

const updateArcadeBooking = async (id,arcadeBooking) => {
  return await prisma.arcadeBooking.update({
    where: { id: id },
    data: {
      ...arcadeBooking,
    },
  });
};

const deleteArcadeBooking = async (id) => {
  return await prisma.arcadeBooking.delete({
    where: { id: id },
  });
}



module.exports = {
  getArcadeBookings,
  addArcadeBooking,
  updateArcadeBooking,
  deleteArcadeBooking,
};
