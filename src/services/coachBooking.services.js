const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getCoachBookings = async () => {
  return await prisma.coachBookingDetails.findMany({
    include: {
      coach: {
        include:{
          user:true
        }
      },
      player:{
        include:{
          user: true,
        }
      },
      zone: true,
      arcade: true,
      coachBookingDayAndTime:true

    },
  });
};

const getCoachBookingById = async (id) => {
  try {
    return await prisma.coachBookingDetails.findMany({});
  } catch (error) {
    console.log(error);
  }
};

const getCoachBookingByDate = async (date, coachId) => {
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
};
const addCoachBooking = async (coachBookingDetails) => {
  console.log(coachBookingDetails);
  return await prisma.coachBookingDetails.create({
    data: {
      ...coachBookingDetails,
    },
  });
};

const updateCoachBooking = async (id, coachBookingDetails) => {
  return await prisma.coachBookingDetails.update({
    where: {booking_id: id },
    data: {
      ...coachBookingDetails,
    },
  });
};

const deleteCoachBooking = async (id) => {
  return await prisma.coachBookingDetails.delete({
    where: { coach_booking_id: id },
  });
};

module.exports = {
  getCoachBookings,
  getCoachBookingById,
  getCoachBookingByDate,
  addCoachBooking,
  updateCoachBooking,
  deleteCoachBooking,
};