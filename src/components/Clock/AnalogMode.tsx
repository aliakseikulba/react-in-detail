import React from 'react';
import s from './AnalogMode.module.css';

type AnalogModePropsType = {
  hours: string | number
  minutes: string | number
  seconds: string | number
}

const AnalogMode = ({hours, minutes, seconds}: AnalogModePropsType) => {

  const secondsStyle = {transform: `rotate(${Number(seconds)* 6}deg)`};
  const minutesStyle = {transform: `rotate(${Number(minutes) * 6}deg)`};
  const hoursStyle = {transform: `rotate(${Number(hours) * 30}deg)`};

  return (
    <div className={s.wrapper}>
      <div className={s.clock}>
        <div className={s.analogClock}>
          <div className={`${s.dial} ${s.seconds}`} style={secondsStyle} />
          <div className={`${s.dial} ${s.minutes}`} style={minutesStyle} />
          <div className={`${s.dial} ${s.hours}`} style={hoursStyle} />
        </div>
      </div>
    </div>
  );
};

export default AnalogMode;