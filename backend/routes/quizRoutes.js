const express = require('express');
const { getAllQuizzes, getQuizById, submitQuiz,addQuiz} = require('../controllers/quizController');
const router = express.Router();

// Route to fetch all quizzes
router.get('/', getAllQuizzes);

// Route to fetch a quiz by ID
router.get('/:id', getQuizById);

// Route to submit answers and get the score
router.post('/submit', submitQuiz);

router.post('/add', addQuiz);

module.exports = router;
