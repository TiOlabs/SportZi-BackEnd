const paymentcontroller = require("../services/payment.service");

const getpaymentditails = async (req, res) => {
  try {
    const paymentditails = await paymentcontroller.getpaymentditails();
    res.status(200).json(paymentditails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// const postpaymentStatus = async (req, res) => {
//   try {
//     const paymentStatus = await paymentcontroller.postPaymentDitails();
//     res.status(200).json(paymentStatus);
//   } catch (error) {
//     res.status(500).json({ messageee: error.message });
//   }
// };

async function postpaymentStatus(req, res, next) {
  const { paymentId } = req.body;
  try {
    await paymentService.updatePaymentStatus(paymentId);
    res.send("Payment status updated successfully");
  } catch (error) {
    console.error("Error updating payment status:", error);
    res.status(500).send("Error updating payment status");
  }
}

module.exports = { getpaymentditails, postpaymentStatus };
