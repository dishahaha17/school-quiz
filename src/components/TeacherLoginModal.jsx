import React, { useState } from 'react';
import { Sparkles, X } from 'lucide-react';
import { SAMPLE_TEACHER_QUIZZES } from '../data/mockData';

export default function TeacherLoginModal({ isOpen, onClose, onLaunchClassroomSession }) {
  const [teacherName, setTeacherName] = useState('Mrs. Meenakshi Sundaram');
  const [selectedQuiz, setSelectedQuiz] = useState(SAMPLE_TEACHER_QUIZZES[0]);
  const [studentInput, setStudentInput] = useState('Aarav, Ananya, Rohan, Diya, Kabir, Sanya');
  const [questionCount, setQuestionCount] = useState(5); // New feature: Teacher question count selector
  const [customTitle, setCustomTitle] = useState('');
  const [customQuestionText, setCustomQuestionText] = useState('');
  const [customOptions, setCustomOptions] = useState(['', '', '', '']);
  const [correctIndex, setCorrectIndex] = useState(0);
  const [quizList, setQuizList] = useState(SAMPLE_TEACHER_QUIZZES);
  const [activeTab, setActiveTab] = useState('preset');

  if (!isOpen) return null;

  const handleAddCustomQuiz = (e) => {
    e.preventDefault();
    if (!customTitle || !customQuestionText) return;

    const newQ = {
      id: `custom-${Date.now()}`,
      title: customTitle,
      category: 'Classroom',
      teacherName: teacherName || 'Teacher',
      questions: [
        {
          questionText: customQuestionText,
          options: customOptions.filter(o => o.trim() !== ''),
          correctAnswerIndex: correctIndex
        }
      ]
    };

    setQuizList([newQ, ...quizList]);
    setSelectedQuiz(newQ);
    setActiveTab('preset');
    setCustomTitle('');
    setCustomQuestionText('');
    setCustomOptions(['', '', '', '']);
  };

  const handleStartGame = () => {
    const studentNames = studentInput
      .split(',')
      .map(s => s.trim())
      .filter(s => s.length > 0);

    if (studentNames.length === 0) {
      alert('Please enter at least 1 student name!');
      return;
    }

    // Limit questions to teacher's selected count
    const finalQuiz = {
      ...selectedQuiz,
      questions: selectedQuiz.questions.slice(0, Number(questionCount))
    };

    onLaunchClassroomSession({
      teacherName: teacherName || 'Teacher',
      quiz: finalQuiz,
      students: studentNames.map(name => ({
        name,
        score: 0,
        correctAnswers: 0,
        streak: 0
      }))
    });
  };

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
              className="rounded-4 bg-mint border border-3 border-dark d-flex align-items-center justify-center fs-2"
              style={{ width: '48px', height: '48px', boxShadow: '3px 3px 0px #1A1A1A' }}
            >
              🎓
            </div>
            <div>
              <span className="nb-pill bg-amber text-dark py-0 px-2 mb-1" style={{ fontSize: '9px' }}>
                TEACHER CLASSROOM CONTROL
              </span>
              <h3 className="font-heading fs-3 fw-bold text-dark m-0">
                Class 5th-8th Quiz Host Arena
              </h3>
            </div>
          </div>

          {/* Form Body */}
          <div className="space-y-4">
            
            <div className="row g-3 mb-3">
              {/* Teacher Name */}
              <div className="col-12 col-md-7">
                <label className="form-label small font-heading text-uppercase fw-bold text-dark mb-1">
                  Teacher Name:
                </label>
                <input 
                  type="text" 
                  value={teacherName} 
                  onChange={(e) => setTeacherName(e.target.value)}
                  className="form-control rounded-3 border border-3 border-dark bg-white font-bold p-3"
                  style={{ boxShadow: '3px 3px 0px #1A1A1A' }}
                  placeholder="e.g. Mrs. Meenakshi Sundaram / Mr. Sharma"
                />
              </div>

              {/* Number of Questions Selector */}
              <div className="col-12 col-md-5">
                <label className="form-label small font-heading text-uppercase fw-bold text-dark mb-1">
                  Select No. of Questions:
                </label>
                <select 
                  value={questionCount}
                  onChange={(e) => setQuestionCount(Number(e.target.value))}
                  className="form-select rounded-3 border border-3 border-dark bg-white font-bold p-3"
                  style={{ boxShadow: '3px 3px 0px #1A1A1A' }}
                >
                  <option value={3}>3 Questions (Express Round)</option>
                  <option value={5}>5 Questions (Standard Battle)</option>
                  <option value={10}>10 Questions (Full Marathon)</option>
                </select>
              </div>
            </div>

            {/* Student Roster Input */}
            <div className="mb-3">
              <label className="form-label small font-heading text-uppercase fw-bold text-dark mb-1">
                Enter Class Student Names (Comma Separated):
              </label>
              <textarea 
                rows={2}
                value={studentInput} 
                onChange={(e) => setStudentInput(e.target.value)}
                className="form-control rounded-3 border border-3 border-dark bg-white font-bold p-3"
                style={{ boxShadow: '3px 3px 0px #1A1A1A' }}
                placeholder="Aarav, Ananya, Rohan, Diya..."
              />
              <small className="fw-bold text-secondary mt-1 d-block">
                💡 Tip: Add student names for Class 5th, 6th, 7th or 8th.
              </small>
            </div>

            {/* Quiz Selection Tabs */}
            <div className="mb-4">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <label className="form-label small font-heading text-uppercase fw-bold text-dark m-0">
                  Select Subject Quiz or Add Custom Question:
                </label>
                <div className="d-flex gap-2">
                  <button 
                    onClick={() => setActiveTab('preset')}
                    className={`nb-pill ${activeTab === 'preset' ? 'bg-dark text-white' : 'bg-white text-dark'}`}
                    style={{ fontSize: '10px' }}
                  >
                    Class Presets ({quizList.length})
                  </button>
                  <button 
                    onClick={() => setActiveTab('create')}
                    className={`nb-pill ${activeTab === 'create' ? 'bg-coral text-white' : 'bg-white text-dark'}`}
                    style={{ fontSize: '10px' }}
                  >
                    + Add Question
                  </button>
                </div>
              </div>

              {activeTab === 'preset' ? (
                <div className="row g-2 overflow-y-auto" style={{ maxHeight: '180px' }}>
                  {quizList.map((q) => (
                    <div key={q.id} className="col-12 col-sm-6">
                      <div 
                        onClick={() => setSelectedQuiz(q)}
                        className={`nb-card p-3 cursor-pointer ${
                          selectedQuiz.id === q.id 
                            ? 'bg-amber border border-3 border-dark' 
                            : 'bg-white'
                        }`}
                      >
                        <div className="d-flex align-items-center justify-content-between mb-1">
                          <span className="nb-pill bg-white text-dark py-0 px-2" style={{ fontSize: '9px' }}>
                            {q.category}
                          </span>
                          <span className="small font-heading fw-bold text-dark">
                            {q.questions.length} Available Qs
                          </span>
                        </div>
                        <h5 className="font-heading fw-bold text-dark fs-6 text-truncate m-0">
                          {q.title}
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <form onSubmit={handleAddCustomQuiz} className="nb-card bg-white p-3 space-y-2">
                  <input 
                    type="text"
                    placeholder="Quiz Title (e.g. Class 6 History Quiz)"
                    value={customTitle}
                    onChange={(e) => setCustomTitle(e.target.value)}
                    className="form-control form-control-sm border border-2 border-dark font-bold mb-2"
                  />
                  <input 
                    type="text"
                    placeholder="Question (e.g. What is the boiling point of water?)"
                    value={customQuestionText}
                    onChange={(e) => setCustomQuestionText(e.target.value)}
                    className="form-control form-control-sm border border-2 border-dark font-bold mb-2"
                  />
                  <div className="row g-2 mb-2">
                    {customOptions.map((opt, i) => (
                      <div key={i} className="col-6 d-flex align-items-center gap-1">
                        <input 
                          type="radio"
                          name="correctOpt"
                          checked={correctIndex === i}
                          onChange={() => setCorrectIndex(i)}
                          className="form-check-input"
                        />
                        <input 
                          type="text"
                          placeholder={`Option ${i + 1}`}
                          value={opt}
                          onChange={(e) => {
                            const newOpts = [...customOptions];
                            newOpts[i] = e.target.value;
                            setCustomOptions(newOpts);
                          }}
                          className="form-control form-control-sm border border-dark small font-semibold"
                        />
                      </div>
                    ))}
                  </div>
                  <button type="submit" className="nb-button nb-button-coral w-100 py-2 fs-6">
                    Save Question To Quiz List
                  </button>
                </form>
              )}
            </div>

            {/* Launch Action */}
            <div>
              <button 
                onClick={handleStartGame}
                className="nb-button nb-button-dark w-100 py-3 fs-5 font-heading text-uppercase d-flex align-items-center justify-center gap-2"
              >
                <Sparkles size={20} className="text-warning fill-warning" />
                Start {questionCount}-Question Live Classroom Arena 🚀
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
