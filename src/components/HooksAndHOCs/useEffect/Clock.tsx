import React, {useEffect, useState} from 'react';

const Clock = () => {

  const [date, setDate] = useState(new Date());
  console.log('render');

  const doubleNumberTime = (time: number) => time.toString().length < 2 ? `0${time}` : time;
  const hours = doubleNumberTime(date.getHours());
  const minutes = doubleNumberTime(date.getMinutes());
  const seconds = doubleNumberTime(date.getSeconds());

  useEffect(() => {
    setTimeout(() => {
      setDate(new Date());
    }, 1000)
  },[date])

  // useEffect(() => {
  //   console.log('useEffect');
  //   setInterval(() => {
  //     setDate(() => new Date());
  //   }, 1000)
  // },[])

  return (
    <h1>
      {hours}:{minutes}:{seconds}
    </h1>
  );
};

export {Clock};