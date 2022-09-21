import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
import Article from './pages/article';
import Record from './pages/record';
import Say from './pages/say';
import Header from './components/header';
import Footer from './components/footer';
import Picture from './pages/picture';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<Detail setIsShowDetail={() => {}} />} />
        <Route path='/article/:id' element={<Article />} />
        <Route path='/record' element={<Record />} />
        <Route path='/say' element={<Say />} />
        <Route path='/picture' element={<Picture />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
