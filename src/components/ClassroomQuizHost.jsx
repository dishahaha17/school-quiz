import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, Crown, CheckCircle2, RotateCcw, Flame } from 'lucide-react';

export default function ClassroomQuizHost({ sessionData, onEndSession }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [students, setStudents] = useState(sessionData.students || []);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
  const [showPodium, setShowPodium] = useState(false);

  const questions = sessionData.quiz?.questions || [];
  const currentQ = questions[currentQuestionIndex];

  useEffect(() => {
    if (showPodium) {
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  }, [showPodium]);

  const handleToggleStudentCorrect = (studentIndex) => {
    const updated = [...students];
    const target = updated[studentIndex];
    target.score += 100;
    target.correctAnswers += 1;
    target.streak += 1;
    setStudents(updated);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setIsQuestionAnswered(false);
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowPodium(true);
    }
  };

  const sortedStudents = [...students].sort((a, b) => b.score - a.score);

  return (
    <div className="min-vh-100 bg-cream py-4 px-3">
      <div className="container" style={{ maxWidth: '1100px' }}>
        
        {/* Top Header Card */}
        <div className="nb-card bg-dark text-white p-3 p-md-4 mb-4 d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3">
          <div className="d-flex align-items-center gap-3">
            <div 
              className="rounded-4 bg-coral border border-2 border-white d-flex align-items-center justify-center font-heading fw-bold fs-3"
              style={{ width: '48px', height: '48px' }}
            >
              🎮
            </div>
            <div>
              <div className="d-flex align-items-center gap-2 mb-1">
                <span className="nb-pill bg-mint text-dark py-0 px-2" style={{ fontSize: '9px' }}>
                  ● LIVE CLASSROOM ARENA
                </span>
                <small className="fw-bold text-light opacity-75">
                  Host: {sessionData.teacherName}
                </small>
              </div>
              <h3 className="font-heading fs-4 fw-bold text-white m-0">
                {sessionData.quiz?.title}
              </h3>
            </div>
          </div>

          <div className="d-flex align-items-center gap-2">
            {!showPodium && (
              <span className="nb-pill bg-amber text-dark py-1 px-3">
                Question {currentQuestionIndex + 1} of {questions.length}
              </span>
            )}
            <button 
              onClick={onEndSession}
              className="nb-button nb-button-coral py-2 px-3 fs-6"
            >
              Exit Arena
            </button>
          </div>
        </div>

        {!showPodium ? (
          /* ACTIVE GAME VIEW: Question Left, Student Tally Right */
          <div className="row g-4">
            
            {/* Left: Question & Options */}
            <div className="col-12 col-lg-7">
              <div className="nb-card bg-white p-4 p-md-5 space-y-4">
                <div className="nb-pill bg-purple text-white mb-2" style={{ fontSize: '10px' }}>
                  ★ QUESTION #{currentQuestionIndex + 1}
                </div>

                <h3 className="font-heading fs-3 fw-bold text-dark mb-4">
                  {currentQ?.questionText}
                </h3>

                <div className="space-y-3 mb-4">
                  {currentQ?.options?.map((option, idx) => {
                    const isCorrect = idx === currentQ.correctAnswerIndex;
                    const isSelected = selectedAnswer === idx;
                    let bgColor = '#FDF6E3';

                    if (isQuestionAnswered) {
                      if (isCorrect) bgColor = '#2FD9A0';
                      else if (isSelected) bgColor = '#F0506E';
                    }

                    return (
                      <div 
                        key={idx}
                        onClick={() => {
                          setSelectedAnswer(idx);
                          setIsQuestionAnswered(true);
                        }}
                        className="nb-card-static p-3 mb-3 cursor-pointer d-flex align-items-center justify-content-between gap-3 font-heading fw-bold fs-5"
                        style={{ backgroundColor: bgColor }}
                      >
                        <div className="d-flex align-items-center gap-3">
                          <span 
                            className="rounded-circle bg-white border border-2 border-dark text-dark d-flex align-items-center justify-center fw-bold fs-6"
                            style={{ width: '32px', height: '32px' }}
                          >
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span>{option}</span>
                        </div>
                        {isQuestionAnswered && isCorrect && (
                          <CheckCircle2 size={24} className="text-dark" />
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="pt-3 border-top border-3 border-dark d-flex align-items-center justify-content-between gap-2">
                  <button 
                    onClick={() => setIsQuestionAnswered(!isQuestionAnswered)}
                    className="nb-button nb-button-gold py-2 px-3 fs-6"
                  >
                    {isQuestionAnswered ? "Hide Answer" : "Reveal Answer"}
                  </button>

                  <button 
                    onClick={handleNextQuestion}
                    className="nb-button nb-button-dark py-2 px-4 fs-6"
                  >
                    {currentQuestionIndex + 1 === questions.length ? "Finish & Show Winners 🏆" : "Next Question ➔"}
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Teacher Answer Tally */}
            <div className="col-12 col-lg-5">
              <div className="nb-card bg-amber p-4 space-y-3">
                <div className="d-flex align-items-center justify-content-between border-bottom border-3 border-dark pb-2 mb-3">
                  <h5 className="font-heading fw-bold text-dark m-0 d-flex align-items-center gap-2">
                    <Trophy size={20} /> Student Answer Tally
                  </h5>
                  <span className="nb-pill bg-white text-dark py-0 px-2" style={{ fontSize: '9px' }}>
                    {students.length} Students
                  </span>
                </div>

                <p className="small fw-bold text-dark opacity-75 mb-3">
                  Click "+100 XP Correct" next to a student when they answer correctly!
                </p>

                <div className="space-y-2 overflow-y-auto" style={{ maxHeight: '360px' }}>
                  {students.map((student, sIdx) => (
                    <div 
                      key={sIdx}
                      className="nb-card-static bg-white p-2 mb-2 d-flex align-items-center justify-content-between gap-2"
                    >
                      <div className="d-flex align-items-center gap-2">
                        <img 
                          src={`https://api.dicebear.com/7.x/bottts/svg?seed=${student.name}`}
                          alt={student.name}
                          className="rounded-3 border border-dark bg-cream"
                          style={{ width: '36px', height: '36px' }}
                        />
                        <div>
                          <div className="font-heading fw-bold fs-6 text-dark">
                            {student.name}
                          </div>
                          <div className="small fw-bold text-secondary d-flex align-items-center gap-1" style={{ fontSize: '10px' }}>
                            <span>{student.score} XP</span> • <Flame size={12} className="text-danger fill-danger" /> {student.streak} streak
                          </div>
                        </div>
                      </div>

                      <button 
                        onClick={() => handleToggleStudentCorrect(sIdx)}
                        className="nb-button nb-button-mint py-1 px-2 fs-6"
                        style={{ fontSize: '11px' }}
                      >
                        +100 XP Correct ✓
                      </button>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        ) : (
          /* WINNER PODIUM VIEW */
          <div className="nb-card bg-purple text-white p-4 p-md-5 text-center space-y-4 mx-auto" style={{ maxWidth: '800px' }}>
            
            <div className="space-y-2">
              <div className="nb-pill bg-amber text-dark mx-auto mb-2 d-inline-flex">
                <Crown size={20} fill="#1A1A1A" />
                <span>★ CLASSROOM VICTORY PODIUM ★</span>
              </div>
              <h2 className="font-heading display-5 fw-bold text-white">
                Classroom Champions!
              </h2>
              <p className="fs-6 fw-bold text-white opacity-90">
                Congratulations to top scorers in {sessionData.quiz?.title}!
              </p>
            </div>

            {/* Top 3 Podium */}
            <div className="row align-items-end g-3 pt-4 mx-auto" style={{ maxWidth: '600px' }}>
              
              {/* 2nd Place */}
              {sortedStudents[1] && (
                <div className="col-4">
                  <div className="nb-card bg-mint text-dark p-3 text-center space-y-2">
                    <div className="rounded-circle bg-white border border-2 border-dark mx-auto d-flex align-items-center justify-content-center fw-bold fs-5" style={{ width: '40px', height: '40px' }}>
                      🥈
                    </div>
                    <h5 className="font-heading fw-bold text-truncate m-0">
                      {sortedStudents[1].name}
                    </h5>
                    <div className="nb-pill bg-white text-dark py-0 px-2 mx-auto" style={{ fontSize: '10px' }}>
                      {sortedStudents[1].score} XP
                    </div>
                    <div className="bg-white opacity-75 rounded-3 border border-2 border-dark font-heading fw-bold fs-3 py-3">
                      2nd
                    </div>
                  </div>
                </div>
              )}

              {/* 1st Place */}
              {sortedStudents[0] && (
                <div className="col-4">
                  <div className="nb-card bg-amber text-dark p-3 text-center space-y-2" style={{ transform: 'translateY(-16px)' }}>
                    <Crown size={32} className="text-dark fill-coral mx-auto" />
                    <div className="rounded-circle bg-white border border-3 border-dark mx-auto d-flex align-items-center justify-content-center font-heading fw-bold fs-3" style={{ width: '56px', height: '56px' }}>
                      👑
                    </div>
                    <h4 className="font-heading fw-bold text-truncate m-0">
                      {sortedStudents[0].name}
                    </h4>
                    <div className="nb-pill bg-coral text-white py-0 px-2 mx-auto" style={{ fontSize: '11px' }}>
                      {sortedStudents[0].score} XP
                    </div>
                    <div className="bg-white opacity-75 rounded-3 border border-3 border-dark font-heading fw-bold fs-1 py-4">
                      1st
                    </div>
                  </div>
                </div>
              )}

              {/* 3rd Place */}
              {sortedStudents[2] && (
                <div className="col-4">
                  <div className="nb-card bg-coral text-white p-3 text-center space-y-2">
                    <div className="rounded-circle bg-white border border-2 border-dark text-dark mx-auto d-flex align-items-center justify-content-center fw-bold fs-5" style={{ width: '40px', height: '40px' }}>
                      🥉
                    </div>
                    <h5 className="font-heading fw-bold text-truncate m-0">
                      {sortedStudents[2].name}
                    </h5>
                    <div className="nb-pill bg-white text-dark py-0 px-2 mx-auto" style={{ fontSize: '10px' }}>
                      {sortedStudents[2].score} XP
                    </div>
                    <div className="bg-white opacity-25 rounded-3 border border-2 border-white font-heading fw-bold fs-4 py-2">
                      3rd
                    </div>
                  </div>
                </div>
              )}

            </div>

            <div className="pt-4">
              <button 
                onClick={onEndSession}
                className="nb-button nb-button-dark py-3 px-5 fs-5"
              >
                <RotateCcw size={20} />
                Back to Questly Home
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
