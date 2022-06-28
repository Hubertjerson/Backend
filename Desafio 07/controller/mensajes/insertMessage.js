const { SQLite3Contenedor } = require('../../api/Contenedor');

insertMessage = async (message) => {
    try {
        const insertMessage = await SQLite3Contenedor.getKnex()
            .into(`messages`)
            .insert(message);

    } catch (err) {
        console.log(`Error ${err}`);
    }
};

module.exports = {
    insertMessage
}