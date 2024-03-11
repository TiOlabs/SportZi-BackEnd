const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const getDiscountCards = async () => {
  return await prisma.zoneDiscount.findMany({
    include: {
      zone: true ,// Include Zone data
      

    }
  });
};

const addDiscountCard = async (discount) => {
  return await prisma.ZoneDiscount.create({
    data: {
      ...ZoneDiscount,
    }, 
  });
};

const updateDiscountCard = async (id, discount) => {
  return await prisma.ZoneDiscount.update({
    where: { id: id },
    data: {
      ...ZoneDiscount,
    },
  });
};

const deleteDiscountCard = async (id) => {
  return await prisma.ZoneDiscount.delete({
    where: { id: id },
  });
};

module.exports = {
  getDiscountCards,
  addDiscountCard,
  updateDiscountCard,
  deleteDiscountCard,
};