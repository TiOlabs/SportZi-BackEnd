const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getReportArcades = async () => {
  return await prisma.reportArcade.findMany({
    include: {
      reporter_user: true,
      victim_arcade: true,
    },
  });
};
const getReportArcadeById = async (id) => {
  return await prisma.reportArcade.findUnique({
    where: {
      report_id: id,
    },
    include: {
      user: true,
    },
  });
};
const addReportArcade = async (reportArcade) => {
  try {
    return await prisma.reportArcade.create({
      data: reportArcade,
    });
  } catch (e) {
    console.log(e);
  }
};
const updateReportArcade = async (id, reportArcade) => {
  return await prisma.reportArcade.update({
    where: { report_id: id },
    data: reportArcade,
  });
};
const deleteReportArcade = async (id) => {
  return await prisma.reportArcade.delete({
    where: { report_id: id },
  });
};

module.exports = {
  getReportArcades,
  getReportArcadeById,
  addReportArcade,
  updateReportArcade,
  deleteReportArcade,
};
