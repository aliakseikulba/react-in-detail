import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from './components/Rating/Rating';



function App() {

  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)

  return (
    <div>
      <Rating value={ratingValue} onClick={setRatingValue}/>
    </div>
  );
}

export default App;
