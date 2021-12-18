import React from "react";
import { Link, useOutletContext } from "react-router-dom";

import useComponentVisible from "../hooks/useComponentVisible";

import "../Assets/SCSS/Home.scss";

const Home = () => {
  const setDifficulty = useOutletContext()[4];
  const setCategory = useOutletContext()[6];

  const casModal = useComponentVisible(false);
  const catDifModal = useComponentVisible(false);
  const catCatModal = useComponentVisible(false);

  return (
    <div className="home">
      <p>
        By answering questions and learning, you're improving your cognitive
        skills. Retaining information about topics you're interested in is like
        an exercise for your mind, allowing you to expand your intelligence and
        improve mental capabilities. This leads to greater creativity,
        innovation and problem-solving skills.
      </p>

      {/* Ranking */}

      <Link to="/ranking">
        <button className="button">
          <span>Ranking</span>
        </button>
      </Link>

      {/* Ranking END */}

      {/* Casual */}

      <button
        className="button"
        onClick={() => casModal.setIsComponentVisible(true)}
      >
        <span>Casual</span>
      </button>

      <div
        ref={casModal.ref}
        className={casModal.isComponentVisible ? "modal opened" : "modal"}
      >
        <div className="modal-header">
          <span
            className="close"
            onClick={() => casModal.setIsComponentVisible(false)}
          >
            &times;
          </span>
          <h2>Choose Difficulty</h2>
        </div>
        <div className="modal-body">
          <Link to="/casual">
            <input
              type="button"
              value="Easy"
              onClick={(ev) => setDifficulty(ev.target.value.toLowerCase())}
            />
          </Link>
          <Link to="/casual">
            <input
              type="button"
              value="Medium"
              onClick={(ev) => setDifficulty(ev.target.value.toLowerCase())}
            />
          </Link>
          <Link to="/casual">
            <input
              type="button"
              value="Hard"
              onClick={(ev) => setDifficulty(ev.target.value.toLowerCase())}
            />
          </Link>
        </div>
      </div>

      {/* Casual END */}

      {/* Select Category */}

      <button
        className="button"
        onClick={() => catDifModal.setIsComponentVisible(true)}
      >
        <span>Select Category</span>
      </button>

      <div
        ref={catDifModal.ref}
        className={catDifModal.isComponentVisible ? "modal opened" : "modal"}
      >
        <div className="modal-header">
          <span
            className="close"
            onClick={() => catDifModal.setIsComponentVisible(false)}
          >
            &times;
          </span>
          <h2>Choose Difficulty</h2>
        </div>
        <div className="modal-body">
          <input
            type="button"
            value="Easy"
            onClick={(ev) => {
              setDifficulty(ev.target.value.toLowerCase());
              catDifModal.setIsComponentVisible(false);
              catCatModal.setIsComponentVisible(true);
            }}
          />
          <input
            type="button"
            value="Medium"
            onClick={(ev) => {
              setDifficulty(ev.target.value.toLowerCase());
              catDifModal.setIsComponentVisible(false);
              catCatModal.setIsComponentVisible(true);
            }}
          />
          <input
            type="button"
            value="Hard"
            onClick={(ev) => {
              setDifficulty(ev.target.value.toLowerCase());
              catDifModal.setIsComponentVisible(false);
              catCatModal.setIsComponentVisible(true);
            }}
          />
        </div>
      </div>

      <div
        ref={catCatModal.ref}
        className={catCatModal.isComponentVisible ? "modal opened" : "modal"}
      >
        <div className="modal-header">
          <span
            className="close"
            onClick={() => catCatModal.setIsComponentVisible(false)}
          >
            &times;
          </span>
          <h2>Please Choose Category</h2>
        </div>
        <div className="modal-body categories">
            <Link to="/categories">
              <input
                type="button"
                value="Films"
                id="11"
                onClick={(ev) => setCategory(ev.target.id)}
              />
            </Link>
            <Link to="/categories">
              <input
                type="button"
                value="Music"
                id="12"
                onClick={(ev) => setCategory(ev.target.id)}
              />
            </Link>
            <Link to="/categories">
              <input
                type="button"
                value="Celebrities"
                id="26"
                onClick={(ev) => setCategory(ev.target.id)}
              />
            </Link>
            <Link to="/categories">
              <input
                type="button"
                value="Vehicles"
                id="28"
                onClick={(ev) => setCategory(ev.target.id)}
              />
            </Link>

            <Link to="/categories">
              <input
                type="button"
                value="Sports"
                id="21"
                onClick={(ev) => setCategory(ev.target.id)}
              />
            </Link>
            <Link to="/categories">
              <input
                type="button"
                value="Anime/Manga"
                id="31"
                onClick={(ev) => setCategory(ev.target.id)}
              />
            </Link>
            <Link to="/categories">
              <input
                type="button"
                value="Cartoon/Animations"
                id="32"
                onClick={(ev) => setCategory(ev.target.id)}
              />
            </Link>
            <Link to="/categories">
              <input
                type="button"
                value="Mathematics"
                id="19"
                onClick={(ev) => setCategory(ev.target.id)}
              />
            </Link>

            <Link to="/categories">
              <input
                type="button"
                value="Geography"
                id="22"
                onClick={(ev) => setCategory(ev.target.id)}
              />
            </Link>
            <Link to="/categories">
              <input
                type="button"
                value="Art"
                id="25"
                onClick={(ev) => setCategory(ev.target.id)}
              />
            </Link>
            <Link to="/categories">
              <input
                type="button"
                value="History"
                id="23"
                onClick={(ev) => setCategory(ev.target.id)}
              />
            </Link>
            <Link to="/categories">
              <input
                type="button"
                value="Mythology"
                id="20"
                onClick={(ev) => setCategory(ev.target.id)}
              />
            </Link>
        </div>
      </div>

      {/* Select Category END */}

      <button className="button">
        <span>Leave Feedback</span>
      </button>
    </div>
  );
};

export default Home;
