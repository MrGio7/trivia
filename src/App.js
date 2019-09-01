import React from "react";
import { Route } from "react-router-dom";

import "./Assets/SCSS/App.scss";

import { Navigation, Home, Ranking } from "./Components";

function App() {
  return (
    <div className="app">
      <Route path="/" component={Navigation} />
      <Route exact path="/" component={Home} />
      <Route exact path="/ranking" component={Ranking} />
    </div>
  );
}

export default App;
