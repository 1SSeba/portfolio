import React, { useState } from 'react';
import type { Project } from '../data/projects';
import { ProjectTag } from './ProjectTag';

interface ProjectCardProps {
  project: Project;
  onTagClick?: (tag: string) => void;
}

export function ProjectCard({ project, onTagClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700/50 bg-white dark:bg-neutral-800/50 shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]"
      data-project-category={project.category}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video w-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
        {project.image ? (
          <img 
            src={project.image}
            alt={project.title}
            className={`h-full w-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-4xl font-bold text-neutral-300 dark:text-neutral-600">{project.title[0]}</span>
          </div>
        )}
        
        {project.featured && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
              Featured
            </span>
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{project.title}</h3>
          <div className="flex gap-2">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" 
                className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white 
                transition-colors p-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            )}
            <a href={project.link} target="_blank" rel="noopener noreferrer" 
              className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white 
              transition-colors p-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </div>
        </div>
        
        <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">{project.description}</p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <ProjectTag 
              key={tag} 
              tag={tag} 
              onClick={onTagClick ? () => onTagClick(tag) : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}