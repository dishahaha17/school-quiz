import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Sparkles, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-5 container">
      
      {/* Header */}
      <div className="text-center mx-auto mb-4" style={{ maxWidth: '600px' }}>
        <div className="nb-pill bg-coral text-white mx-auto mb-2">
          <Sparkles size={16} fill="white" />
          <span>★ TEACHER & STUDENT WINS</span>
        </div>
        <h2 className="font-heading display-5 fw-bold text-dark">
          School Reviews
        </h2>
      </div>

      {/* 3 Accent Color Testimonial Cards */}
      <div className="row g-4">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="col-12 col-md-4">
            <div 
              className="nb-card p-4 h-100 d-flex flex-column justify-content-between"
              style={{ backgroundColor: t.color }}
            >
              <div>
                <Quote size={32} className="text-dark mb-3 opacity-25" />
                <p className="font-heading fw-bold fs-6 text-dark mb-4">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-3 border-top border-3 border-dark d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="rounded-3 border border-2 border-dark bg-white"
                    style={{ width: '40px', height: '40px' }}
                  />
                  <div>
                    <h6 className="font-heading fw-bold text-dark m-0">{t.name}</h6>
                    <small className="fw-bold text-dark opacity-75">{t.role}</small>
                  </div>
                </div>
                <span className="nb-pill bg-white text-dark py-0 px-2" style={{ fontSize: '8px' }}>
                  {t.tag}
                </span>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
