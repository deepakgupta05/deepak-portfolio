import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Code2, Sparkles, User, Layers, Award, GraduationCap, Briefcase, Mail } from 'lucide-react';
import { profileData } from '../data/profile';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'About', href: '#about', icon: User },
    { label: 'Skills', href: '#skills', icon: Code2 },
    { label: 'Projects', href: '#projects', icon: Layers },
    { label: 'Achievements', href: '#achievements', icon: Award },
    { label: 'Certifications', href: '#certifications', icon: Sparkles },
    { label: 'Experience', href: '#experience', icon: Briefcase },
    { label: 'Contact', href: '#contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3 shadow-2xl shadow-cyan-950/20' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 p-[1px] transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                <span className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-base">
                  &lt;DKG/&gt;
                </span>
              </div>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-slate-100 text-sm tracking-wide group-hover:text-cyan-400 transition-colors">
                Deepak Kumar Gupta
              </span>
              <span className="text-[10px] text-cyan-400/80 font-mono">
                ECE Innovator
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <a
              href={profileData.resume}
              download="Deepak_Kumar_Gupta_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden rounded-xl p-[1px] font-medium text-xs hidden sm:inline-block"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 transition-all duration-300 group-hover:opacity-100"></span>
              <span className="relative flex items-center gap-2 px-4 py-2 rounded-[11px] bg-slate-950 text-slate-200 group-hover:bg-slate-900/80 transition-colors">
                <Download className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-y-[1px] transition-transform" />
                <span>Resume</span>
              </span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-slate-950/95 border-b border-slate-800/80 backdrop-blur-xl py-4 px-6 shadow-2xl transition-all">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900/80 transition-colors"
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                  <span>{item.label}</span>
                </a>
              );
            })}
            <div className="pt-3 border-t border-slate-800/80 mt-2">
              <a
                href={profileData.resume}
                download="Deepak_Kumar_Gupta_Resume.pdf"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium text-sm shadow-lg shadow-cyan-500/20"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
