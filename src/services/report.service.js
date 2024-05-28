const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getReports = async () => {
  return await prisma.report.findMany({
    include: {
      user: true,
    },
  });
};

const getReportById = async (id) => {
  return await prisma.report.findUnique({
    where: {
      report_id: id,
    },
    include: {
      user: true,
    },
  });
};

const addReport = async (report) => {
  try {
    return await prisma.report.create({
      data: report,
    });
  } catch (e) {
    console.log(e);
  }
};

const updateReport = async (id, report) => {
  return await prisma.report.update({
    where: { report_id: id },
    data: report,
  });
};

const deleteReport = async (id) => {
  return await prisma.report.delete({
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
