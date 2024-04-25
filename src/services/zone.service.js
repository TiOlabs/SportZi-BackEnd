const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getZone = async () => {
  return await prisma.zone.findMany();
};
const getZoneById = async (id) => {
  return await prisma.zone.findUnique({
    where: {
      zone_id: id,
    },
  });
};

const addZone = async (zone) => {
  return await prisma.zone.create({
    data: {
      ...zone,
    },
  });
};

const updateZone = async (id, zone) => {
  return await prisma.zone.update({
    where: { id: id },
    data: {
      ...zone,
    },
  });
};

const deleteZone = async (id) => {
  return await prisma.zone.delete({
    where: { id: id },
  });
};

module.exports = {
  getZone,
  getZoneById,
  addZone,
  updateZone,
  deleteZone,
};
