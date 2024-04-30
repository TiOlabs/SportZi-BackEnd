const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getZone = async () => {
  return await prisma.zone.findMany({
    include: {
      sport: true,
    },
  });
};
const getZoneById = async (id) => {
  try {
    return await prisma.arcade.findUnique({
      where: {
        arcade_id: id,
      },
      include: {
        zone: {
          include: {
            sport: true,
          },
        },
      },
    });
  } catch (error) {
    console.log("error", error);
  }
};

const addZone = async (zone) => {
  console.log("zone", zone);
  return await prisma.zone.create({
    data: {
      ...zone,
    },
  });
};

const updateZone = async (id, zone) => {
  console.log("idddddddd", id);
  console.log("zoneeeeee", zone);
  return await prisma.zone.update({
    where: { zone_id: id },
    data: {
      ...zone,
    },
  });
};

const deleteZone = async (id) => {
  return await prisma.zone.delete({
    where: { zone_id: id },
  });
};

module.exports = {
  getZone,
  getZoneById,
  addZone,
  updateZone,
  deleteZone,
};
