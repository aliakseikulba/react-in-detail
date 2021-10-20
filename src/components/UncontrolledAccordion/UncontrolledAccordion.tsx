import React, {useState} from 'react';
import AccordionTitle from './AccordionTitle/AccordionTitle';
import AccordionBody from './AccordionBody/AccordionBody';

type AccordionPropsType = {
  title: string
}

function UncontrolledAccordion(props: AccordionPropsType) {
  const [collapsed, setCollapsed] = useState(true);

  const onToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <AccordionTitle title={props.title}/>
      <button onClick={() => onToggle()}>TOGGLE</button>
      {!collapsed && <AccordionBody/>}
    </div>
  );
}

export default UncontrolledAccordion;

