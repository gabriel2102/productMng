const { createProduct, getAllProducts, getProductById, editProductById, deleteProductById } = require('../controllers/product.controller');

module.exports = app => {
    app.post('/api/product/new', createProduct);
    app.get('/api/products', getAllProducts);
    app.get('/api/product/:id', getProductById);
    app.put('/api/product/:id/edit', editProductById);
    app.delete('/api/product/:id/delete', deleteProductById);
}
