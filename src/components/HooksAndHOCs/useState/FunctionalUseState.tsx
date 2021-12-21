import React, {useState} from 'react';

const FunctionalUseState = () => {

  const [counter, setCounter] = useState<number>(0);

  const onClickHandler = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    setCounter(prevValue => prevValue + 1);
    setCounter(prevValue => prevValue + 1);
    setCounter(prevValue => prevValue + 1);
  }

  return (
    <div>
      <button onClick={onClickHandler}>+</button>{counter}
    </div>
  );
};

export {FunctionalUseState};