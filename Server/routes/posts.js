const express = require("express");
const router = express.Router();
const Post = require("../model"); // Import the Post model

// GET all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching posts" });
  }
});

// GET a specific post by Id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id); // Find post by ID
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching post" });
  }
});

// POST Create a new post (Assuming JSON data in request body)
router.post("/add", async (req, res) => {
  try {
    const newPost = new Post(req.body);

    const savedPost = await newPost.save();

    res.status(201).json(savedPost);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Error saving post" });
  }
});

// PUT  Update a specific post by ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;

  const { title, content, ...otherUpdates } = req.body;

  try {
    const post = await Post.findByIdAndUpdate(
      id,
      { title, content, ...otherUpdates },
      { new: true }
    );

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    console.log("Updated post:", post);

    res.json(post);
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(500).json({ error: "Error updating post" });
  }
});

module.exports = router;
