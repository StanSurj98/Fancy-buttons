import React, { useState } from 'react';


function CounterButton(props) {
  // useState(startingVal) = 0
  const [clickAmt, setClickAmt] = useState(0);
  const clickHandler = () => {
    setClickAmt(clickAmt + 1);
  }

  return (
    <button className="CounterButton" onClick={clickHandler}>
      You clicked me {clickAmt} amount of times
    </button>
  );
};



export default CounterButton;
