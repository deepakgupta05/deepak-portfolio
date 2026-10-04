import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Phone, Cpu, Radio, Sparkles, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Hero3DBackground } from './Hero3DBackground';
import { profileData } from '../data/profile';

export const Hero = () => {
  const [tiltStyle, setTiltStyle] = useState({ transform: 'rotateX(0deg) rotateY(0deg)' });

  // 3D Card Tilt Mouse Interaction
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (-y / (rect.height / 2)) * 12;
    const rotateY = (x / (rect.width / 2)) * 12;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s ease-out'
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s ease-out'
    });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden grid-bg">
      
      {/* Three.js Interactive 3D Background Canvas */}
      <Hero3DBackground />

      {/* Background Radial Glow */}
      <div className="absolute inset-0 radial-glow pointer-events-none"></div>
      
      {/* Ambient Animated Orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse-slow pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>{profileData.status}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.15] mb-4">
              Hi, I'm <span className="text-gradient">{profileData.name}</span>
            </h1>

            {/* Tagline Badge */}
            <div className="text-lg sm:text-xl font-semibold text-cyan-400 font-mono mb-4 flex items-center gap-2 flex-wrap">
              <span className="text-slate-300">ECE Engineer</span>
              <span className="text-purple-400">•</span>
              <span className="text-gradient-cyan">AI</span>
              <span className="text-purple-400">•</span>
              <span className="text-cyan-300">IoT</span>
              <span className="text-purple-400">•</span>
              <span className="text-purple-400">Embedded Systems</span>
              <span className="text-purple-400">•</span>
              <span className="text-blue-400">Cloud</span>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              Electronics & Communication Engineering student at <strong className="text-slate-100 font-medium">Roorkee Institute of Technology</strong> building intelligent hardware prototypes, computer vision safety systems, and full-stack web solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={profileData.resume}
                download="Deepak_Kumar_Gupta_Resume.pdf"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl glass-card text-slate-200 hover:text-cyan-300 font-semibold text-sm border border-slate-700/80 hover:border-cyan-500/40 transition-all duration-300"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Contact Quick Pills & Social Links */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-800/80 w-full">
              <span className="text-xs font-mono text-slate-400">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:scale-110 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:scale-110 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:scale-110 transition-all"
                  aria-label="Email Address"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${profileData.phone.replace(/\s+/g, '')}`}
                  className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:scale-110 transition-all"
                  aria-label="Phone Contact"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
              <div className="ml-auto hidden sm:flex items-center gap-2 text-xs text-slate-400 font-mono">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{profileData.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual 3D Interactive Card */}
          <motion.div 
            className="lg:col-span-5 flex justify-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="relative w-full max-w-sm sm:max-w-md cursor-pointer"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={tiltStyle}
            >
              
              {/* Outer Glowing Gradient Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 opacity-60 blur-xl animate-pulse-slow"></div>

              {/* Main Avatar Container */}
              <div className="relative rounded-3xl glass-card p-4 overflow-hidden border border-slate-700/80 shadow-2xl">
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900">
                  <img
                    src={profileData.avatar}
                    alt={profileData.name}
                    className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                  
                  {/* Overlay Name Label */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-slate-100">{profileData.name}</h3>
                      <p className="text-[11px] text-cyan-400 font-mono">B.Tech ECE (2024-2028)</p>
                    </div>
                    <span className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-300">
                      <Cpu className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Floating Tech Chips */}
                <div className="absolute -top-4 -right-4 glass-card px-3.5 py-2 rounded-xl flex items-center gap-2 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-xl animate-float">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  <span>State Hackathon Winner</span>
                </div>

                <div className="absolute -bottom-4 -left-4 glass-card px-3.5 py-2 rounded-xl flex items-center gap-2 border border-purple-500/30 text-xs font-mono text-purple-300 shadow-xl animate-float" style={{ animationDelay: '2s' }}>
                  <Radio className="w-3.5 h-3.5 text-cyan-400" />
                  <span>ESP32 & AI Computer Vision</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
