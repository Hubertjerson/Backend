const twilio = require(`twilio`);

const dotenv = require(`dotenv`);
dotenv.config();


const accountSid = 'ACb9683f7ba6e03a2b64508326f7e7335e';
const authToken = 'afc33eaa90f6bb8759f1cc6bc2d6914d';

const client = twilio(accountSid, authToken);

const sendSMS = async (body, from, to) => {
    try {
        const message = await client.messages.create({
            body: body,
            from: from,
            to: to
        })
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}

module.exports = sendSMS;