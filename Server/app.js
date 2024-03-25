const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const postsRouter = require("./routes/posts");

const app = express();

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/postsCN")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Middlewares
app.use(cors());
app.use(bodyParser.json());

app.use("/api/posts", postsRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
