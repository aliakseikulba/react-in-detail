import React from "react";

type AccordionTitlePropsType = {
  title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <h3>{props.title}</h3>
  );
}

export default AccordionTitle;