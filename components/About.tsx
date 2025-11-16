import React from 'react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        About Me
      </h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-slate-400 leading-relaxed text-center">
          {PERSONAL_INFO.about}
        </p>
      </div>
    </section>
  );
};

export default About;