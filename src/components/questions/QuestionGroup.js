import React from "react";
// npm install --save-dev @iconify/react @iconify-icons/flat-color-icons
import { Icon } from "@iconify/react";
import openedFolder from "@iconify-icons/flat-color-icons/opened-folder";

const QuestionGroup = ({ questionGroup, key }) => {
  const handleOpenFolder = () => {};

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
