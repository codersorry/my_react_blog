import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import BlogMain from './pages/main';

function App() {
  return (
    <BrowserRouter>
      <BlogMain />
    </BrowserRouter>
  );
}

export default App;
