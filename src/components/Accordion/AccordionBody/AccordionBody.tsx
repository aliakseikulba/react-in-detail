import React from "react";

type AccordionBodyPropsType = {
  items: Array<string>
}

function AccordionBody({items}:AccordionBodyPropsType) {
  return (
    <ul>
      {items.map((i, index) => <li key={index}>{i}</li>)}
    </ul>
  );
}

export default AccordionBody;