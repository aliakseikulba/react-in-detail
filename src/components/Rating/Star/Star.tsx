import React from 'react';
import {RatingValueType} from '../Rating';

type StarPropsType = {
  selected: boolean
  onClick: (value: RatingValueType) => void
  value: RatingValueType
}

function Star({selected, onClick, value}: StarPropsType) {

  const changeRatingValue = () => {
    onClick(value);
  }

  return (
    <>
      <span onClick={changeRatingValue}>{selected ? <b>star </b> : 'star '}</span>
    </>
  );
}

export default Star;