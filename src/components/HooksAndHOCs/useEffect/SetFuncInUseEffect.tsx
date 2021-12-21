import React, {useEffect, useState} from 'react';

const SetFuncInUseEffect = () => {
    const [counter, setCounter] = useState<number>(0);
    const [test, setTest] = useState<number>(0);

    useEffect(() => {

      setInterval(() => {
        console.log('tick: ' + counter);
        setCounter(counter => counter + 1)
      }, 1000)

    }, [])

    return (
      <div>
        {/*<button onClick={() => {setTest(prevValue => prevValue + 1)}}>+ test</button>*/}
        test - {test}
        {/*<button onClick={() => {setCounter(prevValue => prevValue + 1)}}>+ counter</button>*/}
        counter - {counter}
      </div>
    );
  };

export {SetFuncInUseEffect};