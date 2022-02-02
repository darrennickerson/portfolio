import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

// Pages
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import FouroFour from './Pages/FouroFour';
import Layout from './Pages/Layout';
import CreatePost from './Pages/CreatePost';
import Post from './Pages/Post';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Post />} />
          <Route path="/blog/new" element={<CreatePost />} />
          <Route path="*" element={<FouroFour />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
