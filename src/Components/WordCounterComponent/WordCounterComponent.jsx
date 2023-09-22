import React, { useRef } from 'react';
import Clipboard from 'react-copy-to-clipboard';
import './WordCounterComponent.css';

const WordCounterComponent = () => {
  const textareaRef = useRef(null);


  const handlePaste = () => {
    navigator.clipboard.readText();
    navigator.clipboard.addEventListener('paste', (event) => {
      const text = event.clipboardData.getData('text');
      textareaRef.current.value += text;
    });
  };

  return (
    <div>
      <textarea
        placeholder="text area"
      />
      <button onClick={handlePaste}>Paste</button>
    </div>
  );
};

export default WordCounterComponent;
