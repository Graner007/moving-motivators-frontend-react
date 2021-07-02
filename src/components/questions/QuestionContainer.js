import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Question from "./Question";
import {useLocation} from "react-router-dom";

const QuestionContainer = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = useLocation().pathname;
  const lst = url.split("/");
  const groupName = lst[1];

  useEffect(() => {
    axios.get(`/${groupName}/questions`)
      .then((res) => {
        setQuestions(res.data.body);
        setLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="question-group-container">
      {loading && questions.map((question) => (
        <Question question={question} groupName={groupName} key={question.id} />
      ))}
    </div>
  );
};

export default QuestionContainer;
