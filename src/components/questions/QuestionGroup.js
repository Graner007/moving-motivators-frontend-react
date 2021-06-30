import React from "react";
// npm install --save-dev @iconify/react @iconify-icons/flat-color-icons
import { Icon } from "@iconify/react";
import openedFolder from "@iconify-icons/flat-color-icons/opened-folder";
import { useHistory } from "react-router-dom";

const QuestionGroup = ({ questionGroup }) => {
  const history = useHistory();
  const handleOpenFolder = () => {
    history.push({
      pathname: "/questions",
      search: `?group=${questionGroup.name}`,
    });
  };

  return (
    <div>
      <button onclick={handleOpenFolder}>
        <Icon icon={openedFolder} />
      </button>
      {questionGroup.name}
    </div>
  );
};

export default QuestionGroup;
