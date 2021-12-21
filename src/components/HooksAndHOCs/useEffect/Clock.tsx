import React, {useEffect, useState} from 'react';

const Clock = () => {

  const [date, setDate] = useState(new Date());
  console.log('render');

  const hours = date.getHours().toString().length < 2 ? `0${date.getHours()}` : date.getHours();
  const minutes = date.getMinutes().toString().length < 2 ? `0${date.getMinutes()}` : date.getMinutes();
  const seconds = date.getSeconds().toString().length < 2 ? `0${date.getSeconds()}` : date.getSeconds();

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