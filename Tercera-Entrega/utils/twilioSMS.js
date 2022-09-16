const twilio = require(`twilio`);
require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

const mensajesSMS = async (body, from, to) => {
    try {
        const menssage = await client.messages.create({
            body: body,
            from: from,
            to: to,
        });
        console.log(menssage);
    } catch (e) { }
}
module.exports = mensajesSMS;