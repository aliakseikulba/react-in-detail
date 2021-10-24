import React from 'react';

type StarPropsType = {
  selected: boolean
}

function Star(props: StarPropsType) {
  return (
    <>
      {props.selected && <span><b>star </b></span>}
      {!props.selected && <span>star </span>}
    </>
  );
}

export default Star;