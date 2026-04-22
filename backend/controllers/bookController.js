const Book = require("../models/Book");

// Add Book
exports.addBook = async (req, res) => {
    const book = await Book.create(req.body);
    res.json(book);
};

// Get All Books
exports.getBooks = async (req, res) => {
    const books = await Book.find();
    res.json(books);
};

// Delete Book
exports.deleteBook = async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ msg: "Deleted" });
};