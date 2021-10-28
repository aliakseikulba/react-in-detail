import React, {useState} from 'react';
import Star from './Star/Star';

export type ValueType = 1 | 2 | 3 | 4 | 5

function UncontrolledRating() {

  const [value, setValue] = useState(0);

  const changeValue = (v: ValueType):void => setValue(v);

  return (
    <div>
      <Star selected={value > 0} changeValue={changeValue} value={1}/>
      <Star selected={value > 1} changeValue={changeValue} value={2}/>
      <Star selected={value > 2} changeValue={changeValue} value={3}/>
      <Star selected={value > 3} changeValue={changeValue} value={4}/>
      <Star selected={value > 4} changeValue={changeValue} value={5}/>
    </div>
  );
}

export default UncontrolledRating;
