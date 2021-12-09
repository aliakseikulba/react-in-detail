import React, {useState} from 'react';


export const MessagesCounter = (props: { messageCounter: number }) => {
  console.log('MessagesCounter rerender');

  return <div>{props.messageCounter}</div>;
};

export const Users = (props: { users: Array<string> }) => {
  console.log('Users rerender');

  return <>
    {props.users.map((u, i) => <div key={i}>{u}</div>)}
  </>;
};


export const ExampleReactMemo = () => {

  const [counter, setCounter] = useState(5);
  const [users,setUsers] = useState(['Nik', 'Mike', 'Stiu', 'Angela'])

  return (
    <div>
      <button onClick={() => {setCounter(counter + 1)}}>+</button>
      <MessagesCounter messageCounter={counter}/>
      <Users users={users}/>
    </div>
  );
};