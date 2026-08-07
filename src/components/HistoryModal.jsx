import React from 'react';
import { X, Calendar, UserCheck, Trophy, Crown, CheckCircle } from 'lucide-react';

export default function HistoryModal({ isOpen, onClose, historySessions }) {
  if (!isOpen) return null;

  // Pre-filled past teacher session history if backend is empty
  const defaultHistory = [
    {
      id: "h1",
      date: "Today, 11:30 AM",
      teacherName: "Mrs. Meenakshi Sundaram",
      quizTitle: "Class 6 Science: Plants & Photosynthesis",
      totalStudents: 6,
      winner: { name: "Aarav Sharma", score: 400 },
      runnerUp: { name: "Ananya Gupta", score: 300 },
      thirdPlace: { name: "Rohan Verma", score: 200 }
    },
    {
      id: "h2",
      date: "Yesterday, 2:15 PM",
      teacherName: "Mr. Sharma",
      quizTitle: "Class 7 Maths: Geometry & Fractions",
      totalStudents: 8,
      winner: { name: "Ananya Gupta", score: 500 },
      runnerUp: { name: "Rohan Verma", score: 400 },
      thirdPlace: { name: "Diya Patel", score: 300 }
    },
    {
      id: "h3",
      date: "05 Aug 2026, 10:00 AM",
      teacherName: "Ms. Anjali",
      quizTitle: "Class 5 & 6 English Grammar Battle",
      totalStudents: 5,
      winner: { name: "Diya Patel", score: 300 },
      runnerUp: { name: "Kabir Singh", score: 200 },
      thirdPlace: { name: "Sanya Malhotra", score: 100 }
    }
  ];

  const sessions = historySessions && historySessions.length > 0 ? historySessions : defaultHistory;

  return (
    <div 
      className="modal fade show d-block" 
      tabIndex="-1" 
      style={{ backgroundColor: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)', zIndex: 1050 }}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content nb-card bg-cream p-4 p-md-5 position-relative border-0">
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="btn rounded-circle bg-white border border-2 border-dark d-flex align-items-center justify-center p-2 position-absolute top-0 end-0 m-3"
            style={{ width: '36px', height: '36px' }}
          >
            <X size={20} className="text-dark" />
          </button>

          {/* Modal Header */}
          <div className="d-flex align-items-center gap-3 mb-4">
            <div 
              className="rounded-4 bg-amber border border-3 border-dark d-flex align-items-center justify-center fs-2"
              style={{ width: '48px', height: '48px', boxShadow: '3px 3px 0px #1A1A1A' }}
            >
              📜
            </div>
            <div>
              <span className="nb-pill bg-purple text-white py-0 px-2 mb-1" style={{ fontSize: '9px' }}>
                TEACHER SESSION RECORDS
              </span>
              <h3 className="font-heading fs-3 fw-bold text-dark m-0">
                Class Quiz Session History
              </h3>
            </div>
          </div>

          <p className="fw-semibold text-secondary mb-4">
            Record of all past classroom quiz sessions taken by teachers along with student winner results:
          </p>

          {/* Session Cards List */}
          <div className="space-y-3 overflow-y-auto" style={{ maxHeight: '380px' }}>
            {sessions.map((session, index) => (
              <div key={session.id || index} className="nb-card bg-white p-3 p-md-4 mb-3">
                
                {/* Session Header */}
                <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between border-bottom border-2 border-dark pb-2 mb-3 gap-2">
                  <div className="d-flex align-items-center gap-2">
                    <span className="badge bg-dark text-white rounded-pill px-2 py-1" style={{ fontSize: '10px' }}>
                      <Calendar size={12} className="me-1" />
                      {session.date || "Recent Session"}
                    </span>
                    <span className="badge bg-light text-dark border border-dark rounded-pill px-2 py-1" style={{ fontSize: '10px' }}>
                      <UserCheck size={12} className="me-1" />
                      Teacher: {session.teacherName || session.teacher}
                    </span>
                  </div>

                  <span className="nb-pill bg-mint text-dark py-0 px-2" style={{ fontSize: '9px' }}>
                    {session.totalStudents || (session.students ? session.students.length : 0)} Students Played
                  </span>
                </div>

                {/* Quiz Title */}
                <h5 className="font-heading fw-bold text-dark fs-5 mb-3">
                  {session.quizTitle || session.quiz?.title}
                </h5>

                {/* Winner Podium Summary */}
                <div className="row g-2 bg-cream p-3 rounded-3 border border-2 border-dark">
                  <div className="col-12 col-sm-4">
                    <div className="d-flex align-items-center gap-2">
                      <Crown size={18} className="text-warning fill-warning" />
                      <div>
                        <small className="fw-bold text-secondary d-block" style={{ fontSize: '9px' }}>1ST PLACE WINNER</small>
                        <span className="fw-bold text-dark font-heading fs-6">
                          {session.winner?.name || (session.students && session.students[0]?.name) || "Winner"}
                        </span>
                        <small className="fw-bold text-danger d-block">
                          {session.winner?.score || (session.students && session.students[0]?.score) || 0} XP
                        </small>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-4">
                    <div className="d-flex align-items-center gap-2">
                      <Trophy size={16} className="text-primary" />
                      <div>
                        <small className="fw-bold text-secondary d-block" style={{ fontSize: '9px' }}>2ND PLACE</small>
                        <span className="fw-bold text-dark font-heading fs-6">
                          {session.runnerUp?.name || (session.students && session.students[1]?.name) || "Runner Up"}
                        </span>
                        <small className="fw-bold text-dark d-block opacity-75">
                          {session.runnerUp?.score || (session.students && session.students[1]?.score) || 0} XP
                        </small>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-4">
                    <div className="d-flex align-items-center gap-2">
                      <CheckCircle size={16} className="text-purple" />
                      <div>
                        <small className="fw-bold text-secondary d-block" style={{ fontSize: '9px' }}>3RD PLACE</small>
                        <span className="fw-bold text-dark font-heading fs-6">
                          {session.thirdPlace?.name || (session.students && session.students[2]?.name) || "3rd Rank"}
                        </span>
                        <small className="fw-bold text-dark d-block opacity-75">
                          {session.thirdPlace?.score || (session.students && session.students[2]?.score) || 0} XP
                        </small>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
