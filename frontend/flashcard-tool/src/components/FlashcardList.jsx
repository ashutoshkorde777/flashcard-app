import React, { useEffect, useState } from 'react';
import Flashcard from './Flashcard';
import axios from 'axios';
import './FlashcardList.css';
import { Link } from 'react-router-dom';

const FlashcardList = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/flashcards`)
      .then(res => setFlashcards(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      <h1>Flashcards Application</h1>
      <div className="header">
        <Link to="/admin">Admin Dashboard</Link>
      </div>
      {flashcards.length > 0 && (
        <Flashcard flashcard={flashcards[currentIndex]} />
      )}
      <div className="buttons">
        <button onClick={handlePrevious} disabled={currentIndex === 0}>Previous</button>
        <button onClick={handleNext} disabled={currentIndex === flashcards.length - 1}>Next</button>
      </div>
    </div>
  );
};

export default FlashcardList;
