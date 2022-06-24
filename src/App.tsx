import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Article from "./pages/article";
import Record from "./pages/record";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/record" element={<Record />} />
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
