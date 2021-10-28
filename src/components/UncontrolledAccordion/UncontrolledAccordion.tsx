import React, {useState} from 'react';
import AccordionTitle from './AccordionTitle/AccordionTitle';
import AccordionBody from './AccordionBody/AccordionBody';

type AccordionPropsType = {
  title: string
}

function UncontrolledAccordion({title}: AccordionPropsType) {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <AccordionTitle title={title} onToggle={onToggle}/>
      {!collapsed && <AccordionBody/>}
    </div>
  );
}

export default UncontrolledAccordion;

