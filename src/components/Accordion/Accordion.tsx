import React from 'react';
import AccordionTitle from './AccordionTitle/AccordionTitle';
import AccordionBody from './AccordionBody/AccordionBody';

type AccordionPropsType = {
  title: string,
  changeStatus: (status: boolean) => void
  status: boolean
}

function Accordion({title, changeStatus, status}: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle title={title} changeStatus={changeStatus} status={status}/>
      {!status && <AccordionBody/>}
    </div>
  );
}

export default Accordion;

