import React from 'react';

const Single = (props) => {
  const post = props.post;
  return (
    <article className="gridPost">
      <h2>{post.title}</h2>
      <span className="author">Published By: Darren Nickerson</span>
      <p className="postContent">{post.body}</p>
    </article>
  );
};

export default Single;
