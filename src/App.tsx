import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';



function App() {

  const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <div>
      <Accordion title='Accordion with state in App' changeStatus={setCollapsed} status={collapsed}/>
      <Rating value={ratingValue} onClick={setRatingValue}/>
    </div>
  );
}

export default App;
