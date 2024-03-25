const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  date: { type: Date, default: Date.now },
  category: String,
  featuredImage: String,
  comments: [
    {
      comment: String,
      author: String,
      date: Date,
    },
  ],
  tags: [String],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
