const Author= require('../models/authors.models');

module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then((allDaJAuthors) => {
            res.json({authors: allDaJAuthors })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong in the find all', error: err })
        });
}

module.exports.findOneSingleAuthors = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(oneSingleAuthors => {
            res.json({authors: oneSingleAuthors })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong in the find one', error: err })
        });}

module.exports.createNewAuthors = (req, res) => {
    Author.create(req.body)
        .then(newlyCreatedAuthors => {
            res.json({authors: newlyCreatedAuthors })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong in the create a new product', error: err })
        });}

module.exports.updateExistingAuthors = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthors => {
            res.json({ authors: updatedAuthors })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong in the updating ', error: err })
        });}

module.exports.deleteAnExistingAuthors = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong in the deleting ', error: err })
        });}
