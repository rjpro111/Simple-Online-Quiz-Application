// models/Quiz.js

const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    text: { type: String, required: true }, // Make sure to use "text" instead of "question"
    choices: [{ type: String, required: true }], // Choices should be an array of strings
    correctAnswer: { type: String, required: true }, // Should be a string
});

const quizSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    questions: [questionSchema], // Array of questions
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
