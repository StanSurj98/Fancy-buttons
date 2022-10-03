import React, { useState } from 'react';


function CounterButton(props) {
  // useState(startingVal) = 0
  const [clickAmt, setClickAmt] = useState(0);

  return (
    <button className="CounterButton">
      You clicked me {clickAmt} amount of times
    </button>
  );
};



export default CounterButton;
