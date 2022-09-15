const { createTransport } = require(`nodemailer`);
require('dotenv').config()

const EMAIL = process.env.EMAIL
const PASS = process.env.PASS

const transporter = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: EMAIL,
        pass: PASS
    }
});

const sendEmail = async (options) => {
    try {
        const response = await transporter.sendMail(options);
        console.log(response);

    } catch (e) {
        console.error(e);
    }
}

module.exports = sendEmail;