import React from 'react';
import axios from '../api/axios';

const CreatePost = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.title.value);
    const data = {
      title: e.target.title.value,
      body: e.target.body.value,
    };
    axios
      .post('/posts', data)
      .then((response) => {
        if (response.status === 201) {
          window.location.assign(`/blog`);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" />
        <textarea name="body" placeholder="Work your magic" />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
};

export default CreatePost;
