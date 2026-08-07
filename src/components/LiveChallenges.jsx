import React from 'react';
import { LIVE_CHALLENGES } from '../data/mockData';
import { Zap, Clock, Users, Trophy } from 'lucide-react';

export default function LiveChallenges({ onStartQuiz }) {
  return (
    <section id="challenges" className="py-5 container">
      
      <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-3 mb-4">
        <div>
          <div className="nb-pill bg-coral text-white mb-2">
            <Zap size={16} fill="white" />
            <span>★ DAILY SPEED QUIZZES</span>
          </div>
          <h2 className="font-heading display-5 fw-bold text-dark m-0">
            Classroom Speed Duels
          </h2>
        </div>
        <p className="fw-semibold text-secondary m-0" style={{ maxWidth: '400px' }}>
          Compete against school classmates in quick 5-question speed rounds!
        </p>
      </div>

      <div className="row g-4">
        {LIVE_CHALLENGES.map((challenge) => (
          <div key={challenge.id} className="col-12 col-sm-6 col-lg-3">
            <div className="nb-card bg-white p-4 h-100 d-flex flex-column justify-content-between">
              <div>
                <div 
                  className="rounded-4 border border-3 border-dark d-flex align-items-center justify-content-center fs-3 mb-3"
                  style={{ width: '56px', height: '56px', backgroundColor: challenge.color, boxShadow: '3px 3px 0px #1A1A1A' }}
                >
                  {challenge.icon}
                </div>

                <span className="nb-pill bg-cream text-dark mb-2" style={{ fontSize: '10px' }}>
                  {challenge.category}
                </span>
                <h4 className="font-heading fw-bold text-dark my-2">
                  {challenge.title}
                </h4>

                <div className="space-y-2 text-secondary fw-bold my-3" style={{ fontSize: '12px' }}>
                  <div className="d-flex align-items-center gap-2">
                    <Clock size={16} className="text-danger" />
                    <span>{challenge.time}</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <Users size={16} className="text-primary" />
                    <span>{challenge.players}</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 text-dark fw-extrabold">
                    <Trophy size={16} className="text-warning" />
                    <span>Reward: {challenge.reward}</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => onStartQuiz(challenge)}
                className="nb-button nb-button-dark w-100 py-2 fs-6 mt-3"
              >
                Start Quiz Round ➔
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
