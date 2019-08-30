import React from "react";
import { Route } from "react-router-dom";

import "./Assets/SCSS/App.scss";

import { Navigation, Home } from "./Components";

function App() {
  return (
    <div className="app">
      <Route path="/"  component={Navigation} />
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
