import React, {useState} from 'react';
import s from './MySelect.module.css';


type ItemType = {
  value: number
  title: string
}

type MySelectPropsType = {
  value: number
  items: Array<ItemType>
  callback: (value: number) => void
}

export const MySelect = ({value, items, callback}: MySelectPropsType) => {

  const [options, setOptions] = useState(false);
  const showOptions = () => {
    setOptions(!options);
  };

  const onClickHandler = (value: number) => {
    callback(value);
    showOptions();
  };

  const selectHeaderObj = items.find(i => i.value === value);

  const arrowClassName = options ? s.selectArrowUp : s.selectArrowDown;

  return (
    <div className={s.wrapper}>
      <div className={s.selectArea}
           onClick={showOptions}>
        {selectHeaderObj && selectHeaderObj.value > 0 ? selectHeaderObj.title : 'choose...'}
        <img className={arrowClassName} src="https://cdn-icons-png.flaticon.com/512/25/25623.png"/>
      </div>
      <div className={s.selectOptions}>
        {options && items.map((i, index) => {
          return <div key={index}
                      className={s.selectItem}
                      onClick={() => {
                        onClickHandler(i.value);
                      }}>
            {i.title}
          </div>;
        })}
      </div>
    </div>
  );
};
