import React from "react";
import { Route } from "react-router-dom";

import "./Assets/SCSS/App.scss";

import { Navigation } from "./Components";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Route exact path="/" />
    </div>
  );
}

export default App;
