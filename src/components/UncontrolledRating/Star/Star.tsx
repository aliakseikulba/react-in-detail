import React from 'react';

type StarPropsType = {
  selected: boolean
  changeValue: () => void
}

function Star({selected, changeValue}: StarPropsType) {
  return (
    <>
      {selected && <span onClick={changeValue}><b>star </b></span>}
      {!selected && <span onClick={changeValue}>star </span>}
    </>
  );
}

export default Star;