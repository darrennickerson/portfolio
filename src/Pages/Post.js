import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);
  return (
    <article>
      <h2>{post.title}</h2>
    </article>
  );
};

export default Post;
