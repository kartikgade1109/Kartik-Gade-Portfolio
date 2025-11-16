
import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';
import type { Project } from '../types';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        Projects I've Built
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project: Project, index: number) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
