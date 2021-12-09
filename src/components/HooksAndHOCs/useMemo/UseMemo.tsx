import React, {useMemo, useState} from 'react';

const UseMemoExample = () => {

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  let resA;
  let resB = 1;

  resA = useMemo(() => {
    let tempResA = 1;
    for (let i = 1; i <= a; i++) {
      let fake = 0;
      while (fake < 10000000) {
        fake++;
        const x = Math.random();
      }
      tempResA *= i;
    }
    return tempResA;
  }, [a])



  for (let i = 1; i <= b; i++) {
    resB *= i;
  }

  return (
    <div>
      <input value={a} onChange={(e) => {
        setA(+e.currentTarget.value);
      }}/>
      <input value={b} onChange={(e) => {
        setB(+e.currentTarget.value);
      }}/>
      <div>Result for a: {resA}</div>
      <div>Result for b: {resB}</div>
    </div>
  );
};

export {UseMemoExample};