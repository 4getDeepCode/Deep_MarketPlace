// const nodemailer = require('nodemailer');

// async function sendVerificationEmail(to, subject, text) {
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'iphoneid202202@gmail.com',
//             pass: 'yumx imlh wylu lpqt'
//         }
//     });

//     const mailOptions = {
//         from: 'iphoneid202202@gmail.com',
//         to,
//         subject,
//         text
//     };

//     await transporter.sendMail(mailOptions);
// }

// module.exports = { sendVerificationEmail };

const nodemailer = require("nodemailer");

async function sendVerificationEmail(to, subject, text) {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();

    const mailOptions = {
      from: `"DeepMarketPlace" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ OTP email sent to:", to);
  } catch (error) {
    console.error("❌ Email error:", error);
    throw error;
  }
}

module.exports = { sendVerificationEmail };
