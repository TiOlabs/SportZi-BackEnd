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

const ArcadeBookingEmailForArcade = (
  arcade_email,
  arcade_name,
  role,
  reservation_type,
  zone_name,
  full_amount,
  date,
  time,
  participant_count,
  user_name
) => {
  const mailoptions = {
    from: SENDERSMAIL,
    to: "spynavindu@gmail.com",
    subject: "Booking Confirmation",
    html: `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Confirmation</title>
    <style>
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
            width: 100px; 
            height: 100px; 
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="logo.png" alt="Logo" border="0">
        <h1>Booking Confirmation</h1>
        <p>Dear ${arcade_name} Team,</p>
        <p>We are pleased to inform you that ${role} ${user_name} has booked the ${zone_name} zone at your arcade.</p>
        <p>Booking Details:</p>
        <ul>
            <li>Date: ${date}</li>
            <li>Time: ${time}</li>
            <li>Participant Count: ${participant_count}</li>
            <li>Reservation Type: ${reservation_type}</li>
            <li>Total Amount: Rs.${full_amount}.00</li>
        </ul>
        <p>you can see more details in your Profile.</p>
        <p>Please ensure everything is set up for their visit. Thank you!</p>
        <p>Best regards,</p>
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

module.exports = { ArcadeBookingEmailForArcade };
