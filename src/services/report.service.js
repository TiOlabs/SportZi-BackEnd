const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getReports = async () => {
  return await prisma.reportUser.findMany({
    include: {
      reporter_user: true,
      victim_user: true,
    },
  });
};

const getReportById = async (id) => {
  return await prisma.reportUser.findUnique({
    where: {
      report_id: id,
    },
    include: {
      reporter_user: true,
      victim_user: true,
    },
  });
};

const addReport = async (report) => {
  try {
    return await prisma.reportUser.create({
      data: report,
    });
  } catch (e) {
    console.log(e);
  }
};

const updateReport = async (id, report) => {
  return await prisma.reportUser.update({
    where: { report_id: id },
    data: report,
  });
};

const deleteReport = async (id) => {
  return await prisma.reportUser.delete({
    where: { report_id: id },
  });
};

module.exports = {
  getReports,
  getReportById,
  addReport,
  updateReport,
  deleteReport,
};
