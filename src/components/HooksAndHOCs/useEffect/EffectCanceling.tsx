import React, {useEffect, useState} from 'react';


//отменять эффект при addEventListener, setTimeOut, setInterval
//removeEventListener(), clearTimeOut(), clearInterval()

const EffectCanceling = () => {
  const [count, setCount] = useState(0);

  console.log('component render with ', count);

  const increase = () => {
    return setCount(count + 1);
  };

  useEffect(() => {
    console.log('useEffect occurred', count);

    return () => {
      console.log('useEffect reset', count);
    };
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
};

export {EffectCanceling};