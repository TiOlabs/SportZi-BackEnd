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

const adminEmail = (email,firstname,lastname,password) => {
  const mailoptions = {
    from: SENDERSMAIL,
    to: "spynavindu@gmail.com",
    subject: "Your Admin Panel Access",
    html: ` <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel Access</title>
    
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
        <img src="logo.png" alt="Logo" border="0">
        <h1>Welcome to the Admin Panel!</h1>
        <p>Dear ${firstname} ${lastname},</p>
        <p>We are pleased to inform you that you have been granted access to the admin panel of our system. Please find your login details below:</p>
        <p class="password">Password: <span>${password}</span></p>
        <p>For security purposes, we recommend changing your password after your first login.</p>
        <p>If you have any questions or need assistance, feel free to contact our support team.</p>
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

module.exports = { adminEmail };
