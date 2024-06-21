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
const addPackageEnrollmentCoach = async (coachAEnrollDetailsForPackage) => {
  console.log("ssss", coachAEnrollDetailsForPackage);
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
  console.log("coach_id", coach_id);
  console.log("package_id", package_id);
  console.log("coachAEnrollDetailsForPackage", coachAEnrollDetailsForPackage);
  try {
    return await prisma.coachAEnrollDetailsForPackage.update({
      where: {
        coach_id_package_id: {
          coach_id: coach_id,
          package_id: package_id,
        },
      },
      data: {
        ...coachAEnrollDetailsForPackage,
      },
    });
  } catch (error) {
    console.log("error", error);
  }
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
