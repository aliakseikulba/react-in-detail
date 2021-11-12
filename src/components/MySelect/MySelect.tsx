import React from 'react';
import s from './MySelect.module.css'

type MySelectPropsType = {
  value: string
}

export const MySelect = ({value}: MySelectPropsType) => {

  return (
    <div className={s.wrapper}>
      <div className={s.selectArea}>{value}</div>
    </div>
  );
};
