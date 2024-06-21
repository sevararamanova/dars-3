import React, { useState, useEffect } from 'react';
import './Counter.css';
import alertSound from '../../audio/audio.wav'; // Import your audio file

const Counter = () => {
  const [count, setCount] = useState(0);
  const [audio] = useState(new Audio(alertSound)); // Create an audio object
  const [playing, setPlaying] = useState(false); // State to track if audio is playing

  useEffect(() => {
    if (count === 33 || count === 66 || count === 99) {
      playAudio();
    }
  }, [count]);

  const playAudio = () => {
    if (!playing) {
      audio.play();
      setPlaying(true);
    }
  };

  const increment = () => {
    setCount((prevCount) => (prevCount + 1) % 100);
    setPlaying(false); // Reset playing state when count increments
  };

  const reset = () => {
    setCount(0);
    setPlaying(false); // Reset playing state when count resets
  };

  return (
    <div className="tasbih">
      <div className="screen">
        <div className="count-display">{count}</div>
      </div>
      <div className="button-container">
        <button onClick={increment} className="button count-button">
          Count
        </button>
        <button onClick={reset} className="button reset-button">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;