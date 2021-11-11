import React from "react";
import {itemType} from '../Accordion';

type AccordionBodyPropsType = {
  items: Array<itemType>
  callBack: (value :any) => void
}

function AccordionBody({items, callBack}:AccordionBodyPropsType) {
  return (
    <ul>
      {items.map(i => <li key={i.value} onClick={() => {callBack(i.value)}}>{i.title}</li>)}
    </ul>
  );
}

export default AccordionBody;