import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css'
import BackButton from './Backbutton';

const AdminDashboard = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [newFlashcard, setNewFlashcard] = useState({ question: '', answer: '' });
  const [selectedFlashcard, setSelectedFlashcard] = useState(null); // State for selected flashcard

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/flashcards`)
      .then(res => setFlashcards(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (selectedFlashcard) {
      // Update selected flashcard state
      setSelectedFlashcard({ ...selectedFlashcard, [name]: value });
    } else {
      // Update new flashcard state
      setNewFlashcard({ ...newFlashcard, [name]: value });
    }
  };

  const addFlashcard = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/flashcards`, newFlashcard);
      setFlashcards([...flashcards, response.data]); // Add newly created flashcard
      setNewFlashcard({ question: '', answer: '' }); // Reset new flashcard state
    } catch (err) {
      console.error(err);
    }
  };

  const deleteFlashcard = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/flashcards/${id}`);
      setFlashcards(flashcards.filter(fc => fc.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = async () => {
    if (!selectedFlashcard) return; // Do nothing if no flashcard selected

    try {
      const response = await axios.put(`${import.meta.env.VITE_API_URL}/api/flashcards/${selectedFlashcard.id}`, selectedFlashcard);
      const updatedFlashcard = response.data;
      setFlashcards(flashcards.map(fc => (fc.id === updatedFlashcard.id ? updatedFlashcard : fc)));
      setSelectedFlashcard(null); // Clear selected flashcard state
    } catch (err) {
      console.error(err);
    }
  };

  const handleSelectFlashcard = (flashcard) => {
    setSelectedFlashcard(flashcard); // Set selected flashcard state
    setNewFlashcard({ question: flashcard.question, answer: flashcard.answer }); // Update new flashcard state with selected values
  };

  return (
    
      <>
      <div className="back">
      <BackButton/>
      </div>
      
      <div className="admin-dashboard">
        <h2>Admin Dashboard</h2>
        <div className="flashcard-form">
          <input type="text" name="question" placeholder="Question" value={selectedFlashcard ? selectedFlashcard.question : newFlashcard.question} onChange={handleInputChange} />
          <input type="text" name="answer" placeholder="Answer" value={selectedFlashcard ? selectedFlashcard.answer : newFlashcard.answer} onChange={handleInputChange} />
          {selectedFlashcard ? (
            <button onClick={handleUpdate}>Update</button>
          ) : (
            <button onClick={addFlashcard}>Add Flashcard</button>
          )}
        </div>
        <table>
          <thead>
            <tr>
              <th>Question</th>
              <th>Answer</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {flashcards.map(fc => (
              <tr key={fc.id}>
                <td>{fc.question}</td>
                <td>{fc.answer}</td>
                <td>
                  <button onClick={() => handleSelectFlashcard(fc)}>Edit</button>
                  <button onClick={() => deleteFlashcard(fc.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminDashboard;
