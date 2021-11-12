import React, {useState} from 'react';
import s from './MySelect.module.css'

type MySelectPropsType = {
  value: string
  items: Array<string>
}

export const MySelect = ({value, items}: MySelectPropsType) => {

  const [options, setOptions] = useState(true);
  const showOptions = () => {
    setOptions(!options);
  }

  return (
    <div className={s.wrapper}>
      <div className={s.selectArea} onClick={showOptions}>{value}</div>
      <div className={s.selectOptions}>
        {options && items.map(i => {
          return <div className={s.selectItem}>{i}</div>
        })}
      </div>
    </div>
  );
};
