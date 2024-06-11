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

const CoachUnassigned = (arcade_email, coach_name, arcade_name) => {
  const mailoptions = {
    from: SENDERSMAIL,
    to: "spynavindu@gmail.com",
    subject: "Coach Resignation Notice",
    html: ` <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coach Resignation Notice</title>
    
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
        <h1>Coach Resignation Notice</h1>
        <p>Dear ${arcade_name} Team,</p>
        <p>We regret to inform you that Coach ${coach_name} has submitted their resignation.</p>
        <p>Effective immediately, Coach ${coach_name} will no longer be part of Your team.</p>
        <p>We appreciate their contributions and wish them the best in their future endeavors.</p>
        <p>Thank you for your attention to this matter.</p>
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

module.exports = { CoachUnassigned };
