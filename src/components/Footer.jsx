import React from 'react';
import { ArrowUp, Mail, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profileData } from '../data/profile';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px]">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-mono font-bold text-cyan-400 text-xs">
                &lt;DKG/&gt;
              </div>
            </div>
            <div>
              <span className="font-bold text-slate-200 text-sm block">Deepak Kumar Gupta</span>
              <span className="text-[11px] font-mono text-cyan-400">ECE Engineer • AI • IoT • Cloud</span>
            </div>
          </div>

          {/* Social Quick Links */}
          <div className="flex items-center gap-4">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-400" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            
            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg hover:scale-110 transition-transform"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Footer Bottom Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400 text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} Deepak Kumar Gupta. Built with React, Vite & Tailwind CSS.</p>
          <p className="flex items-center gap-1.5 text-cyan-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>Roorkee Institute of Technology (ECE '28)</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
