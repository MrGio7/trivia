import React, { useState, useEffect } from "react";
import axios from "axios";

const Ranking = () => {
  const [questions, setQuestions] = useState([
    {
      category: "Entertainment: Books",
      correct_answer: "Badger",
      difficulty: "hard",
      incorrect_answers: [("Fox", "Frog", "Rabbit")],
      question:
        "In the Beatrix Potter books, what type of animal is Tommy Brock?",
      type: "multiple"
    }
  ]);

  useEffect(() => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=20&difficulty=hard&type=multiple`
      )
      .then(res => {
        setQuestions(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const questionCard = () => {
    const mappedQuestions = questions.map(each => each);

    const filteredQuestions = mappedQuestions.map(each => {
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

    return filteredQuestions.map((each, index) => {
      return (
        <div key={index}>
          <div className="category">
            <h2>{each.category}</h2>
          </div>

          <div className="question">
            <p>{each.question} </p>
          </div>

          <div className="answers">
            {each.answers.map((object, index) => {
              return (
                <div key={index}>
                  <button>
                    <span>{object}</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };

  return <div className="ranking">{questionCard()}</div>;
};

export default Ranking;
