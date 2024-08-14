import React, { useState, useEffect } from 'react';
import './Flashcard.css';

const Flashcard = ({ flashcard }) => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    // Reset flipped state to false when the component mounts or receives new props
    setFlipped(false);
  }, [flashcard]);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="flashcard" onClick={handleClick}>
      <div className={`flashcard-inner ${flipped ? 'flipped' : ''}`}>
        <div className="flashcard-front">
          <p>{flashcard.question}</p>
        </div>
        <div className="flashcard-back">
          <p>{flashcard.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
