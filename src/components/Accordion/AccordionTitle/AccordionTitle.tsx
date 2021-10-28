import React from "react";

type AccordionTitlePropsType = {
  title: string
  changeStatus: (status: boolean) => void
  status: boolean
}

function AccordionTitle({title, status, changeStatus}: AccordionTitlePropsType) {

  const changeCollapsed = () => {
    changeStatus(!status);
  }

  return (
    <h3 onClick={changeCollapsed}>{title}</h3>
  );
}

export default AccordionTitle;