import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Sparkles, UserCheck, History } from 'lucide-react';

export default function Navbar({ onOpenTeacherModal, onOpenHistoryModal }) {
  return (
    <nav className="sticky-top bg-[#FDF6E3] border-bottom border-4 border-dark py-2 px-3">
      <div className="container-fluid max-w-7xl mx-auto d-flex align-items-center justify-between gap-3">
        
        {/* Brand Logo */}
        <div className="d-flex align-items-center gap-3">
          <div 
            className="d-flex align-items-center justify-content-center text-white fw-bold shadow-sm"
            style={{
              width: '44px',
              height: '44px',
              backgroundColor: '#F0506E',
              border: '3px solid #1A1A1A',
              borderRadius: '16px',
              boxShadow: '3px 3px 0px #1A1A1A'
            }}
          >
            <span className="font-heading fs-3 font-black">Q</span>
          </div>
          <div>
            <h1 className="font-heading fs-3 fw-bold m-0 text-dark d-flex align-items-center gap-1">
              Questly <Sparkles className="text-warning fill-warning" size={20} />
            </h1>
            <span className="text-uppercase fw-extrabold text-dark" style={{ fontSize: '10px', letterSpacing: '1px' }}>
              Class 5th - 8th Gamified Learning
            </span>
          </div>
        </div>

        {/* Nav Links */}
        <div className="d-none d-md-flex align-items-center gap-2">
          <a href="#hero" className="nb-pill bg-mint text-dark text-decoration-none">
            ★ Home
          </a>
          <a href="#skills" className="nb-pill bg-white text-dark text-decoration-none">
            School Subjects
          </a>
          <a href="#challenges" className="nb-pill bg-white text-dark text-decoration-none">
            Daily Quiz
          </a>
          <a href="#leaderboard" className="nb-pill bg-white text-dark text-decoration-none">
            Leaderboard
          </a>
        </div>

        {/* Action Buttons: Class Quiz History & Teacher Arena */}
        <div className="d-flex align-items-center gap-2">
          <button 
            onClick={onOpenHistoryModal}
            className="nb-pill bg-amber text-dark border border-2 border-dark text-decoration-none cursor-pointer"
            style={{ padding: '8px 16px', cursor: 'pointer' }}
          >
            <History size={16} />
            <span>Class Quiz History</span>
          </button>

          <button 
            onClick={onOpenTeacherModal}
            className="nb-button nb-button-mint py-2 px-3 fs-6"
          >
            <UserCheck size={16} />
            <span>Teacher Arena</span>
          </button>
        </div>

      </div>
    </nav>
  );
}
