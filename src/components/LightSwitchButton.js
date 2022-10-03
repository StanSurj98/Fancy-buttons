import React, { useState } from 'react';


function LightSwitchButton(props) {
  const [light, setLight] = useState('off');

  const clickHandler = () => {
    setLight( light === 'on' ? 'off' : 'on');
  }

  return (
    <button className="LightSwitchButton" onClick={clickHandler}>
      {/* Short circuit conditional rendering */}
      {light === 'on' ?? <span className="on"><i>💡</i> I'm on!</span>} 
      {light === 'off' ?? <span className="off"><i>💡</i> I'm off!</span>}
    </button> 
  );
};

export default LightSwitchButton;
