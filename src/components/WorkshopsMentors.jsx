import React from 'react';
import { Calendar, UserCheck } from 'lucide-react';

export default function WorkshopsMentors() {
  return (
    <section className="py-5 container">
      <div className="row g-5">
        
        {/* Left Column: Live School Workshops */}
        <div className="col-12 col-lg-6 space-y-4">
          <div className="mb-3">
            <div className="nb-pill bg-primary text-white mb-2">
              <Calendar size={16} />
              <span>★ SCHOOL STEM SESSIONS</span>
            </div>
            <h2 className="font-heading display-6 fw-bold text-dark m-0">
              Live Teacher Workshops
            </h2>
          </div>

          <div className="space-y-3">
            <div className="nb-card bg-white p-4 d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between gap-3 mb-3">
              <div className="d-flex align-items-start gap-3">
                <div 
                  className="rounded-4 bg-coral border border-3 border-dark d-flex align-items-center justify-center text-white font-heading fw-bold fs-6"
                  style={{ width: '50px', height: '50px', boxShadow: '3px 3px 0px #1A1A1A' }}
                >
                  SEP 05
                </div>
                <div>
                  <h5 className="font-heading fw-bold text-dark m-0">
                    Scratch 3.0 Animation & Game Design
                  </h5>
                  <small className="fw-bold text-secondary">Host: Ms. Anjali • Class 5-8 Special</small>
                </div>
              </div>
              <button className="nb-button nb-button-mint py-2 px-3 fs-6 whitespace-nowrap">
                Join Workshop
              </button>
            </div>

            <div className="nb-card bg-white p-4 d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between gap-3 mb-3">
              <div className="d-flex align-items-start gap-3">
                <div 
                  className="rounded-4 bg-amber border border-3 border-dark d-flex align-items-center justify-center text-dark font-heading fw-bold fs-6"
                  style={{ width: '50px', height: '50px', boxShadow: '3px 3px 0px #1A1A1A' }}
                >
                  SEP 10
                </div>
                <div>
                  <h5 className="font-heading fw-bold text-dark m-0">
                    Science Experiment Live: Solar Models
                  </h5>
                  <small className="fw-bold text-secondary">Host: Mrs. Meenakshi • Class 6-7 Special</small>
                </div>
              </div>
              <button className="nb-button nb-button-mint py-2 px-3 fs-6 whitespace-nowrap">
                Join Workshop
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Book Teacher Mentor */}
        <div className="col-12 col-lg-6 space-y-4">
          <div className="mb-3">
            <div className="nb-pill bg-purple text-white mb-2">
              <UserCheck size={16} />
              <span>★ 1-ON-1 HELP</span>
            </div>
            <h2 className="font-heading display-6 fw-bold text-dark m-0">
              Connect with Teachers
            </h2>
          </div>

          <div className="row g-3">
            <div className="col-12 col-sm-6">
              <div className="nb-card bg-cream p-4 space-y-3">
                <div className="d-flex align-items-center gap-3">
                  <img 
                    src="https://api.dicebear.com/7.x/bottts/svg?seed=TeacherMeenakshi" 
                    alt="Science Teacher" 
                    className="rounded-3 border border-2 border-dark bg-white"
                    style={{ width: '48px', height: '48px' }}
                  />
                  <div>
                    <h5 className="font-heading fw-bold text-dark m-0">Mrs. Meenakshi</h5>
                    <small className="fw-bold text-secondary">Science (Class 5-8)</small>
                  </div>
                </div>
                <div className="d-flex flex-wrap gap-1">
                  <span className="nb-pill bg-white text-dark" style={{ fontSize: '9px' }}>PHOTOSYNTHESIS</span>
                  <span className="nb-pill bg-white text-dark" style={{ fontSize: '9px' }}>SPACE</span>
                </div>
                <button className="nb-button nb-button-dark w-100 py-2 fs-6">
                  Ask Doubt 💬
                </button>
              </div>
            </div>

            <div className="col-12 col-sm-6">
              <div className="nb-card bg-cream p-4 space-y-3">
                <div className="d-flex align-items-center gap-3">
                  <img 
                    src="https://api.dicebear.com/7.x/bottts/svg?seed=TeacherSharma" 
                    alt="Maths Teacher" 
                    className="rounded-3 border border-2 border-dark bg-white"
                    style={{ width: '48px', height: '48px' }}
                  />
                  <div>
                    <h5 className="font-heading fw-bold text-dark m-0">Mr. Sharma</h5>
                    <small className="fw-bold text-secondary">Maths (Class 6-8)</small>
                  </div>
                </div>
                <div className="d-flex flex-wrap gap-1">
                  <span className="nb-pill bg-white text-dark" style={{ fontSize: '9px' }}>FRACTIONS</span>
                  <span className="nb-pill bg-white text-dark" style={{ fontSize: '9px' }}>GEOMETRY</span>
                </div>
                <button className="nb-button nb-button-dark w-100 py-2 fs-6">
                  Ask Doubt 💬
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
