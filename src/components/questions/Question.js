import {Link} from "react-router-dom";

const Question = ({ question, groupName }) => {
  return <Link to={"/" + groupName +  "/" + question.questionText + "/cards"}><div>{question.questionText}</div></Link>
};

export default Question;