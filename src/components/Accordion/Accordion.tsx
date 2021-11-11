import React from 'react';
import AccordionTitle from './AccordionTitle/AccordionTitle';
import AccordionBody from './AccordionBody/AccordionBody';

export type itemType = {
  title: string
  value: any
}

type AccordionPropsType = {
  title: string,
  changeStatus: (status: boolean) => void
  status: boolean
  items: Array<itemType>
  callBack: (value :any) => void
}

function Accordion({title, changeStatus, status, items, callBack}: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle title={title} changeStatus={changeStatus} status={status}/>
      {!status && <AccordionBody items={items} callBack={callBack}/>}
    </div>
  );
}

export default Accordion;

