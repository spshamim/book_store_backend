const books = require("../models/Book");

exports.getBooks = async (req, res) => {
    try {
        const searchQuery = req.query.search || "";
        const data = await books.find({
            name: { $regex: searchQuery, $options: "i" },
        });
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.addBook = async (req, res) => {
    try {
        const book = new books({
            name: req.body.name,
            author: req.body.author,
            price: req.body.price,
            quantity: req.body.quantity,
        });
        const data = await book.save();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const data = await books.deleteOne({ _id: req.params.id });
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.updateBook = async (req, res) => {
    try {
        const data = await books.findOneAndUpdate(
            { _id: req.params.id },
            {
                name: req.body.name,
                author: req.body.author,
                price: req.body.price,
                quantity: req.body.quantity,
            },
            { new: true }
        );
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err });
    }
};
