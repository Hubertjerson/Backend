const ProductoDao = require('../dao/ProductoDao')
const productoDao = new ProductoDao()


const addProduct = async (req, res) => {
    const { body } = req;
    const newProduct = await productoDao.createProduct(body);
    newProduct
    ? res.status(200).json({"success": "Product added with ID " + newProduct._id})
    : res.status(400).json({"error": "there was an error, please verify the body content match the schema"})
}