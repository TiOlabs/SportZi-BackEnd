const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getpaymentditails = async () => {
  return await prisma.paymentTest.findUnique({
    where: {
      payment_id: 10,
    },
  });
};
module.exports = { getpaymentditails };
