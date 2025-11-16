
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-[calc(100vh-68px)] flex items-center py-20">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          Hi, I'm <span className="text-cyan-400">{PERSONAL_INFO.name}</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mt-2">
          {PERSONAL_INFO.title}
        </h2>
        <p className="mt-6 text-lg text-slate-400">
          {PERSONAL_INFO.bio}
        </p>
      </div>
    </section>
  );
};

export default Hero;