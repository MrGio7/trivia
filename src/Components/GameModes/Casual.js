import React, { useState, useEffect, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import { decodeHTML } from "entities";

import "../../Assets/SCSS/Casual.scss";

const Casual = () => {
  const difficulty = useOutletContext()[3];
  const [questions, setQuestions] = useState([
    {
      answers: [],
      category: "",
      correct: "",
      question: ""
    }
  ]);
  const [timer, setTimer] = useState(20);
  const [loader, setLoader] = useState(true);

  const question = questions[0];

  useEffect(() => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=50&difficulty=${difficulty}&type=multiple`
      )
      .then(res => {
        const filteredQuestions = res.data.results.map(each => {
          each.incorrect_answers.push(each.correct_answer);
          each.incorrect_answers.sort(
            (elem1, elem2) => Math.random() - Math.random()
          );

          return {
            category: each.category,
            question: decodeHTML(each.question),
            answers: each.incorrect_answers.map(each => decodeHTML(each)),
            correct: decodeHTML(each.correct_answer)
          };
        });

        setQuestions(filteredQuestions);
        setLoader(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const answerHandler = ev => {
    if (ev.target.value === question.correct) {
      if (questions.length !== 1) {
        ev.target.className = "correct";
        document.getElementsByClassName("overly")[0].className = "overly cover";
        setTimer(4);
        setTimeout(() => {
          questions.shift();
          setQuestions([...questions]);
          setTimer(20);
          document.getElementsByClassName("correct")[0].className = "";
          document.getElementsByClassName("overly")[0].className = "overly";
        }, 3000);
      } else {
        ev.target.className = "correct";
        document.getElementsByClassName("overly")[0].className = "overly cover";
        setTimer(4);
        setTimeout(() => {
          history.goBack();
          alert(`Congrats, you finished this quest `);
        }, 3000);
      }
    } else {
      if (questions.length !== 1) {
        ev.target.className = "incorrect";
        [].filter.call(document.getElementsByTagName("input"), function(input) {
          return input.value === question.correct;
        })[0].className = "correct";
        document.getElementsByClassName("overly")[0].className = "overly cover";
        setTimer(4);
        setTimeout(() => {
          questions.shift();
          setQuestions([...questions]);
          setTimer(20);
          document.getElementsByClassName("incorrect")[0].className = "";
          document.getElementsByClassName("correct")[0].className = "";
          document.getElementsByClassName("overly")[0].className = "overly";
        }, 3000);
      } else {
        ev.target.className = "incorrect";
        [].filter.call(document.getElementsByTagName("input"), function(input) {
          return input.value === question.correct;
        })[0].className = "correct";
        document.getElementsByClassName("overly")[0].className = "overly cover";
        setTimer(4);
        setTimeout(() => {
          history.goBack();
          alert(`Congrats, you finished this quest`);
        }, 3000);
      }
    }
  };

  // Timer useInterval Function

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  // Setting up timer

  useInterval(() => {
    setTimer(timer - 1);
    if (questions.length !== 1) {
      if (timer === 0) {
        questions.shift();
        setQuestions([...questions]);
        setTimer(20);
      }
    } else {
      if (timer === 0) {
        [].filter.call(document.getElementsByTagName("input"), function(input) {
          return input.value === question.correct;
        })[0].className = "correct";
        document.getElementsByClassName("overly")[0].className = "overly cover";
        history.goBack();
        alert(`Congrats, you finished this quest`);
      }
    }
  }, 1000);

  return loader ? (
    <div className="loader" />
  ) : (
    <div className="casual">
      <div className="category">
        <h2>{question.category}</h2>
        <h2>{timer}</h2>
      </div>

      <div className="question">
        <p>{question.question} </p>
      </div>

      <div className="answers">
        <div className="overly" />
        {question.answers.map((object, index) => {
          return (
            <input
              key={index}
              type="button"
              value={object}
              onClick={answerHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Casual;
