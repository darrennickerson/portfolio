import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import '../styles/blog.scss';
import Single from '../Components/Single';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="blogPosts">
      {posts.map((post, i) => (
        <Single key={i} post={post} />
      ))}
    </div>
  );
};

export default Blog;
