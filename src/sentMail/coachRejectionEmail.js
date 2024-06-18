const nodemailer = require("nodemailer");

const SENDERSMAIL = "sportzilive@gmail.com";
const transporter = nodemailer.createTransport({
  service: "gmail", // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "sportzilive@gmail.com",
    pass: "wknt piws spcl xvpc",
  },
});
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

const CoachRejectionEmail = (email, coach_name, arcade_name) => {
  const mailoptions = {
    from: SENDERSMAIL,
    to: "spynavindu@gmail.com",
    subject: "Coach Rejection Notice",
    html: ` <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coach Rejection Notice</title>

    <style>
        /* Add your custom styling here */
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #007bff;
            text-align: center;
        }
        p {
            font-size: 16px;
            line-height: 1.6;
        }
        img {
            display: block;
            margin: 0 auto;
            width: 100px; /* Adjust the width as needed */
            height: 100px; /* Adjust the height as needed */
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="https://i.ibb.co/3B1J1jP/logo.png" alt="logo" />
        <h1>Coach Rejection Notice</h1>
        <p>Dear ${coach_name},</p>
        <p>We regret to inform you that your application to coach at ${arcade_name} has been rejected.</p>
        <p>Thank you for your interest in coaching at ${arcade_name}. We wish you the best in your future endeavors.</p>
        <p>Best Regards,</p>
        <p>The SportZi Team</p>
    </div>
</body>`,
  };
  transporter.sendMail(mailoptions, function (error, info) {
    if (error) {
      console.log("this is error" + error);
    } else {
      console.log("email sended" + info.response);
    }
  });
};

module.exports = { CoachRejectionEmail };
