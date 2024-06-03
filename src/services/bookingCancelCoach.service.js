const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getBookingCancelCoaches = async () => {
  return await prisma.coachCancelBookings.findMany();
};
const getBookingCancelCoachById = async (id) => {
  return await prisma.coachCancelBookings.findUnique({
    where: {
      booking_id: id,
    },
  });
};
const addBookingCancelCoach = async (bookingCancelCoach) => {
  try {
    return await prisma.coachCancelBookings.create({
      data: bookingCancelCoach,
    });
  } catch (e) {
    console.log(e);
  }
};
const updateBookingCancelCoach = async (id, bookingCancelCoach) => {
  return await prisma.coachCancelBookings.update({
    where: { booking_id: id },
    data: bookingCancelCoach,
  });
};

const deleteBookingCancelCoach = async (id) => {
  return await prisma.coachCancelBookings.delete({
    where: { booking_id: id },
  });
};

module.exports = {
  getBookingCancelCoaches,
  getBookingCancelCoachById,
  addBookingCancelCoach,
  updateBookingCancelCoach,
  deleteBookingCancelCoach,
};
