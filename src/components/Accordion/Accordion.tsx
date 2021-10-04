import React from "react";
import AccordionTitle from "./AccordionTitle/AccordionTitle";
import AccordionBody from "./AccordionBody/AccordionBody";

type AccordionPropsType = {
  title: string,
  collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle title={props.title}/>
      {props.collapsed && <AccordionBody/>}
    </div>
  );
}

export default Accordion;

