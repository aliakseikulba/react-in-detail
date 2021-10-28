import React from "react";

type AccordionTitlePropsType = {
  title: string
  onToggle: () => void
}

function AccordionTitle({title, onToggle}: AccordionTitlePropsType) {
  return (
    <h3 onClick={onToggle}>{title}</h3>
  );
}

export default AccordionTitle;