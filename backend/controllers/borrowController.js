const Borrow = require("../models/Borrow");
const Book = require("../models/Book");

// Borrow Book
exports.borrowBook = async (req, res) => {
    const { bookId } = req.body;

    const book = await Book.findById(bookId);
    if (!book.available) return res.status(400).json({ msg: "Not available" });

    book.available = false;
    await book.save();

    const borrow = await Borrow.create({
        user: req.user.id,
        book: bookId
    });

    res.json(borrow);
};