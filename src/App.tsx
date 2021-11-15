import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';
import OnOff from './components/OnOff/OnOff';
import {MySelect} from './components/MySelect/MySelect';
import {Select} from './components/Select/Select';


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
  //Select
  const callback = () => {
    console.log('hello');
  }


  return (
    <div>
      <Accordion
        title="Users"
        changeStatus={setCollapsed}
        status={collapsed}
        items={[
          {title: 'user1', value: 1},
          {title: 'user2', value: 2},
          {title: 'user3', value: 3},
          {title: 'user4', value: 4},
          {title: 'user5', value: 5},
        ]}
        callBack={(value) => {
          console.log(`user with id ${value} was called`);
        }}/>
      <Rating value={ratingValue} onClick={setRatingValue}/>
      <OnOff on={on} setOn={setOn}/>
      <Select selectValue='1'
              onChange={callback}
              items={[
                {title: 'One', value: '1'},
                {title: 'Two', value: '2'},
                {title: 'Three', value: '3'}]}/>
    </div>
  );
}

export default App;
