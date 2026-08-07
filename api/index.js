import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectToDatabase, Quiz, Session, Leaderboard } from './db.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Middleware to ensure DB connection
app.use(async (req, res, next) => {
  try {
    await connectToDatabase();
  } catch (err) {
    console.error('Database connection error in middleware:', err);
  }
  next();
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// Get all quizzes
app.get('/api/quizzes', async (req, res) => {
  try {
    const quizzes = await Quiz.find().sort({ createdAt: -1 }).limit(20);
    res.json({ success: true, data: quizzes });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Create new quiz
app.post('/api/quizzes', async (req, res) => {
  try {
    const newQuiz = new Quiz(req.body);
    await newQuiz.save();
    res.json({ success: true, data: newQuiz });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Save completed classroom session & update leaderboard
app.post('/api/sessions', async (req, res) => {
  try {
    const { teacherName, quizTitle, students } = req.body;
    const session = new Session({
      teacherName,
      quizTitle,
      students,
      isCompleted: true
    });
    await session.save();

    // Upsert students into leaderboard
    for (const student of students) {
      if (student.name && student.score > 0) {
        await Leaderboard.findOneAndUpdate(
          { name: student.name },
          { 
            $inc: { xp: student.score },
            $set: { updatedAt: new Date() },
            $setOnInsert: { level: Math.floor(student.score / 200) + 1, streak: 1, badge: '⚡ Classroom Hero' }
          },
          { upsert: true, new: true }
        );
      }
    }

    res.json({ success: true, data: session });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Get Leaderboard
app.get('/api/leaderboard', async (req, res) => {
  try {
    const leaderboard = await Leaderboard.find().sort({ xp: -1 }).limit(10);
    res.json({ success: true, data: leaderboard });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Default export for Vercel Serverless
export default app;

// Listen for local server testing if run directly
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Questly API backend listening on port ${PORT}`);
  });
}
