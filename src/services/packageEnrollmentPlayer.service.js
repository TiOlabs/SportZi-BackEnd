const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getPackageEnrollmentPlayer = async () => {
  return await prisma.packageEnrollDetailsForPlayer.findMany({
    include: {
      package: {
        include: {
          arcade: true,
          zone: true,
        },
      },
      player: {
        include: {
          user: true,
        },
      },
    },
  });
};
const getPackageEnrollmentPlayerById = async (id) => {
  return await prisma.packageEnrollDetailsForPlayer.findMany({
    where: {
      player_id: id,
    },
  });
};

const addPackageEnrollmentPlayer = async (packageEnrollDetailsForPlayer) => {
  return await prisma.packageEnrollDetailsForPlayer.create({
    data: {
      ...packageEnrollDetailsForPlayer,
    },
  });
};

const updatePackageEnrollmentPlayer = async (
  player_id,
  package_id,
  packageEnrollmentPlayer
) => {
  console.log("packageEnrollmentPlayer", packageEnrollmentPlayer);
  try {
    return await prisma.packageEnrollDetailsForPlayer.update({
      where: {
        player_id_package_id: {
          player_id: player_id,
          package_id: package_id,
        },
      },

      data: {
        ...packageEnrollmentPlayer,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const deletePackageEnrollmentPlayer = async (id) => {
  return await prisma.packageEnrollDetailsForPlayer.delete({
    where: { packageEnrollDetailsForPlayer_id: id },
  });
};

module.exports = {
  getPackageEnrollmentPlayer,
  getPackageEnrollmentPlayerById,
  addPackageEnrollmentPlayer,
  updatePackageEnrollmentPlayer,
  deletePackageEnrollmentPlayer,
};
