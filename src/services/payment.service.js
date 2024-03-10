const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getpaymentditails = async () => {
  return await prisma.paymentTest.findUnique({
    where: {
      payment_id: 10,
    },
  });
};

async function updatePaymentStatus(paymentId) {
  try {
    // Update payment status in the database
    await prisma.payment.update({
      where: { id: paymentId },
      data: { status: "success" },
    });
    console.log("Payment status updated successfully");
  } catch (error) {
    console.error("Error updating payment status:", error);
    throw error; // Rethrow the error to handle it in the controller
  }
}

// const postPaymentDitails = async () => {
//   try {
//     const { paymentId } = req.body;
//     // Update payment status in the database
//     await prisma.payment.update({
//       where: { id: paymentId },
//       data: { status: "success" },
//     });
//     res.send("Payment status updated successfully");
//   } catch (error) {
//     console.error("Error updating payment status:", error);
//     res.status(500).send("Error updating payment status");
//   }
//   // const { payment_status } = req.body;
//   // return await prisma.paymentTest.update({
//   //   where: {
//   //     payment_id: 10,
//   //   },
//   //   data: {
//   //     payment_status: "success",
//   //   },
//   // });
// };

// const postPaymentDitails = async (payment_id, payment_status) => {
//   return await prisma.paymentTest.update({
//     where: {
//       payment_id: payment_id, // Use the parameter value here
//     },
//     data: {
//       payment_status: payment_status, // Use the parameter value here
//     },
//   });
// };
module.exports = { getpaymentditails, updatePaymentStatus };
