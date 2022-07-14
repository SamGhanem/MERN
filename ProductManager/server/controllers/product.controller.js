const Product = require('../models/product.models');

module.exports.findAllProduct = (req, res) => {
    Product.find()
        .then((allDaJProduct) => {
            res.json({ product: allDaJProduct })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong in the find all', error: err })
        });
}

module.exports.findOneSingleProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneSingleProduct => {
            res.json({product: oneSingleProduct })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong in the find one', error: err })
        });}

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => {
            res.json({product: newlyCreatedProduct })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong in the create a new product', error: err })
        });}

module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => {
            res.json({ product: updatedProduct })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong in the updating of a product', error: err })
        });}

module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong in the deleting of a product', error: err })
        });}
