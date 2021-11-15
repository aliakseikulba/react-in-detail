import React from 'react';

type ItemType = {
  title: string
  value: any
}

type SelectPropsType = {
  selectValue: any
  onChange: (value: any) => void
  items: Array<ItemType>
}

export const Select = ({selectValue, onChange, items}: SelectPropsType) => {

  const selectedValue = items.find(i => i.value === selectValue);

  return (
    <div>
      <h3>{selectedValue && selectedValue.title}</h3>
      {items.map(i => <div key={i.value}>{i.title}</div>)}
    </div>
  );
};

