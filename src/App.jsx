import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import SkillTracks from './components/SkillTracks';
import LiveChallenges from './components/LiveChallenges';
import UserProgress from './components/UserProgress';
import Leaderboard from './components/Leaderboard';
import MiniGames from './components/MiniGames';
import WorkshopsMentors from './components/WorkshopsMentors';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import TeacherLoginModal from './components/TeacherLoginModal';
import HistoryModal from './components/HistoryModal';
import ClassroomQuizHost from './components/ClassroomQuizHost';
import InstallPwaBanner from './components/InstallPwaBanner';
import { INITIAL_USER_STATS, INITIAL_LEADERBOARD, SAMPLE_TEACHER_QUIZZES } from './data/mockData';

export default function App() {
  const [userStats, setUserStats] = useState(INITIAL_USER_STATS);
  const [leaderboardData, setLeaderboardData] = useState(INITIAL_LEADERBOARD);
  const [isTeacherModalOpen, setIsTeacherModalOpen] = useState(false);
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [historySessions, setHistorySessions] = useState([]);
  const [activeSession, setActiveSession] = useState(null);
  const [currentView, setCurrentView] = useState('landing');

  useEffect(() => {
    fetch('/api/leaderboard')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data && data.data.length > 0) {
          setLeaderboardData([...data.data, ...INITIAL_LEADERBOARD].slice(0, 10));
        }
      })
      .catch(err => console.log('Using local mock data for leaderboard'));
  }, []);

  const handleLaunchClassroomSession = (sessionConfig) => {
    setActiveSession(sessionConfig);
    setIsTeacherModalOpen(false);
    setCurrentView('game');
  };

  const handleEndSession = () => {
    if (activeSession && activeSession.students) {
      const sorted = [...activeSession.students].sort((a, b) => b.score - a.score);
      const newHistoryEntry = {
        id: `h-${Date.now()}`,
        date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ', Today',
        teacherName: activeSession.teacherName,
        quizTitle: activeSession.quiz?.title || 'Classroom Quiz',
        totalStudents: activeSession.students.length,
        winner: sorted[0] || { name: 'Winner', score: 0 },
        runnerUp: sorted[1] || { name: 'Runner Up', score: 0 },
        thirdPlace: sorted[2] || { name: '3rd Place', score: 0 }
      };

      setHistorySessions([newHistoryEntry, ...historySessions]);

      fetch('/api/sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          teacherName: activeSession.teacherName,
          quizTitle: activeSession.quiz?.title || 'Classroom Quiz',
          students: activeSession.students
        })
      }).catch(err => console.log('Backend sync skipped'));
    }
    setActiveSession(null);
    setCurrentView('landing');
  };

  const handleStartTrackQuiz = (track) => {
    handleLaunchClassroomSession({
      teacherName: track.quiz?.teacherName || `${track.title} Instructor`,
      quiz: track.quiz,
      students: [
        { name: userStats.userName, score: 0, correctAnswers: 0, streak: userStats.streak },
        { name: "Ananya Gupta (Class 7A)", score: 0, correctAnswers: 0, streak: 12 },
        { name: "Rohan Verma (Class 8C)", score: 0, correctAnswers: 0, streak: 10 }
      ]
    });
  };

  const handleStartDailyQuiz = (challenge) => {
    handleLaunchClassroomSession({
      teacherName: challenge.quiz?.teacherName || "Questly Bot",
      quiz: challenge.quiz,
      students: [
        { name: userStats.userName, score: 0, correctAnswers: 0, streak: userStats.streak },
        { name: "Rohan Verma (Class 8C)", score: 0, correctAnswers: 0, streak: 8 }
      ]
    });
  };

  const handleLaunchMiniGame = (game) => {
    handleLaunchClassroomSession({
      teacherName: game.quiz?.teacherName || "Arcade Bot",
      quiz: game.quiz,
      students: [
        { name: userStats.userName, score: 0, correctAnswers: 0, streak: userStats.streak },
        { name: "Diya Patel (Class 5B)", score: 0, correctAnswers: 0, streak: 15 }
      ]
    });
  };

  if (currentView === 'game' && activeSession) {
    return (
      <ClassroomQuizHost 
        sessionData={activeSession}
        onEndSession={handleEndSession}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#FDF6E3]">
      <Navbar 
        onOpenTeacherModal={() => setIsTeacherModalOpen(true)}
        onOpenHistoryModal={() => setIsHistoryModalOpen(true)}
      />

      <Hero 
        userStats={userStats}
        onStartTeacherMode={() => setIsTeacherModalOpen(true)}
      />

      <Marquee />

      <SkillTracks 
        onStartTrackQuiz={handleStartTrackQuiz}
      />

      <LiveChallenges 
        onStartQuiz={handleStartDailyQuiz}
      />

      <UserProgress 
        userStats={userStats}
      />

      <Leaderboard 
        leaderboardData={leaderboardData}
      />

      <MiniGames 
        onLaunchMiniGame={handleLaunchMiniGame}
      />

      <WorkshopsMentors />

      <Testimonials />

      <Footer 
        onOpenTeacherModal={() => setIsTeacherModalOpen(true)}
      />

      <TeacherLoginModal 
        isOpen={isTeacherModalOpen}
        onClose={() => setIsTeacherModalOpen(false)}
        onLaunchClassroomSession={handleLaunchClassroomSession}
      />

      <HistoryModal 
        isOpen={isHistoryModalOpen}
        onClose={() => setIsHistoryModalOpen(false)}
        historySessions={historySessions}
      />

      <InstallPwaBanner />
    </div>
  );
}
