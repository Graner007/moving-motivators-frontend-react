import React from "react";
// npm install --save-dev @iconify/react @iconify-icons/flat-color-icons
import { Icon } from "@iconify/react";
import openedFolder from "@iconify-icons/flat-color-icons/opened-folder";
import { Link } from "react-router-dom";

const QuestionGroup = ({ questionGroup }) => {

  return (
      <Link to={questionGroup.groupName + "/questions"}>
        <div>
          <Icon icon={openedFolder} />
          {questionGroup.groupName}
        </div>
      </Link>
  );
};

export default QuestionGroup;
