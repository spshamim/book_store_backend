const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");
require("dotenv").config();

const bookRoutes = require("./routes/booksRoute");
const app = express();
connectDB();
app.use(
    cors({
        origin: "https://bookstore-livid-one.vercel.app",
    })
);
app.use(express.json());
app.use("/api/books", bookRoutes);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
