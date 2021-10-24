import React, {useState} from 'react';
import Star from './Star/Star';

type RatingType = 0 | 1 | 2 | 3 | 4 | 5

function UncontrolledRating() {

  const [value, setValue] = useState(0);

  const changeValue = (v: RatingType):void => {setValue(v)}

  return (
    <div>
      <button onClick={() => {changeValue(0)}}>clear</button>
      <Star selected={value > 0}/> <button onClick={() => {changeValue(1)}}>1</button>
      <Star selected={value > 1}/> <button onClick={() => {changeValue(2)}}>2</button>
      <Star selected={value > 2}/> <button onClick={() => {changeValue(3)}}>3</button>
      <Star selected={value > 3}/> <button onClick={() => {changeValue(4)}}>4</button>
      <Star selected={value > 4}/> <button onClick={() => {changeValue(5)}}>5</button>
    </div>
  );
}

export default UncontrolledRating;
