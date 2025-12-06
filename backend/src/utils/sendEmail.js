const nodemailer = require('nodemailer');

async function sendVerificationEmail(to, subject, text) {
    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: 'iphoneid202202@gmail.com',
            pass: 'yumx imlh wylu lpqt' 
        }
    });

    const mailOptions = {
        from: 'iphoneid202202@gmail.com',
        to,
        subject,
        text
    };

    await transporter.sendMail(mailOptions);
}

module.exports = { sendVerificationEmail };
