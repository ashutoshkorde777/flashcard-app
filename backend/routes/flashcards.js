const express = require('express');
const router = express.Router();
const db = require('../db/db');

// Get all flashcards
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM flashcards');
    res.json(rows);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Add a new flashcard
router.post('/', async (req, res) => {
  const { question, answer } = req.body;
  try {
    await db.query('INSERT INTO flashcards (question, answer) VALUES (?, ?)', [question, answer]);
    res.status(201).send('Flashcard created');
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update a flashcard
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { question, answer } = req.body;
  try {
    await db.query('UPDATE flashcards SET question = ?, answer = ? WHERE id = ?', [question, answer, id]);
    res.send('Flashcard updated');
  } catch (err) {
    res.status(500).send(err);
  }
});

// Delete a flashcard
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM flashcards WHERE id = ?', [id]);
    res.send('Flashcard deleted');
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
