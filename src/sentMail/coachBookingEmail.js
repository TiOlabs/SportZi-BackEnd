const nodemailer = require("nodemailer");

const SENDERSMAIL = "ruchithsamarawickrama.sg@gmail.com";
const transporter = nodemailer.createTransport({
  service: "gmail", // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "ruchithsamarawickrama.sg@gmail.com",
    pass: "umvm idkp zzam hxsy",
  },
});
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

const CoachBookingEmailForCoach = (
    coach_email,
    coach_name,
    role,
    reservation_type,
    zone_name,
    full_amount,
    date,
    time,
    participant_count,
    user_name,
    arcade_name
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
            width: 100px; /* Adjust the width as needed */
            height: 100px; /* Adjust the height as needed */
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="logo.png" alt="Logo" border="0">
        <h1>Booking Confirmation</h1>
        <p>Dear ${coach_name},</p>
        <p>${user_name} has booked you at ${arcade_name} in the ${zone_name} zone.</p>
        <p>Booking Details:</p>
        <ul>
            <li>Date: ${date}</li>
            <li>Time: ${time}</li>
            <li>Participant Count: ${participant_count}</li>
            <li>Reservation Type: ${reservation_type}</li>
            <li>Total Amount: Rs.${full_amount}.00</li>
        </ul>
        <p>you can see more details in your Profile.</p>
        <p>Please be prepared for their visit. Thank you!</p>
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

module.exports = { CoachBookingEmailForCoach };
