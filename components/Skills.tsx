
import React from 'react';
import { SKILLS } from '../constants';
import type { SkillCategory } from '../types';

const SkillBadge: React.FC<{ name: string }> = ({ name }) => (
  <span className="bg-slate-700 text-cyan-300 text-sm font-medium px-3 py-1.5 rounded-full">
    {name}
  </span>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        My Tech Stack
      </h2>
      <div className="max-w-4xl mx-auto">
        {SKILLS.map((category: SkillCategory, index: number) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <SkillBadge key={skillIndex} name={skill.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
