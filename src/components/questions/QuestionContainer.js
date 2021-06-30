import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Question from "./Question";

const QuestionContainer = () => {
  const [questions, setQuestions] = useState("");

  useEffect(() => {
    axios
      .get("/questions")
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="question-group-container">
      {questions.map((question) => (
        <Question question={question} />
      ))}
    </div>
  );
};

export default QuestionContainer;
