const twilio = require(`twilio`);

const ACCOUNT_SID = `ACb9683f7ba6e03a2b64508326f7e7335e`;
const AUTH_TOKEN = `afc33eaa90f6bb8759f1cc6bc2d6914d`;
const PHONE_NUMBER_WHATSAPP = `whatsapp:+14155238886`;

const client = twilio(ACCOUNT_SID, AUTH_TOKEN);

const sendWhatsApp = async (body, from, to) => {
    try {
        const message = await client.messages.create({
            body: body,
            from: from,
            to: to
            //`whatsapp:Codigo+Numero
        })
        console.log(message);

    } catch (e) {
        console.error(e.message);
    }

}

module.exports = sendWhatsApp;