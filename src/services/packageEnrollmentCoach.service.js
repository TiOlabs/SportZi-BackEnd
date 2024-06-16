const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getPackageEnrollmentCoach = async () => {
  return await prisma.coachAEnrollDetailsForPackage.findMany({
    include: {
      package: {
        include: {
          arcade: true,
          zone: true,
        },
      },
      coach: {
        include: {
          user: true,
        },
      },
    },
  });
};
const getPackageEnrollmentCoachById = async (id) => {
  return await prisma.coachAEnrollDetailsForPackage.findMany({
    where: {
      coach_id: id,
    },
    include: {
      package: true,
    },
  });
};
const addPackageEnrollmentCoach = async (coachAEnrollDetailsForPackage) => {
  console.log("ssss",coachAEnrollDetailsForPackage);
  return await prisma.coachAEnrollDetailsForPackage.create({
    data: {
      ...coachAEnrollDetailsForPackage,
    },
  });
};
const updatePackageEnrollmentCoach = async (
  coach_id,
  package_id,
  coachAEnrollDetailsForPackage
) => {
  return await prisma.coachAEnrollDetailsForPackage.update({
    where: { coach_id: coach_id, package_id: package_id },

    data: {
      ...coachAEnrollDetailsForPackage,
    },
  });
};
const deletePackageEnrollmentCoach = async (id) => {
  return await prisma.coachAEnrollDetailsForPackage.delete({
    where: { coach_id: id },
  });
};
module.exports = {
  getPackageEnrollmentCoach,
  getPackageEnrollmentCoachById,
  addPackageEnrollmentCoach,
  updatePackageEnrollmentCoach,
  deletePackageEnrollmentCoach,
};
