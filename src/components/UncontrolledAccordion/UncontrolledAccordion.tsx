import React, {useReducer, useState} from 'react';
import AccordionTitle from './AccordionTitle/AccordionTitle';
import AccordionBody from './AccordionBody/AccordionBody';

type AccordionPropsType = {
  title: string
}

type ActionType = {
  type: string
}

const TOGGLE_CONSTANT = 'TOGGLE_COLLAPSED';

const reducer = (state: boolean, action: ActionType) => {
  switch (action.type) {
    case TOGGLE_CONSTANT:
      return !state;
    default:
      return state;
  }
};


function UncontrolledAccordion({title}: AccordionPropsType) {
  // const [collapsed, setCollapsed] = useState(false);
  const [collapsed, dispatch] = useReducer(reducer, false);


  // const onToggle = () => {
  //   setCollapsed(!collapsed);
  // };
  const onToggle = () => {
    dispatch({type: TOGGLE_CONSTANT});
  };

  return (
    <div>
      <AccordionTitle title={title} onToggle={onToggle}/>
      {!collapsed && <AccordionBody/>}
    </div>
  );
}

export default UncontrolledAccordion;

