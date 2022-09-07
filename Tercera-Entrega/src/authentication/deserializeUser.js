const passport = require('passport');
const UserModel = require('../models/usuario');
const log4js = require('../utils/logs');

const loggerError = log4js.getLogger(`errorArchive`);

const deserializeUser = () => {
    passport.deserializeUser(async (id, done) => {
        try {
            const user = await UserModel.findById(id);
            done(null, user);
        } catch (err) {
            loggerError.error(err);
            done(err);
        }
    });
}

module.exports = deserializeUser;