import React from 'react';
import s from './AnalogMode.module.css'

type AnalogModePropsType = {
  hours: string | number
  minutes: string | number
  seconds: string | number
}

const AnalogMode = ({hours, minutes, seconds}: AnalogModePropsType) => {

  const hr_rotation = 30 * Number(hours) + Number(minutes) / 2;
  const min_rotation = 6 * Number(minutes);
  const sec_rotation = 6 * Number(seconds);

  return (
    <div className={s.wrapper}>
      <div className={s.clock}>
        <div className={s.hour} style={{transform: `rotate(${hr_rotation}deg)`}}></div>
        <div className={s.minute} style={{transform: `rotate(${min_rotation}deg)`}}></div>
        <div className={s.second} style={{transform: `rotate(${sec_rotation}deg)`}}></div>
      </div>
    </div>
  );
};

export default AnalogMode;