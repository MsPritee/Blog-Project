import React, { useState, useEffect } from "react";
import Post from "./components/Post";
import PostForm from "./components/PostForm";
import { getPosts, createPost, updatePost } from "./services/postService";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
    };
    fetchPosts();
  }, []);

  const handleAddPost = async (newPost) => {
    const savedPost = await createPost(newPost);
    setPosts([...posts, savedPost]);
  };

  const handleEditPost = async (updatedPost) => {
    try {
      const updatedPosts = await updatePost(updatedPost);
      setPosts(updatedPosts);
      console.log("Post updated successfully:", updatedPosts);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  console.log(posts);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Blog</h1>
      <PostForm onSubmit={handleAddPost} />
      {posts.length > 0 &&
        posts.map((post) => (
          <Post key={post._id} post={post} onEdit={handleEditPost} />
        ))}
    </div>
  );
}

export default Home;
