import React from 'react';
import { MINI_GAMES } from '../data/mockData';
import { Gamepad2, Play } from 'lucide-react';

export default function MiniGames({ onLaunchMiniGame }) {
  return (
    <section className="bg-dark text-white py-5 border-top border-bottom border-4 border-dark my-5">
      <div className="container space-y-4">
        
        {/* Header */}
        <div className="d-flex flex-column flex-md-row align-items-md-end justify-between gap-3 mb-4">
          <div>
            <div className="nb-pill bg-coral text-white mb-2">
              <Gamepad2 size={16} />
              <span>★ FUN LEARNING GAMES</span>
            </div>
            <h2 className="font-heading display-5 fw-bold text-white m-0">
              Primary Mini-Games
            </h2>
          </div>
          <p className="fw-semibold text-secondary m-0" style={{ maxWidth: '400px' }}>
            Practice Multiplication tables, Science planet matching, and Scratch coding logic while having fun!
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="row g-4">
          {MINI_GAMES.map((game, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-lg-3">
              <div 
                className="nb-card p-4 text-dark h-100 d-flex flex-column justify-content-between"
                style={{ backgroundColor: game.color }}
              >
                <div>
                  <div 
                    className="rounded-4 bg-white border border-3 border-dark d-flex align-items-center justify-center fs-3 mb-3"
                    style={{ width: '50px', height: '50px', boxShadow: '3px 3px 0px #1A1A1A' }}
                  >
                    {game.icon}
                  </div>
                  <span className="nb-pill bg-dark text-white mb-2" style={{ fontSize: '9px' }}>
                    {game.category}
                  </span>
                  <h4 className="font-heading fw-bold my-2">
                    {game.title}
                  </h4>
                </div>

                <button 
                  onClick={() => onLaunchMiniGame(game)}
                  className="nb-button nb-button-dark w-100 py-2 fs-6 mt-3"
                >
                  <Play size={16} fill="white" />
                  Play Game
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
