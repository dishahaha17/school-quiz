import React from 'react';
import { Star } from 'lucide-react';

const TAGS = [
  "CLASS 5 SCIENCE",
  "CLASS 6 MATHS",
  "CLASS 7 ENGLISH GRAMMAR",
  "CLASS 8 SCRATCH CODING",
  "SOLAR SYSTEM & SPACE",
  "MENTAL MATHS DUELS",
  "CLASSROOM LEADERBOARD",
  "LIVE WINNER PODIUM"
];

export default function Marquee() {
  return (
    <div className="bg-[#1A1A1A] text-white py-4 border-y-4 border-[#1A1A1A] overflow-hidden my-8">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {[...TAGS, ...TAGS, ...TAGS].map((tag, index) => (
          <div key={index} className="flex items-center gap-4 font-heading font-black text-lg tracking-wider uppercase text-[#FDF6E3]">
            <span>{tag}</span>
            <Star className="w-4 h-4 fill-[#F5B942] text-[#F5B942]" />
          </div>
        ))}
      </div>
    </div>
  );
}
