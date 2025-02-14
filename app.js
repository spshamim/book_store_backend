const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const bookRoutes = require("./routes/booksRoute");
const app = express();
connectDB();
app.use(
    cors({
        origin: "http://localhost:7000",
        credentials: true,
    })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api/books", bookRoutes);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
