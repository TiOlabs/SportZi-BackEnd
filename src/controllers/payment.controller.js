const paymentcontroller = require("../services/payment.service");

const sendMail = require("../sentMail/Sentmail");
const paymentSlips = require("../sentMail/PaymentSucces");

const getpaymentditails = async (req, res) => {
  try {
    const paymentditails = await paymentcontroller.getpaymentditails();

    res.status(200).json(paymentditails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postpaymentStatus = async (req, res) => {
  try {
    const paymentStatus = await paymentcontroller.updatePaymentStatus();
    const paymentditails = await paymentcontroller.getpaymentditails();
    sendMail.sentEmail(
      "thisarasenarathna0824@gmail.com",
      paymentSlips.paymntSlip(
        paymentditails.amount,
        paymentditails.amount,
        paymentditails.first_name,
        paymentditails.last_name,
        paymentditails.email,
        paymentditails.payment_id
      )
    );
    res.status(200).json(paymentStatus);
  } catch (error) {
    res.status(500).json({ messageee: error.message });
  }
};

module.exports = { getpaymentditails, postpaymentStatus };
