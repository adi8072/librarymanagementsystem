const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { borrowBook } = require("../controllers/borrowController");

router.post("/", auth, borrowBook);

module.exports = router;