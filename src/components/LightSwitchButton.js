import React, { useState } from 'react';


function LightSwitchButton(props) {
  // Catching the switchLight function as a prop from App.js now
  const { light, switchLight } = props;


  return (
    <button className="LightSwitchButton" onClick={switchLight}>
      {/* Short circuit conditional rendering */}
      {light === 'on' && <span className="on"><i>💡</i> I'm on!</span>} 
      {light === 'off' && <span className="off"><i>💡</i> I'm off!</span>}
    </button> 
  );
};

export default LightSwitchButton;
