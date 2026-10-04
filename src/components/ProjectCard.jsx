import React from 'react';
import { ExternalLink, Maximize2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export const ProjectCard = ({ project, onSelect }) => {
  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-slate-800/80 flex flex-col h-full group hover:border-cyan-500/40 transition-all duration-300">
      
      {/* Project Image Wrapper */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
        
        {/* Category Tag Pill */}
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-md text-[11px] font-mono font-medium text-cyan-300">
          {project.category}
        </span>

        {/* Action Quick View Button */}
        <button
          onClick={() => onSelect(project)}
          className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/90 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg backdrop-blur-md transition-all opacity-90 group-hover:opacity-100"
          aria-label={`View details for ${project.title}`}
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>View Details</span>
        </button>
      </div>

      {/* Project Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        
        <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors mb-1">
          {project.title}
        </h3>
        
        <p className="text-xs font-mono text-purple-400 mb-3">
          {project.subtitle}
        </p>

        <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 mb-6 leading-relaxed flex-grow">
          {project.shortDesc}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-[10px] font-mono text-slate-400"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-[10px] font-mono text-cyan-400 font-semibold">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Card Footer Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 mt-auto">
          <button
            onClick={() => onSelect(project)}
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group/btn"
          >
            <span>Learn Architecture</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-100 hover:border-slate-700 transition-all"
              title="View GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
        </div>

      </div>

    </div>
  );
};
