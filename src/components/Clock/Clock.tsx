import React, {useEffect, useState} from 'react';
import AnalogMode from './AnalogMode';

const Clock = () => {

  const [date, setDate] = useState(new Date());

  const doubleNumberTime = (time: number) => time.toString().length < 2 ? `0${time}` : time;
  const hours = doubleNumberTime(date.getHours());
  const minutes = doubleNumberTime(date.getMinutes());
  const seconds = doubleNumberTime(date.getSeconds());

  // useEffect(() => {
  //   setTimeout(() => {
  //     setDate(new Date());
  //   }, 1000)
  // },[date])

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(() => new Date());
    }, 1000)

    return () => {
      clearInterval(intervalID);
    }
  },[])

  return (
    <>
      {/*<h1>*/}
      {/*  {hours}:{minutes}:{seconds}*/}
      {/*</h1>*/}
      <AnalogMode hours={hours} minutes={minutes} seconds={seconds}/>
    </>
  );
};

export {Clock};