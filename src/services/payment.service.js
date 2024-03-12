const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getpaymentditails = async () => {
  return await prisma.paymentTest.findUnique({
    where: {
      payment_id: 10,
    },
  });
};

const updatePaymentStatus = async () => {
  return await prisma.paymentTest.update({
    where: {
      payment_id: 10,
    },
    data: {
      status: "Success",
    },
  });
};

module.exports = { getpaymentditails, updatePaymentStatus };
