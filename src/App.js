// CSS Files
import './App.css';
// Functional Components
import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import LightSwitchButton from './components/LightSwitchButton';
import TextRepeaterButton from './components/TextRepeaterButton';
// Hooks
import { useState } from 'react';




function App() {
  // Lifted state up from <LightSwitchButton /> component to here
  const [light, setLight] = useState('off');
  // Conditionally adding a className="dark" if light is "off"
  const dark = (light === "off") ? 'dark' : '';
  // Good idea to keep logic that changes state near the declaration & NOT in child comps.
  const switchLight = () => {
    setLight( (light === 'on') ? 'off' : 'on');
  }



  return (
    <div className={`App ${dark}`} >
      <h1>Fancy Buttons!</h1>
      <section>
        <AngryButton /> 
        <CounterButton />
        {/* Now we pass down the working function instead of each state */}
        <LightSwitchButton light={light} switchLight={switchLight}/>
        <TextRepeaterButton />
      </section>
    </div>
  );
}

export default App;
