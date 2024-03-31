import React, { useState } from "react";

const PostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState({}); // validation errors

  const validateForm = () => {
    const newErrors = {};
    if (!title) {
      newErrors.title = "Title is required.";
    }
    if (!author) {
      newErrors.author = "Author is required.";
    }
    if (!content) {
      newErrors.content = "Content is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; //  true if no errors
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return; // not submit if there are validation errors
    }

    const newPost = {
      title,
      author,
      content,
    };

    onSubmit(newPost);
    setTitle("");
    setAuthor("");
    setContent("");
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">Create Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title:
          </label>
          <input
            className={`w-full border border-gray-300 rounded px-2 py-1 ${
              errors.title ? "border-red-500" : ""
            }`}
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && (
            <p className="text-red-500 text-xs mt-1">{errors.title}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="author"
            className="block text-gray-700 font-bold mb-2"
          >
            Author:
          </label>
          <input
            className={`w-full border border-gray-300 rounded px-2 py-1 ${
              errors.author ? "border-red-500" : ""
            }`}
            type="text"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          {errors.author && (
            <p className="text-red-500 text-xs mt-1">{errors.author}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-gray-700 font-bold mb-2"
          >
            Content:
          </label>
          <textarea
            className={`w-full border border-gray-300 rounded px-2 py-1 ${
              errors.content ? "border-red-500" : ""
            }`}
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {errors.content && (
            <p className="text-red-500 text-xs mt-1">{errors.content}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;
