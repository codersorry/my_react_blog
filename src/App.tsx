import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
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
