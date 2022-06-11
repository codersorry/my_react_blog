import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Article from "./pages/article";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/article/:id" element={<Article />} />
        {/* <Route path="main" element={<AdminIndex />}>
          <Route path="add" element={<AddArticle />}></Route>
          <Route path="add/:id" element={<AddArticle />}></Route>
          <Route path="list" element={<ArticleList />}></Route>
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
