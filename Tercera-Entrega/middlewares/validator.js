const { check } = require('express-validator');

const validaRegister = [
    check('nombre', "No ingreso su nombre")
        .trim()
        .exists()
        .not()
        .isEmpty(),
    check('correo')
        .trim()
        .exists()
        .isEmail()
        .normalizeEmail(),
    check('contrasena', "Debe tener minimo 6 caracteres")
        .trim()
        //.isStrongPassword(), // Activar si desea una contraseña extremadamente segura
        .isLength({min:6}),
    check('telefono')
        .exists()
        .isNumeric(),
    check('edad'),
    check('direccion'),

];

module.exports = validaRegister;