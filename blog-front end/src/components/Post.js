import React, { useState } from "react";

const Post = ({ post, onEdit }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedPost, setEditedPost] = useState(post);

  const handleEditClick = () => {
    setEditMode(true);
    setEditedPost(post);
  };

  const handleInputChange = (event) => {
    setEditedPost({ ...editedPost, [event.target.name]: event.target.value });
  };

  const handleSavePost = async () => {
    try {
      const updatedPost = await onEdit(editedPost);
      setEditMode(false);
      setEditedPost(updatedPost);
      console.log("Post updated successfully:", updatedPost);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditedPost(post); // Reset Post
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      {post && (
        <>
          <h2 className="text-xl font-bold mb-2">
            {editMode ? (
              <input
                className="w-full border border-gray-300 rounded px-2 py-1"
                name="title"
                value={editedPost.title}
                onChange={handleInputChange}
              />
            ) : (
              post.title
            )}
          </h2>
          <p className="text-gray-700">
            {editMode ? (
              <textarea
                className="w-full border border-gray-300 rounded px-2 py-1"
                name="content"
                value={editedPost.content}
                onChange={handleInputChange}
              />
            ) : (
              post.content
            )}
          </p>

          <div className="flex justify-end mt-4">
            {editMode ? (
              <>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={handleSavePost}
                >
                  Save
                </button>
                <button
                  className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
                  onClick={handleCancelEdit}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleEditClick}
              >
                Edit
              </button>
            )}
          </div>
        </>
      )}
      {!post && <p>No post data available.</p>}
    </div>
  );
};

export default Post;
