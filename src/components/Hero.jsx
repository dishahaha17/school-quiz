import React from 'react';
import { Sparkles, Play, Rocket, Flame, Star, Award, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Hero({ userStats, onStartTeacherMode }) {
  return (
    <section id="hero" className="py-5 container">
      <div className="row align-items-center g-5">
        
        {/* Left Column: Headlines & CTAs */}
        <div className="col-lg-7 space-y-4">
          <div className="nb-pill bg-amber text-dark w-auto d-inline-flex mb-3">
            <Sparkles size={16} fill="#1A1A1A" />
            <span>★ CLASS 5TH TO 8TH QUIZ ENGINE</span>
          </div>

          <h1 className="font-heading display-3 fw-bold text-dark lh-1 mb-3">
            Learn. <br />
            <span 
              className="d-inline-block text-white px-3 py-1 my-1"
              style={{
                backgroundColor: '#F0506E',
                borderRadius: '24px',
                border: '4px solid #1A1A1A',
                boxShadow: '5px 5px 0px #1A1A1A',
                transform: 'rotate(-2deg)'
              }}
            >
              Play.
            </span> <br />
            Grow.
          </h1>

          <p className="fs-5 fw-semibold text-dark opacity-90 mb-4 max-w-lg">
            Fun interactive quizzes for primary & middle school students! Play Maths, Science, English, and Scratch coding battles. 
            Teachers can create live classroom games & generate student leaderboards instantly!
          </p>

          <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
            <a href="#skills" className="nb-button nb-button-dark fs-5 text-decoration-none">
              <Rocket size={20} className="text-warning" />
              Start Student Quest
            </a>
            <button 
              onClick={onStartTeacherMode}
              className="nb-button nb-button-coral fs-5"
            >
              <Play size={20} fill="white" />
              Teacher Classroom Quiz
            </button>
          </div>

          {/* 3 Stat Cards Below */}
          <div className="row g-3 pt-3" style={{ maxWidth: '480px' }}>
            <div className="col-4">
              <div className="nb-card-static bg-coral text-white p-3 text-center">
                <Flame size={24} className="mx-auto mb-1 fill-white" />
                <div className="font-heading fs-4 fw-bold">{userStats.streak} Days</div>
                <div className="text-uppercase fw-bold opacity-75" style={{ fontSize: '10px' }}>Daily Streak</div>
              </div>
            </div>

            <div className="col-4">
              <div className="nb-card-static bg-amber text-dark p-3 text-center">
                <Star size={24} className="mx-auto mb-1 fill-dark" />
                <div className="font-heading fs-4 fw-bold">{userStats.xp}</div>
                <div className="text-uppercase fw-bold opacity-75" style={{ fontSize: '10px' }}>Total XP</div>
              </div>
            </div>

            <div className="col-4">
              <div className="nb-card-static bg-mint text-dark p-3 text-center">
                <Award size={24} className="mx-auto mb-1" />
                <div className="font-heading fs-4 fw-bold">Lvl {userStats.level}</div>
                <div className="text-uppercase fw-bold opacity-75" style={{ fontSize: '10px' }}>Class Rank</div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Framed Hero Image with Badges */}
        <div className="col-lg-5 position-relative">
          <div className="nb-card bg-purple p-3" style={{ transform: 'rotate(1deg)' }}>
            <div className="border border-3 border-dark rounded-4 overflow-hidden bg-white shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80" 
                alt="Primary school classroom quiz session" 
                className="w-100 object-fit-cover"
                style={{ height: '300px' }}
              />
              <div className="p-3 bg-cream border-top border-3 border-dark">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <h5 className="font-heading fw-bold text-dark m-0">Class 6B Quiz Battle Arena</h5>
                    <small className="fw-bold text-secondary">30 Students playing Live Science Blitz</small>
                  </div>
                  <span className="nb-pill bg-mint text-dark">● LIVE NOW</span>
                </div>
              </div>
            </div>
          </div>

          <div 
            className="nb-pill bg-amber text-dark px-3 py-1 position-absolute"
            style={{ top: '-15px', left: '-15px', transform: 'rotate(-6deg)', zIndex: 10 }}
          >
            <ShieldCheck size={16} />
            <span>Classes 5th, 6th, 7th & 8th</span>
          </div>

          <div 
            className="nb-pill bg-coral text-white px-3 py-1 position-absolute"
            style={{ bottom: '-15px', right: '-15px', transform: 'rotate(3deg)', zIndex: 10 }}
          >
            <CheckCircle2 size={16} />
            <span>Winner Podium & Badges</span>
          </div>

        </div>

      </div>
    </section>
  );
}
