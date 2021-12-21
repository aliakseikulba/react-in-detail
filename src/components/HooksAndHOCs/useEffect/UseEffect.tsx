import React, {useEffect, useState} from 'react';

const UseEffect = () => {
  const [counter, setCounter] = useState<number>(0);
  const [test, setTest] = useState<number>(0);
  console.log('component render');

  useEffect(() => {
    console.log('useEffect every component render');
    document.title = counter.toString();
  })

  useEffect(() => {
    console.log('useEffect only first render');
    document.title = counter.toString();
  }, [])

  useEffect(() => {
    console.log('useEffect first render and after counter changing render');
    document.title = counter.toString();
  }, [counter])

  return (
    <div>
      <button onClick={() => {setTest(prevValue => prevValue + 1)}}>+ test</button>
      {test}
      <button onClick={() => {setCounter(prevValue => prevValue + 1)}}>+ counter</button>
      {counter}
    </div>
  );
};

export {UseEffect};