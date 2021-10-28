import React, {useState} from 'react';
import Star from './Star/Star';

type RatingType = 0 | 1 | 2 | 3 | 4 | 5

function UncontrolledRating() {

  const [value, setValue] = useState(0);

  const changeValue = (v: RatingType):void => setValue(v);

  return (
    <div>
      <Star selected={value > 0} changeValue={() => changeValue(1)}/>
      <Star selected={value > 1} changeValue={() => changeValue(2)}/>
      <Star selected={value > 2} changeValue={() => changeValue(3)}/>
      <Star selected={value > 3} changeValue={() => changeValue(4)}/>
      <Star selected={value > 4} changeValue={() => changeValue(5)}/>
    </div>
  );
}

export default UncontrolledRating;
