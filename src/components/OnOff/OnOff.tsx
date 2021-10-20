import React, {useState} from 'react';

// type OnOffPropsType = {
//   on: boolean
// }

const OnOff = () => {
  console.log('new rendering');

  const [on, setOn] = useState(false);

  console.log('on', on);

  const onToggle = () => {
    setOn(!on);
  };

  const onStyle = {
    width: '30px',
    height: '20px',
    padding: '5px',
    border: '1px solid black',
    display: 'inline-block',
    backgroundColor: on ? 'grey' : 'white'
  };
  const offStyle = {
    width: '30px',
    height: '20px',
    padding: '5px',
    border: '1px solid black',
    display: 'inline-block',
    marginLeft: '3px',
    backgroundColor: !on ? 'grey' : 'white'
  };
  const indicator = {
    width: '10px',
    height: '10px',
    border: '1px solid black',
    borderRadius: '50%',
    display: 'inline-block',
    marginLeft: '5px',
    backgroundColor: on ? 'green' : 'red'
  };

  return (
    <div>
      <div onClick={() => onToggle()} style={onStyle}>On</div>
      <div onClick={() => onToggle()} style={offStyle}>Off</div>
      <div style={indicator}></div>
    </div>
  );
};

export default OnOff;