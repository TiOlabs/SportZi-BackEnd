const paymentcontroller = require("../services/payment.service");

const getpaymentditails = async (req, res) => {
  try {
    const paymentditails = await paymentcontroller.getpaymentditails();
    res.status(200).json(paymentditails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getpaymentditails };
