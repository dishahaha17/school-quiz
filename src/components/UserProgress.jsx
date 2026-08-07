import React from 'react';
import { Award, Flame, CheckSquare, Target, Sparkles } from 'lucide-react';

export default function UserProgress({ userStats }) {
  return (
    <section className="py-5 container">
      
      {/* Header */}
      <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
        <div className="nb-pill bg-mint text-dark mx-auto mb-2">
          <Sparkles size={16} />
          <span>★ STUDENT PROGRESS & BADGES</span>
        </div>
        <h2 className="font-heading display-5 fw-bold text-dark">
          My Learning Report
        </h2>
      </div>

      {/* Two Side-by-Side Cards using Bootstrap Row */}
      <div className="row g-4">
        
        {/* Card 1: Student Profile & Level Progress */}
        <div className="col-12 col-lg-6">
          <div className="nb-card bg-amber p-4 p-md-5 h-100 d-flex flex-column justify-content-between">
            <div>
              <div className="d-flex align-items-center gap-3 border-bottom border-3 border-dark pb-4 mb-4">
                <img 
                  src={userStats.avatar} 
                  alt={userStats.userName} 
                  className="rounded-4 border border-3 border-dark bg-white shadow-sm"
                  style={{ width: '64px', height: '64px' }}
                />
                <div>
                  <div className="nb-pill bg-dark text-white mb-1" style={{ fontSize: '10px' }}>
                    LEVEL {userStats.level} SCHOLAR
                  </div>
                  <h3 className="font-heading fs-3 fw-bold text-dark m-0">
                    {userStats.userName}
                  </h3>
                  <small className="fw-bold text-dark opacity-75">Class Rank: #4 in Class 6B</small>
                </div>
              </div>

              <div className="mb-4">
                <div className="d-flex justify-content-between font-heading fw-bold fs-6 text-dark mb-2">
                  <span>Level {userStats.level} Goal</span>
                  <span>4,200 / 5,000 XP</span>
                </div>
                <div 
                  className="w-100 bg-white rounded-pill border border-3 border-dark p-1 overflow-hidden"
                  style={{ height: '24px', boxShadow: '3px 3px 0px #1A1A1A' }}
                >
                  <div 
                    className="h-100 bg-coral rounded-pill border-end border-2 border-dark" 
                    style={{ width: '84%' }}
                  />
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-heading fs-6 text-uppercase fw-extrabold text-dark mb-2">
                Unlocked School Badges
              </h5>
              <div className="d-flex flex-wrap gap-2">
                <span className="nb-pill bg-white text-dark">🔥 15-Day Streak</span>
                <span className="nb-pill bg-mint text-dark">📐 Math Genius</span>
                <span className="nb-pill bg-purple text-white">🔬 Science Champ</span>
                <span className="nb-pill bg-dark text-white">✍️ Spelling Bee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Weekly Homework & Quiz Milestone Checklist */}
        <div className="col-12 col-lg-6">
          <div className="nb-card bg-white p-4 p-md-5 h-100 d-flex flex-column justify-content-between">
            <div>
              <div className="d-flex align-items-center justify-content-between border-bottom border-3 border-dark pb-4 mb-4">
                <div>
                  <div className="nb-pill bg-coral text-white mb-1" style={{ fontSize: '10px' }}>
                    <Target size={14} /> WEEKLY TARGETS
                  </div>
                  <h3 className="font-heading fs-3 fw-bold text-dark m-0">
                    Class Homework Goals
                  </h3>
                </div>
                <div className="text-end">
                  <span className="font-heading fs-1 fw-bold text-mint">3/4</span>
                  <div className="text-uppercase fw-bold text-secondary" style={{ fontSize: '10px' }}>Completed</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="d-flex align-items-center gap-3 p-3 rounded-3 border border-2 border-dark bg-cream mb-2">
                  <CheckSquare size={20} className="text-success fill-success" />
                  <span className="fw-bold text-dark text-decoration-line-through">Complete Class 6 Science Photosynthesis Quiz</span>
                </div>

                <div className="d-flex align-items-center gap-3 p-3 rounded-3 border border-2 border-dark bg-cream mb-2">
                  <CheckSquare size={20} className="text-success fill-success" />
                  <span className="fw-bold text-dark text-decoration-line-through">Score 100% in Fractions & Decimals Battle</span>
                </div>

                <div className="d-flex align-items-center gap-3 p-3 rounded-3 border border-2 border-dark bg-cream mb-2">
                  <CheckSquare size={20} className="text-success fill-success" />
                  <span className="fw-bold text-dark text-decoration-line-through">Maintain 15-day daily learning streak</span>
                </div>

                <div className="d-flex align-items-center gap-3 p-3 rounded-3 border border-2 border-dark bg-white" style={{ boxShadow: '2px 2px 0px #1A1A1A' }}>
                  <div className="rounded border border-2 border-dark bg-white" style={{ width: '20px', height: '20px' }} />
                  <span className="fw-bold text-dark">Win 1st place in Teacher Classroom Arena (+800 XP needed)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
