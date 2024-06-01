const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getDiscountCards = async () => {
  return await prisma.zoneDiscount.findMany({
    include: {
      zone: {
        include: {
          sport: true,
          arcade: true,
        },
      }, // Include Zone data
    },
  });
};

const addDiscountCard = async (discount) => {
  return await prisma.zoneDiscount.create({
    data: {
      ...zoneDiscount,
    },
  });
};

const updateDiscountCard = async (id, discount) => {
  return await prisma.zoneDiscount.update({
    where: { id: id },
    data: {
      ...zoneDiscount,
    },
  });
};

const deleteDiscountCard = async (id) => {
  return await prisma.zoneDiscount.delete({
    where: { id: id },
  });
};

module.exports = {
  getDiscountCards,
  addDiscountCard,
  updateDiscountCard,
  deleteDiscountCard,
};
