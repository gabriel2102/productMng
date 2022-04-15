const Product = require('../models/product.model');

module.exports.createProduct = (req, res) => {
    console.log(req.body);
    Product.create(req.body.product)
    .then(newProduct => res.status(201).json(newProduct))
    .catch(err => res.status(400).json(err));
}
module.exports.getAllProducts = (req, res) => {
    Product.find()
    .then(products => res.status(200).json(products))
    .catch(err => res.status(400).json(err));
}
module.exports.getProductById = (req, res) => {
    Product.findById(req.params.id)
    .then(product => res.status(200).json(product))
    .catch(err => res.status(400).json(err));
}
module.exports.editProductById = (req, res) => {
    Product.findOneAndUpdate({_id:req.params.id}, req.body.product, {new: true})
    .then(result => res.json({result}))
    .catch(err => res.status(500).json({err}));
}
module.exports.deleteProductById = (req, res) => {
    Product.deleteOne({_id: req.params.id})
    .then(result => res.json({result}))
    .catch(err => res.status(500).json({err}));
}