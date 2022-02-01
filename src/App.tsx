import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';

// Pages
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import FouroFour from './Pages/FouroFour';
import Layout from './Pages/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<FouroFour />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
