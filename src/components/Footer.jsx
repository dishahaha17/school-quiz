import React from 'react';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';

export default function Footer({ onOpenTeacherModal }) {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 border-top border-4 border-dark">
      <div className="container space-y-4">
        
        {/* Big Bold CTA Banner */}
        <div 
          className="nb-card bg-coral p-4 p-md-5 text-center text-white space-y-4 mx-auto my-4"
          style={{ maxWidth: '800px', transform: 'rotate(-1deg)' }}
        >
          <div className="nb-pill bg-amber text-dark mx-auto mb-2 d-inline-flex">
            <Sparkles size={16} fill="#1A1A1A" />
            <span>★ FOR CLASSES 5TH, 6TH, 7TH & 8TH</span>
          </div>

          <h2 className="font-heading display-5 fw-bold text-white lh-tight">
            Ready to Play & Score 100%?
          </h2>

          <p className="fs-6 fw-bold text-white opacity-90 mx-auto" style={{ maxWidth: '600px' }}>
            Teachers can launch live classroom games in 30 seconds. Students earn XP, streaks, and top the school leaderboard!
          </p>

          <div className="d-flex flex-wrap align-items-center justify-content-center gap-3 pt-2">
            <button 
              onClick={onOpenTeacherModal}
              className="nb-button nb-button-mint fs-5"
            >
              Host Teacher Classroom Game
            </button>
            <a href="#skills" className="nb-button nb-button-dark fs-5">
              Explore Class Quizzes <ArrowRight size={20} />
            </a>
          </div>
        </div>

        {/* Footer Link Columns */}
        <div className="row g-4 pt-5 border-top border-secondary text-secondary">
          <div className="col-12 col-md-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div 
                className="bg-coral border border-2 border-white rounded-3 d-flex align-items-center justify-content-center font-heading fw-bold fs-4 text-white"
                style={{ width: '40px', height: '40px' }}
              >
                Q
              </div>
              <h3 className="font-heading fs-3 fw-bold text-white m-0">Questly</h3>
            </div>
            <p className="small fw-bold text-secondary">
              The bold neo-brutalist gamified learning engine built for Class 5th to 8th primary & middle school students.
            </p>
          </div>

          <div className="col-12 col-md-3">
            <h5 className="font-heading fw-bold text-white text-uppercase fs-6 mb-3">Subjects</h5>
            <ul className="list-unstyled small fw-bold space-y-2">
              <li className="mb-2"><a href="#skills" className="text-secondary text-decoration-none hover-text-mint">Class 5-8 Science</a></li>
              <li className="mb-2"><a href="#skills" className="text-secondary text-decoration-none hover-text-coral">Class 5-8 Mental Maths</a></li>
              <li className="mb-2"><a href="#skills" className="text-secondary text-decoration-none hover-text-amber">Class 5-8 English Grammar</a></li>
              <li className="mb-2"><a href="#skills" className="text-secondary text-decoration-none hover-text-purple">Junior Scratch Coding</a></li>
            </ul>
          </div>

          <div className="col-12 col-md-3">
            <h5 className="font-heading fw-bold text-white text-uppercase fs-6 mb-3">For Teachers</h5>
            <ul className="list-unstyled small fw-bold space-y-2">
              <li className="mb-2"><button onClick={onOpenTeacherModal} className="btn p-0 text-secondary fw-bold text-start border-0">Classroom Quiz Host</button></li>
              <li className="mb-2"><button onClick={onOpenTeacherModal} className="btn p-0 text-secondary fw-bold text-start border-0">Create Class Question</button></li>
              <li className="mb-2"><button onClick={onOpenTeacherModal} className="btn p-0 text-secondary fw-bold text-start border-0">Live Student Winner UI</button></li>
            </ul>
          </div>

          <div className="col-12 col-md-2">
            <h5 className="font-heading fw-bold text-white text-uppercase fs-6 mb-3">Connect</h5>
            <div className="d-flex align-items-center gap-2">
              <div 
                className="rounded-circle bg-coral border border-2 border-white text-white d-flex align-items-center justify-content-center fw-bold"
                style={{ width: '36px', height: '36px' }}
              >
                𝕏
              </div>
              <div 
                className="rounded-circle bg-purple border border-2 border-white text-white d-flex align-items-center justify-content-center fw-bold"
                style={{ width: '36px', height: '36px' }}
              >
                👾
              </div>
              <div 
                className="rounded-circle bg-mint border border-2 border-dark text-dark d-flex align-items-center justify-content-center fw-bold"
                style={{ width: '36px', height: '36px' }}
              >
                ▶
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-4 small fw-bold text-secondary d-flex align-items-center justify-content-center gap-1">
          <span>Built with</span> <Heart size={16} className="text-danger fill-danger" /> <span>for Questly Class 5th-8th Students © 2026</span>
        </div>

      </div>
    </footer>
  );
}
