import React, { useState } from 'react';


function LightSwitchButton(props) {
  // We lifted the state up to parent App.js and it passed it down here as a prop
  const {light, setLight} = props;

  // Since setLight is available from App.js still, we can STILL use this event handler here
  const clickHandler = () => {
    setLight( light === 'on' ? 'off' : 'on');
  }

  return (
    <button className="LightSwitchButton" onClick={clickHandler}>
      {/* Short circuit conditional rendering */}
      {light === 'on' && <span className="on"><i>💡</i> I'm on!</span>} 
      {light === 'off' && <span className="off"><i>💡</i> I'm off!</span>}
    </button> 
  );
};

export default LightSwitchButton;
