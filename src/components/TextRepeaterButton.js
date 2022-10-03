import React, { useState } from 'react';


function TextRepeaterButton(props) {
  const [repetitions, setRepetitions] = useState(1);
  const text = [];
  for (let i = 0; i < repetitions; i++) {
    text.push(<span key={i}>I like this text </span>)
  }

  return (
    <button className="TextRepeaterButton">
      { text }
    </button>
  );
};

export default TextRepeaterButton;
