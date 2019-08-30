import React from "react";
import { Link } from "react-router-dom";

import "../Assets/SCSS/Home.scss";

const Home = props => {
  return (
    <div className="home">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
      <input type='button' value="Start Quiz" />
    </div>
  );
};

export default Home;
