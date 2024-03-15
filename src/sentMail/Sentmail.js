const nodemailer = require("nodemailer");

const SENDERSMAIL = "arunapriyadarshana004@gmail.com";
const transporter = nodemailer.createTransport({
  service: "gmail", // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "arunapriyadarshana004@gmail.com",
    pass: "qghj szuj ywvv idwc",
  },
});
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

const sentEmail = (ReciveMail, slip) => {
  const mailoptions = {
    from: SENDERSMAIL,
    to: ReciveMail,
    subject: "payment Success",
    html: slip,
  };
  transporter.sendMail(mailoptions, function (error, info) {
    if (error) {
      console.log("this is error" + error);
    } else {
      console.log("email sended" + info.response);
    }
  });
};

module.exports = { sentEmail };
