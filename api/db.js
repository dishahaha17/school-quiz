import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://admin:Z9xiRhn7NIZDLaBb@cluster0.zbsfnvt.mongodb.net/questly?retryWrites=true&w=majority&appName=Cluster0";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log('Connected to MongoDB Atlas successfully!');
      return mongoose;
    }).catch(err => {
      console.warn('MongoDB Atlas Connection Warning (fallback local mode ready):', err.message);
      return null;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    return null;
  }

  return cached.conn;
}

// Schemas
const QuizSchema = new mongoose.Schema({
  title: String,
  category: String,
  teacherName: String,
  questions: [{
    questionText: String,
    options: [String],
    correctAnswerIndex: Number,
    points: { type: Number, default: 100 }
  }],
  createdAt: { type: Date, default: Date.now }
});

const SessionSchema = new mongoose.Schema({
  teacherName: String,
  quizTitle: String,
  students: [{
    name: String,
    score: { type: Number, default: 0 },
    correctAnswers: { type: Number, default: 0 },
    streak: { type: Number, default: 0 }
  }],
  isCompleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const LeaderboardSchema = new mongoose.Schema({
  name: String,
  xp: Number,
  level: Number,
  streak: Number,
  badge: String,
  isUser: { type: Boolean, default: false },
  updatedAt: { type: Date, default: Date.now }
});

export const Quiz = mongoose.models.Quiz || mongoose.model('Quiz', QuizSchema);
export const Session = mongoose.models.Session || mongoose.model('Session', SessionSchema);
export const Leaderboard = mongoose.models.Leaderboard || mongoose.model('Leaderboard', LeaderboardSchema);
