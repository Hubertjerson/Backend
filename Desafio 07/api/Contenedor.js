const { optionsMySQL } = require('../config/mysql');


class Contenedor {

    constructor(config) {
        this.knex = require(`knex`)(config);
    }

    getKnex() {
        return this.knex;
    }
}

const mySQLContenedor = new Contenedor(optionsMySQL);


module.exports = {
    mySQLContenedor,
};
