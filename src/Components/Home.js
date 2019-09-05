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

      <Link to="/ranking">
        <button className="button">
          <span>Ranking </span>
        </button>
      </Link>

      <Link to="/casual">
        <button className="button">
          <span>Casual </span>
        </button>
      </Link>

      <button className="button">
        <span>Select Category</span>
      </button>
      <button className="button">
        <span>Leave Feedback</span>
      </button>
    </div>
  );
};

export default Home;
