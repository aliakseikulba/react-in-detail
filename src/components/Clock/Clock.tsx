import React, {useEffect, useState} from 'react';
import AnalogMode from './AnalogMode';

const Clock = () => {

  const [date, setDate] = useState(new Date());

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

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
      <h1>
        {hours}:{minutes}:{seconds}
      </h1>
      <AnalogMode hours={hours} minutes={minutes} seconds={seconds}/>
    </>
  );
};

export {Clock};