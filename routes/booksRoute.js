const express = require("express");
const {
    getBooks,
    addBook,
    deleteBook,
    updateBook,
} = require("../controllers/bookController");
const router = express.Router();

router.get("/", getBooks);
router.post("/", addBook);
router.delete("/:id", deleteBook);
router.patch("/:id", updateBook);

module.exports = router;
