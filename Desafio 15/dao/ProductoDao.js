const ProductosModel = require('../models/producto')
const log4js = require('./utils/logs');
const loggerArchiveError = log4js.getLogger(`errorArchive`);

class ProductoDao {
    ID_FIELD = "_id";

    static async exists(id) {
        try {
            return await ProductosModel.findById(id);
        } catch (error) {
            loggerArchiveError.error(error);
        }
    }

    async getAll() {
        try {
            return await ProductosModel.findAll();
        } catch (error) {
            loggerArchiveError.error(error);
            return false;
        }
    }

    async getProductById(objectId) {
        try {
            const product = await ProductosModel.findOne({
                [this.ID_FIELD]: objectId
            })
            return product;
        } catch (error) {
            loggerArchiveError.error(error);
            return false;
        }
    }

    async createProduct(object) {
        try {
            return await ProductosModel.create(object)
        } catch (error) {
            loggerArchiveError.error(error);
            return false;
        }
    }

    async updateProductById(id, object) {
        try {
            await ProductosModel.findByIdAndUpdate(
                {
                    [this.ID_FIELD]: id
                },
                object,
                {
                    runValidators: true
                })
            return true;
        } catch (error) {
            loggerArchiveError.error(error);
            return false;
        }
    }

    async deleteProductById(id) {
        try {
            return await ProductosModel.findByIdAndDelete({ [this.ID_FIELD]: id })
        } catch (error) {
            loggerArchiveError.error(error);
            return false;
        }
    }
}

module.exports = ProductoDao;