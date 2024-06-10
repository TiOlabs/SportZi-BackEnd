const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getBookingCancelArcades = async () => {
  return await prisma.arcadeCancelBookings.findMany();
};
const getBookingCancelArcadeById = async (id) => {
  return await prisma.arcadeCancelBookings.findUnique({
    where: {
      booking_id: id,
    },
  });
};
const addBookingCancelArcade = async (bookingCancelArcade) => {
  try {
    return await prisma.arcadeCancelBookings.create({
      data: bookingCancelArcade,
    });
  } catch (e) {
    console.log(e);
  }
};
const updateBookingCancelArcade = async (id, bookingCancelArcade) => {
  return await prisma.arcadeCancelBookings.update({
    where: { booking_id: id },
    data: bookingCancelArcade,
  });
};
const deleteBookingCancelArcade = async (id) => {
  return await prisma.arcadeCancelBookings.delete({
    where: { booking_id: id },
  });
};

module.exports = {
  getBookingCancelArcades,
  getBookingCancelArcadeById,
  addBookingCancelArcade,
  updateBookingCancelArcade,
  deleteBookingCancelArcade,
};
