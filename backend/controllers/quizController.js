const Quiz = require('../models/Quiz');

// Get all quizzes
const getAllQuizzes = async (req, res, next) => {
    try {
        const quizzes = await Quiz.find(); // Fetch all quizzes
        res.status(200).json(quizzes); // Send quizzes as the response
    } catch (error) {
        next(error); // Pass any errors to the error handler
    }
};

// Get quiz by ID
const getQuizById = async (req, res, next) => {
    try {
        const quiz = await Quiz.findById(req.params.id); // Find quiz by ID
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found' }); // Handle case where quiz doesn't exist
        }
        res.status(200).json(quiz); // Send the found quiz
    } catch (error) {
        next(error); // Pass any errors to the error handler
    }
};

// Submit quiz and calculate score
const submitQuiz = async (req, res, next) => {
    const { quizId, answers } = req.body;

    try {
        const quiz = await Quiz.findById(quizId);
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }

        // Calculate score
        let score = 0;
        quiz.questions.forEach((question, index) => {
            if (question.correctAnswer === answers[index]) {
                score++; // Increment score for each correct answer
            }
        });

        res.status(200).json({ score }); // Return the score
    } catch (error) {
        next(error);
    }
};

const addQuiz = async (req, res, next) => {
    try {
        const newQuiz = new Quiz(req.body);  
        const savedQuiz = await newQuiz.save();  
        res.status(201).json(savedQuiz);  
    } catch (error) {
        next(error);
    }
};



module.exports = {
    getAllQuizzes,
    getQuizById,
    submitQuiz,
    addQuiz
};
