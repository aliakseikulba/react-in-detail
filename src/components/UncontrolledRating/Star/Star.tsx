import React from 'react';
import {ValueType} from '../UncontrolledRating';

type StarPropsType = {
  selected: boolean
  changeValue: (v: ValueType) => void
  value: ValueType;
}

function Star({selected, changeValue, value}: StarPropsType) {

  const setValue = () => {
    changeValue(value);
  }

  return (
    <>
      <span onClick={setValue}>
        {selected ? <b>star </b> : 'star '}
      </span>
    </>
  );
}

export default Star;