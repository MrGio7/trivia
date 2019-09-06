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
    const modal = document.getElementsByClassName("casualModal")[0];
    props.setDifficulty(ev.target.value.toLowerCase());
    
    modal.style.display = "none";
  };

  const chooseCategory = ev => {
    props.setCategory(ev.target.id);
  }

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

      <div className="categoryModal">
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={modalCloseHandler}>
              &times;
            </span>
            <h2>Please Choose Difficulty</h2>
          </div>
          <div className="modal-body">
              <input type="button" value="Easy" onClick={chooseDifficulty} />
              <input type="button" value="Medium" onClick={chooseDifficulty} />
              <input type="button" value="Hard" onClick={chooseDifficulty} />
          </div>
        </div>
      </div>

      <div className="categoryModal">
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={modalCloseHandler}>
              &times;
            </span>
            <h2>Please Choose Category</h2>
          </div>
          <div className="modal-body">
            <Link to="/categories">
              <input type="button" value="Films" id='11' onClick={chooseDifficulty} />
            </Link>
            <Link to="/categories">
              <input type="button" value="Music" id='12' onClick={chooseDifficulty} />
            </Link>
            <Link to="/categories">
              <input type="button" value="Celebrities" id="26" onClick={chooseDifficulty} />
            </Link>
            <Link to="/categories">
              <input type="button" value="Vehicles" id="28" onClick={chooseDifficulty} />
            </Link>
            <Link to="/categories">
              <input type="button" value="Sports" id="21" onClick={chooseDifficulty} />
            </Link>
            <Link to="/categories">
              <input type="button" value="Anime/Manga" id="31" onClick={chooseDifficulty} />
            </Link>
            <Link to="/categories">
              <input type="button" value="Cartoon/Animations" id="32" onClick={chooseDifficulty} />
            </Link>
            <Link to="/categories">
              <input type="button" value="Mathematics" id="19" onClick={chooseDifficulty} />
            </Link>
            <Link to="/categories">
              <input type="button" value="Geography" id="22" onClick={chooseDifficulty} />
            </Link>
            <Link to="/categories">
              <input type="button" value="Art" id="25" onClick={chooseDifficulty} />
            </Link>
            <Link to="/categories">
              <input type="button" value="History" id="23" onClick={chooseDifficulty} />
            </Link>
            <Link to="/categories">
              <input type="button" value="Mythology" id="20" onClick={chooseDifficulty} />
            </Link>
          </div>
        </div>
      </div>

      <button className="button">
        <span>Leave Feedback</span>
      </button>
    </div>
  );
};

export default Home;
