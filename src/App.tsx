import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';
import OnOff from './components/OnOff/OnOff';
import {MySelect} from './components/MySelect/MySelect';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import {ExampleReactMemo} from './components/HooksAndHOCs/React.memo/ReactMemo';


function App() {
  //Rating state
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  //Accordion state
  const [collapsed, setCollapsed] = useState<boolean>(false);
  //OnOff state
  const [on, setOn] = useState(false);
  //MySelect state
  const [selectValue, setSelectValue] = useState<number>(0);
  const chooseValue = (value: number) => {
    setSelectValue(value);
  };


  return (
    <div>
<ExampleReactMemo/>
      {/*<UncontrolledAccordion title='UncontrolledAccordion'/>*/}
      {/*<Accordion*/}
      {/*  title="Users"*/}
      {/*  changeStatus={setCollapsed}*/}
      {/*  status={collapsed}*/}
      {/*  items={[*/}
      {/*    {title: 'user1', value: 1},*/}
      {/*    {title: 'user2', value: 2},*/}
      {/*    {title: 'user3', value: 3},*/}
      {/*    {title: 'user4', value: 4},*/}
      {/*    {title: 'user5', value: 5},*/}
      {/*  ]}*/}
      {/*  callBack={(value) => {*/}
      {/*    console.log(`user with id ${value} was called`);*/}
      {/*  }}/>*/}
      {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
      {/*<OnOff on={on} setOn={setOn}/>*/}
      {/*<MySelect value={selectValue}*/}
      {/*          items={[*/}
      {/*            {value: 1, title: 'One'},*/}
      {/*            {value: 2, title: 'Two'},*/}
      {/*            {value: 3, title: 'Three'},*/}
      {/*            {value: 4, title: 'Four'},*/}
      {/*            {value: 5, title: 'Five'}]}*/}
      {/*          callback={chooseValue}/>*/}
    </div>
  );
}

export default App;
