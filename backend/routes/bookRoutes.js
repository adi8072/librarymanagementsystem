const router = require("express").Router();
const { addBook, getBooks, deleteBook } = require("../controllers/bookController");

router.post("/", addBook);
router.get("/", getBooks);
router.delete("/:id", deleteBook);

module.exports = router;