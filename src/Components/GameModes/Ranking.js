import React, { useState, useEffect } from "react";
import axios from "axios";

import '../../Assets/SCSS/Ranking.scss';

const Ranking = () => {
  const [questions, setQuestions] = useState([
    {
        answers: ["Hydrangea", "Harebell", "Yarrow", "Lily of the Valley"],
        category: "Entertainment: Video Games",
        correct: "Lily of the Valley",
        question: "In the Animal Crossing series"
    }
  ]);
  

  useEffect(() => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=20&difficulty=hard&type=multiple`
      )
      .then(res => {
        const filteredQuestions = res.data.results.map(each => {
          each.incorrect_answers.push(each.correct_answer);
          each.incorrect_answers.sort(
            (elem1, elem2) => Math.random() - Math.random()
          );

          return {
            category: each.category,
            question: each.question,
            answers: each.incorrect_answers,
            correct: each.correct_answer
          };
        });

        setQuestions(filteredQuestions);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const question = questions[0];

  const answerHandler = () => {
      questions.shift();
      setQuestions([...questions]);
};

console.log(questions)

  return (
    <div className="ranking">
      <div className="category">
        <h2>{question.category}</h2>
      </div>

      <div className="question">
        <p>{question.question} </p>
      </div>

      <div className="answers">
        {question.answers.map((object, index) => {
          return (
              <button key={index} onClick={answerHandler}>
                <span>{object}</span>
              </button>
          );
        })}
      </div>
    </div>
  );
};

export default Ranking;
