import React from 'react';
import AccordionTitle from './AccordionTitle/AccordionTitle';
import AccordionBody from './AccordionBody/AccordionBody';

type AccordionPropsType = {
  title: string,
  changeStatus: (status: boolean) => void
  status: boolean
  items: Array<string>
}

function Accordion({title, changeStatus, status, items}: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle title={title} changeStatus={changeStatus} status={status}/>
      {!status && <AccordionBody items={items}/>}
    </div>
  );
}

export default Accordion;

