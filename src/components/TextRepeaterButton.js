import React, { useState } from 'react';


function TextRepeaterButton(props) {
  const [repetitions, setRepetitions] = useState(1);

  const text = [];
  for (let i = 0; i < repetitions; i++) {
    text.push(<span key={i}>I like this text </span>)
  }

  // click handler that should increment repetitions by 1
  const clickHandler = () => {
    setRepetitions(repetitions + 1);
  }

  return (
    <button className="TextRepeaterButton" onClick={clickHandler}>
      { text }
    </button>
  );
};

export default TextRepeaterButton;
