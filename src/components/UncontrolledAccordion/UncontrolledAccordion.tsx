import React, {useReducer} from 'react';
import AccordionTitle from './AccordionTitle/AccordionTitle';
import AccordionBody from './AccordionBody/AccordionBody';
import {reducer, TOGGLE_COLLAPSED} from './reducer';

type AccordionPropsType = {
  title: string
}


function UncontrolledAccordion({title}: AccordionPropsType) {
  // const [collapsed, setCollapsed] = useState(false);
  const [state, dispatch] = useReducer(reducer, {collapsed: false});


  // const onToggle = () => {
  //   setCollapsed(!collapsed);
  // };
  const onToggle = () => {
    dispatch({type: TOGGLE_COLLAPSED});
  };

  return (
    <div>
      <AccordionTitle title={title} onToggle={onToggle}/>
      {!state.collapsed && <AccordionBody/>}
    </div>
  );
}

export default UncontrolledAccordion;

