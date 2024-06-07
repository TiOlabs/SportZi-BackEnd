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

const CoachCanceled = (
  email,
  coach_name,
  player_name,
  booking_date,
  booking_time,
  arcade_email,
  arcade_name,
  reason
) => {
  const mailoptions = {
    from: SENDERSMAIL,
    to: "spynavindu@gmail.com",
    cc: arcade_email,
    subject: "Booking Cancellation Notice",
    html: `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Cancellation Notice</title>
    
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
        <center><h1>Booking Cancellation Notice</h1></center>
        <p>Dear ${player_name},</p>
        <p>We regret to inform you that Coach ${coach_name} has canceled your booking scheduled for ${booking_date} at ${booking_time}.</p>
        <p>Reason: ${reason}</p>
        <p>We apologize for any inconvenience this may cause. If you have any questions or need further assistance, please do not hesitate to contact us.</p>
        <p>Thank you for your understanding.</p>
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

module.exports = { CoachCanceled };
