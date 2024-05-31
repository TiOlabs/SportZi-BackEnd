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

const CoachRequestEmail = (email, coach_name, arcade_name) => {
  console.log("email",email);
  const mailoptions = {
    from: SENDERSMAIL,
    to: "spynavindu@gmail.com",
    subject: "Coach Request",
    html: ` <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coach Request</title>
    
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
        <h1>Coach Request</h1>
        <p>Dear ${arcade_name} Team,</p>
        <p>We are delighted to inform you that Coach ${coach_name} has expressed interest in joining your arcade. Coach ${coach_name} brings valuable experience and expertise, and we believe their presence would enhance your community. You can visit coach's profile through the coach request.</p>
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

module.exports = { CoachRequestEmail };
