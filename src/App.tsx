import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';
import OnOff from './components/OnOff/OnOff';



function App() {
  //Rating state
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  //Accordion state
  const [collapsed, setCollapsed] = useState<boolean>(false);
  //OnOff state
  const [on, setOn] = useState(false);

  return (
    <div>
      <Accordion title='Accordion with state in App' changeStatus={setCollapsed} status={collapsed}/>
      <Rating value={ratingValue} onClick={setRatingValue}/>
      <OnOff on={on} setOn={setOn}/>
    </div>
  );
}

export default App;
