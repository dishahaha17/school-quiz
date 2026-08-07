import React from 'react';
import { Trophy, Flame, Crown, Star, Medal } from 'lucide-react';

export default function Leaderboard({ leaderboardData }) {
  return (
    <section id="leaderboard" className="py-5 container">
      
      {/* Header */}
      <div className="text-center mx-auto mb-4" style={{ maxWidth: '600px' }}>
        <div className="nb-pill bg-amber text-dark mx-auto mb-2">
          <Trophy size={16} fill="#1A1A1A" />
          <span>★ SCHOOL LEADERBOARD</span>
        </div>
        <h2 className="font-heading display-5 fw-bold text-dark">
          Class Toppers Leaderboard
        </h2>
        <p className="fw-semibold text-secondary">
          Real-time points & streaks for Class 5th, 6th, 7th & 8th students!
        </p>
      </div>

      {/* Clean White Table Card */}
      <div className="nb-card bg-white p-3 p-md-4">
        <div className="table-responsive">
          <table className="table table-hover align-middle m-0">
            <thead>
              <tr className="border-bottom border-3 border-dark text-uppercase text-secondary font-heading fw-bold" style={{ fontSize: '11px' }}>
                <th className="py-3 px-3 text-center" style={{ width: '80px' }}>Rank</th>
                <th className="py-3 px-3">Student Name</th>
                <th className="py-3 px-3">Class & Sec</th>
                <th className="py-3 px-3">Streak</th>
                <th className="py-3 px-3 text-end">Total XP Points</th>
              </tr>
            </thead>
            <tbody className="fw-bold text-dark">
              {leaderboardData.map((player, index) => {
                const isUser = player.isUser;
                const rankNum = index + 1;

                return (
                  <tr 
                    key={index}
                    className={isUser ? 'table-warning' : ''}
                    style={{
                      borderBottom: '2px solid #E5E7EB',
                      backgroundColor: isUser ? '#FFFBEB' : 'transparent'
                    }}
                  >
                    {/* Rank Badge Column */}
                    <td className="py-3 px-3 text-center font-heading fs-5 fw-bold">
                      {rankNum === 1 && (
                        <span className="badge bg-danger rounded-pill text-white p-2 d-inline-flex align-items-center gap-1 shadow-sm">
                          <Crown size={16} fill="white" /> #1
                        </span>
                      )}
                      {rankNum === 2 && (
                        <span className="badge bg-primary rounded-pill text-white p-2 d-inline-flex align-items-center gap-1 shadow-sm">
                          <Medal size={16} /> #2
                        </span>
                      )}
                      {rankNum === 3 && (
                        <span className="badge bg-purple rounded-pill text-white p-2 d-inline-flex align-items-center gap-1 shadow-sm">
                          <Medal size={16} /> #3
                        </span>
                      )}
                      {rankNum > 3 && (
                        <span className="text-secondary fw-bold fs-6">
                          #{rankNum}
                        </span>
                      )}
                    </td>

                    {/* Student Name & Badge */}
                    <td className="py-3 px-3">
                      <div className="d-flex align-items-center gap-3">
                        <img 
                          src={player.avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${player.name}`} 
                          alt={player.name}
                          className="rounded-circle border border-2 border-dark bg-white shadow-sm flex-shrink-0"
                          style={{ width: '42px', height: '42px', objectFit: 'cover' }}
                        />
                        <div>
                          <div className="font-heading fw-bold fs-6 d-flex align-items-center gap-2 m-0 text-dark">
                            {player.name}
                            {isUser && (
                              <span className="badge bg-dark text-white rounded-pill px-2 py-1" style={{ fontSize: '9px' }}>
                                YOU
                              </span>
                            )}
                          </div>
                          <span className="badge bg-light text-dark border border-dark rounded-pill px-2 py-0" style={{ fontSize: '9px' }}>
                            {player.badge || '⚡ Student'}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Class & Section */}
                    <td className="py-3 px-3 font-heading fw-bold fs-6 text-dark">
                      {player.classSection || 'Class 6B'}
                    </td>

                    {/* Daily Streak */}
                    <td className="py-3 px-3 fs-6 font-extrabold">
                      <span className="d-inline-flex align-items-center gap-1 text-danger">
                        <Flame size={16} fill="#F0506E" />
                        {player.streak || 0}d
                      </span>
                    </td>

                    {/* Total XP */}
                    <td className="py-3 px-3 text-end font-heading fs-5 fw-bold text-dark">
                      <span className="d-inline-flex align-items-center gap-1 bg-amber px-3 py-1 rounded-pill border border-2 border-dark shadow-sm">
                        <Star size={16} fill="#1A1A1A" className="text-dark" />
                        {(player.xp || 0).toLocaleString()} XP
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </section>
  );
}
