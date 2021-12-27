import React from 'react';
import './App.css';
import {HelpsToReactMemo} from './components/HooksAndHOCs/useMemo/UseMemo';
import {FunctionalUseState} from './components/HooksAndHOCs/useState/FunctionalUseState';
import {UseEffect} from './components/HooksAndHOCs/useEffect/UseEffect';
import {SetFuncInUseEffect} from './components/HooksAndHOCs/useEffect/SetFuncInUseEffect';
import {Clock} from './components/Clock/Clock';


function App() {
  // //Rating state
  // const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  // //Accordion state
  // const [collapsed, setCollapsed] = useState<boolean>(false);
  // //OnOff state
  // const [on, setOn] = useState(false);
  // //MySelect state
  // const [selectValue, setSelectValue] = useState<number>(0);
  // const chooseValue = (value: number) => {
  //   setSelectValue(value);
  // };


  return (
    <div>
      <Clock/>
      {/*<SetFuncInUseEffect/>*/}
      {/*<UseEffect/>*/}
      {/*<FunctionalUseState/>*/}
      {/*<HelpsToReactMemo/>*/}
      {/*<UseMemoExample1/>*/}
      {/*<ExampleReactMemo/>*/}
      {/*<UncontrolledAccordion title='UncontrolledAccordion'/>*/}
      {/*<Accordion*/}
      {/*  title="Users"*/}
      {/*  changeStatus={setCollapsed}*/}
      {/*  status={collapsed}*/}
      {/*  items={[*/}
      {/*    {title: 'user1', value: 1},*/}
      {/*    {title: 'user2', value: 2},*/}
      {/*    {title: 'user3', value: 3},*/}
      {/*    {title: 'user4', value: 4},*/}
      {/*    {title: 'user5', value: 5},*/}
      {/*  ]}*/}
      {/*  callBack={(value) => {*/}
      {/*    console.log(`user with id ${value} was called`);*/}
      {/*  }}/>*/}
      {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
      {/*<OnOff on={on} setOn={setOn}/>*/}
      {/*<MySelect value={selectValue}*/}
      {/*          items={[*/}
      {/*            {value: 1, title: 'One'},*/}
      {/*            {value: 2, title: 'Two'},*/}
      {/*            {value: 3, title: 'Three'},*/}
      {/*            {value: 4, title: 'Four'},*/}
      {/*            {value: 5, title: 'Five'}]}*/}
      {/*          callback={chooseValue}/>*/}
    </div>
  );
}

export default App;
