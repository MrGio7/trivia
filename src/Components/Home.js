import React from "react";
import { Link } from "react-router-dom";

import "../Assets/SCSS/Home.scss";

const Home = props => {
  const modalBtnHandler = ev => {
    ev.preventDefault();
    const modal = document.getElementsByClassName("casualModal")[0];
    modal.style.display = "block";
  };

  const modalCloseHandler = ev => {
    ev.preventDefault();
    const modal = document.getElementsByClassName("casualModal")[0];
    modal.style.display = "none";
  };

  const chooseDifficulty = ev => {
    props.setDifficulty(ev.target.value.toLowerCase());
  };

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

      <button className="button" onClick={modalBtnHandler}>
        <span>Casual </span>
      </button>

      <div className="casualModal">
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={modalCloseHandler}>
              &times;
            </span>
            <h2>Please Choose Difficulty</h2>
          </div>
          <div className="modal-body">
            <Link to="/casual">
              <input type="button" value="Easy" onClick={chooseDifficulty} />
            </Link>
            <Link to="/casual">
              <input type="button" value="Medium" onClick={chooseDifficulty} />
            </Link>
            <Link to="/casual">
              <input type="button" value="Hard" onClick={chooseDifficulty} />
            </Link>
          </div>
        </div>
      </div>

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
