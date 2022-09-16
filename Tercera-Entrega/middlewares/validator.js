const { body }  = require('express-validator');
const validateResult = require('./validatorResult')


const validaRegister = [
    body('nombre', "No ingreso su nombre")
        .trim()
        .exists(),
    body('correo', "Debe ingresar su correo")
        .trim()
        .exists()
        .isEmail()
        .normalizeEmail(),
    body('contrasena', "Debe tener minimo 6 caracteres")
        .trim()
        //.isStrongPassword(), // Activar si desea una contraseña extremadamente segura
        .isLength({min:6}),
    body('telefono', "debe ingresar un numero de telefono")
        .trim()
        .exists()
        .isNumeric(),
    body('edad', "debe ingresar su edad")
        .trim()
        .exists()
        .isNumeric(),
    body('direccion',"Debe ingresar su direccion")
        .trim()
        .exists(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
];

module.exports = validaRegister;