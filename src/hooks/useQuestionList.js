import axios from "axios";
import { useEffect, useState } from "react";
import { decodeHTML } from "entities";

export default function useQuestionList(amount, difficulty, category) {
  const [loader, setLoader] = useState(true);
  const [questions, setQuestions] = useState([
    {
      answers: [],
      category: "",
      correct: "",
      question: "",
    },
  ]);

  useEffect(() => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
      )
      .then((res) => {
        const filteredQuestions = res.data.results.map((each) => {
          each.incorrect_answers.push(each.correct_answer);
          each.incorrect_answers.sort(() => Math.random() - Math.random());

          return {
            category: each.category,
            question: decodeHTML(each.question),
            answers: each.incorrect_answers.map((each) => decodeHTML(each)),
            correct: decodeHTML(each.correct_answer),
          };
        });

        setQuestions(filteredQuestions);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const question = questions[0];

  return { questions, setQuestions, question, loader };
}
