import React, {useState} from 'react';
import s from './MySelect.module.css';


type MySelectPropsType = {
  value: string
  items: Array<string>
  callback: (value: string) => void
}

export const MySelect = ({value, items, callback}: MySelectPropsType) => {

  const [options, setOptions] = useState(false);
  const showOptions = () => {
    setOptions(!options);
  };

  const onClickHandler = (value: string) => {
    callback(value);
    showOptions();
  };

  const arrowClassName = options ? s.selectArrowUp : s.selectArrowDown;

  return (
    <div className={s.wrapper}>
      <div className={s.selectArea} onClick={showOptions}>{value}
        <img className={arrowClassName} src='https://cdn-icons-png.flaticon.com/512/25/25623.png'/></div>
      <div className={s.selectOptions}>
        {options && items.map((i, index) => {
          return <div key={index}
                      className={s.selectItem}
                      onClick={() => {onClickHandler(i)}}>{i}</div>;
        })}
      </div>
    </div>
  );
};
