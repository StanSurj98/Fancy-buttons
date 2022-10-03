import React, { useState } from 'react';


function AngryButton(props) {
  // useState must be at top of component - returns array [set, setState] (getter and setter)
  const [anger, setAnger] = useState(0); // the setter func MUST have "set" in its name 

  // Creating a click event handler so we can just reference rather than in-line
  const clickHandler = () => {
    // resets anger to 0 
    if (anger > 1) setAnger(0);
    // else increments by 0.1, every click
    if (anger < 1) setAnger(anger + 0.1);
  }



  return (
    // Pass reference to clickHandler button, and then before rendering we have conditional
    <button style={{backgroundColor: `rgba(255,0,0,${anger})`}} className="AngryButton" onClick={clickHandler} >
      {/* Conditional rendering using short-circuiting the anger value */}
      {anger < 1 && <span>Don't click me too much! </span> }
      {anger > 1 && <span>Rawr!</span> }
    </button>
  );
};

export default AngryButton;