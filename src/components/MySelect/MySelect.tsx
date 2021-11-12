import React, {useState} from 'react';
import s from './MySelect.module.css'

type MySelectPropsType = {
  value: string
}

export const MySelect = ({value}: MySelectPropsType) => {

  const [options, setOptions] = useState(false);
  const showOptions = () => {
    setOptions(!options);
  }

  return (
    <div className={s.wrapper}>
      <div className={s.selectArea} onClick={showOptions}>{value}</div>
      <div className={s.selectOptions}></div>
    </div>
  );
};
