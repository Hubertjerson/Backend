const { SQLite3Contenedor } = require('../../api/Contenedor');

selectAllMessage = async () => {
    try {
        let allMessages = await SQLite3Contenedor.getKnex()
            .select(`*`)
            .from(`messages`);

        return allMessages;
    } catch (err) {
        console.log(`Error ${err}`);
    }
};
selectAllMessage();
module.exports = {
    selectAllMessage
}