import React from "react";
import AccordionTitle from "./AccordionTitle/AccordionTitle";
import AccordionBody from "./AccordionBody/AccordionBody";

function Accordion(props: any) {
  return (
    <div>
      <AccordionTitle title={props.title}/>
      <AccordionBody/>
    </div>
  );
}

export default Accordion;

