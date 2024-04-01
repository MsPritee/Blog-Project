import React, { useState } from "react";
import axios from "axios";

const SavePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/posts", {
        title,
        content,
        author,
      });

      console.log(response.data); // Handle successful creation (optional)
      setTitle("");
      setContent("");
      setAuthor("");
    } catch (err) {
      console.error(err); // Handle errors (optional)
    }
  };

  return (
    <div>
      <h2>Save New Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Content:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </label>
        <button type="submit">Save Post</button>
      </form>
    </div>
  );
};

export default SavePost;
