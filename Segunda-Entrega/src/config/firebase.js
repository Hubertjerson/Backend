var admin = require("firebase-admin");
var serviceAccount = require("./ecommerce-backend-893ff-firebase-adminsdk-411xe-ee33db1224.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://ecommerce-backend.firebaseio.com"
});

const FieldValue = admin.firestore.FieldValue;

const db = admin.firestore();
const queryCarritos = db.collection('carritos');
const queryProductos = db.collection('productos');

module.exports = {
    queryCarritos,
    queryProductos,
    FieldValue
};