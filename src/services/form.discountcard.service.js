const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getDiscountCards = async () => {
  return await prisma.discount.findMany();
};

const addDiscountCard = async (discount) => {
  return await prisma.discount.create({
    data: {
      ...discount,
    },
  });
};

const updateDiscountCard = async (id, discount) => {
  return await prisma.discount.update({
    where: { id: id },
    data: {
      ...discount,
    },
  });
};

const deleteDiscountCard = async (id) => {
  return await prisma.discount.delete({
    where: { id: id },
  });
};

module.exports = {
  getDiscountCards,
  addDiscountCard,
  updateDiscountCard,
  deleteDiscountCard,
};