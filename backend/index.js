// app.js

const express = require('express');
const app = express();
const dotenv = require('dotenv');
const quizRoutes = require('./routes/quizRoutes');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

// Middleware
app.use(express.json());  // To parse JSON request bodies

// Quiz routes
app.use('/api/quizzes', quizRoutes);

// Error handling middleware (for catching errors)
const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
