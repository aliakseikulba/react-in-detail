import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';
import OnOff from './components/OnOff/OnOff';
import {MySelect} from './components/MySelect/MySelect';


function App() {
  //Rating state
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  //Accordion state
  const [collapsed, setCollapsed] = useState<boolean>(false);
  //OnOff state
  const [on, setOn] = useState(false);
  //MySelect state
  const [selectValue, setSelectValue] = useState<string>('choose...');
  const chooseValue = (value: string) => {
    setSelectValue(value);
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
      <MySelect value={selectValue}
                items={['One','Two','Three','Four','Five']}
                callback={chooseValue}/>
    </div>
  );
}

export default App;
