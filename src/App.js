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

  return (
    <div className="App">
      <h1>Fancy Buttons!</h1>
      <section>
        <AngryButton />
        <CounterButton />
        {/* Passing down the useState for LightSwitchButton as props */}
        <LightSwitchButton light={light} setLight={setLight} />
        <TextRepeaterButton />
      </section>
    </div>
  );
}

export default App;
