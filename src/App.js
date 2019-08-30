import React from "react";
import { Route } from "react-router-dom";

import { Navigation } from "./Components";

function App() {
  return (
    <div>
      <Navigation />
      <Route exact path="/" />
    </div>
  );
}

export default App;
