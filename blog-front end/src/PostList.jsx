import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, ListGroup } from 'react-bootstrap';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('/api/posts');
      setPosts(response.data);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      <ListGroup>
        {posts.map((post) => (
          <ListGroup.Item key={post._id} action href={`/posts/${post._id}`}>
            {post.title}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default PostList;
