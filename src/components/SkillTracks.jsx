import React from 'react';
import { SKILL_TRACKS } from '../data/mockData';
import { Sparkles, ArrowRight, BookOpen, Star } from 'lucide-react';

export default function SkillTracks({ onStartTrackQuiz }) {
  return (
    <section id="skills" className="py-5 container">
      
      <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
        <div className="nb-pill bg-purple text-white mx-auto mb-2">
          <Sparkles size={16} fill="white" />
          <span>★ SUBJECT SKILL TRACKS</span>
        </div>
        <h2 className="font-heading display-5 fw-bold text-dark">
          Class 5th - 8th Quizzes
        </h2>
        <p className="fw-semibold text-secondary">
          Pick your favorite school subject, answer fun quizzes, and earn high XP rewards!
        </p>
      </div>

      <div className="row g-4">
        {SKILL_TRACKS.map((track) => (
          <div key={track.id} className="col-12 col-md-6">
            <div 
              className="nb-card p-4 h-100 d-flex flex-column justify-content-between cursor-pointer"
              style={{ backgroundColor: track.color }}
              onClick={() => onStartTrackQuiz(track)}
            >
              <div>
                <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
                  <div 
                    className="bg-white border border-3 border-dark rounded-4 d-flex align-items-center justify-center fs-2"
                    style={{ width: '56px', height: '56px', boxShadow: '3px 3px 0px #1A1A1A' }}
                  >
                    {track.icon}
                  </div>
                  <div className="d-flex items-center gap-2">
                    <span className="nb-pill bg-white text-dark">
                      {track.badge}
                    </span>
                    <span className="nb-pill bg-dark text-white">
                      {track.grade}
                    </span>
                  </div>
                </div>

                <h3 className="font-heading fs-3 fw-bold text-dark mb-2">
                  {track.title}
                </h3>
                <p className="fw-semibold text-dark opacity-90 mb-4">
                  {track.description}
                </p>
              </div>

              <div className="pt-3 border-top border-3 border-dark d-flex align-items-center justify-content-between gap-3">
                <div className="d-flex align-items-center gap-3 text-uppercase fw-bold text-dark" style={{ fontSize: '12px' }}>
                  <span className="d-flex align-items-center gap-1">
                    <BookOpen size={16} /> {track.modules}
                  </span>
                  <span className="d-flex align-items-center gap-1 bg-white px-2 py-1 rounded-pill border border-2 border-dark">
                    <Star size={14} fill="#1A1A1A" /> {track.xp}
                  </span>
                </div>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onStartTrackQuiz(track);
                  }}
                  className="rounded-circle bg-dark text-white d-flex align-items-center justify-content-center border border-2 border-dark"
                  style={{ width: '40px', height: '40px', boxShadow: '2px 2px 0px #1A1A1A' }}
                >
                  <ArrowRight size={20} />
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
