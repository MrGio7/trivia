import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import {
  Casual,
  Categories,
  Home,
  Ranking,
  Register,
  TopPlayers,
} from "./Components";

ReactDOM.render(
  <BrowserRouter basename="/trivia">
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="ranking" element={<Ranking />} />
        <Route path="casual" element={<Casual />} />
        <Route path="categories" element={<Categories />} />
        <Route path="top" element={<TopPlayers />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
