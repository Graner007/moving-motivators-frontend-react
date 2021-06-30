import { useState, useEffect } from "react";
import axios from "axios";
import QuestionGroup from "./QuestionGroup";

const QuestionGroupConatiner = () => {
  const [questionGroups, setQuestionGroups] = useState([]);

  useEffect(() => {
    axios
      .get("/question-group")
      .then((res) => {
        setQuestionGroups(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="question-group-container">
      {questionGroups.map((questionGroup) => (
        <QuestionGroup questionGroup={questionGroup} key={questionGroup.id} />
      ))}
    </div>
  );
};

export default QuestionGroupConatiner;
