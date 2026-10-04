import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Lightbulb, Trophy, Cpu, Code2, Globe, CheckCircle2, Award } from 'lucide-react';
import { profileData } from '../data/profile';

export const About = () => {
  const [activeTab, setActiveTab] = useState('bio');

  const tabs = [
    { id: 'bio', label: 'Biography', icon: UserCheck },
    { id: 'philosophy', label: 'Engineering Focus', icon: Lightbulb },
    { id: 'highlights', label: 'Key Milestones', icon: Trophy },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
            Get To Know Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight mt-4">
            About <span className="text-gradient">Deepak Kumar Gupta</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3">
            Electronics & Communication Engineering student passionate about embedded hardware, IoT systems, computer vision AI, and web software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Tabbed About Card */}
          <motion.div 
            className="lg:col-span-8 glass-card rounded-2xl p-6 sm:p-8 border border-slate-800"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 border-b border-slate-800/80 pb-4 mb-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/80'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            {activeTab === 'bio' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                <h3 className="text-lg font-bold text-slate-100 mb-3 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                  <span>Hardware & Software Integrator</span>
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                  I am an Electronics and Communication Engineering student at Roorkee Institute of Technology (Expected Graduation: May 2028). My passion lies in building practical technology solutions where physical electronics interface with intelligent algorithms and cloud backends.
                </p>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  I work with microcontrollers (ESP32, Arduino, MSP432), sensor networks (alcohol, motion, soil sensors), computer vision libraries (OpenCV, MediaPipe), and web frameworks (React, Node.js, Express, Firebase) to turn real-world ideas into reliable prototypes.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800/80 text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>Location: Roorkee, Uttarakhand, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                    <span>Institution: RIT Roorkee (ECE)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    <span>Degree: B.Tech (2024-2028)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>Focus: AI + IoT + Embedded</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'philosophy' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                <h3 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-purple-400" />
                  <span>Core Engineering Principles</span>
                </h3>
                <ul className="space-y-3.5 text-sm text-slate-300">
                  <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/60">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-100 font-semibold">Practical Problem Solving:</strong> Focus on converting complex real-world challenges (like driver safety or agriculture monitoring) into functional, low-latency prototypes.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/60">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-100 font-semibold">Hardware-Software Synergy:</strong> Seamlessly bind low-level microcontroller code (Embedded C/C++) with high-level Python AI models and modern web dashboards.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/60">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-100 font-semibold">Continuous Technical Growth:</strong> Actively earning credentials from IIT Roorkee, L&T Edutech, AWS, Cisco, and Texas Instruments to stay ahead in hardware & cloud tech.
                    </div>
                  </li>
                </ul>
              </motion.div>
            )}

            {activeTab === 'highlights' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                <h3 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400" />
                  <span>Recognitions & Leadership</span>
                </h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-500/20 flex items-start gap-3">
                    <span className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                      <Trophy className="w-5 h-5" />
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-100">OpenAI Academy × NxtWave Buildathon</h4>
                      <p className="text-xs text-amber-300 font-mono">State Level Winner | Selected for National Finale</p>
                      <p className="text-xs text-slate-400 mt-1">Recognized for building AI-driven solutions addressing safety and technological integration.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-cyan-500/20 flex items-start gap-3">
                    <span className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                      <Globe className="w-5 h-5" />
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-100">Leadership Roles at RIT Roorkee</h4>
                      <p className="text-xs text-cyan-300 font-mono">AWS Student Builder Group PR Head & IEEE Secretary</p>
                      <p className="text-xs text-slate-400 mt-1">Leading technical outreach, hosting AWS workshops, and organizing robotics and coding hackathons.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </motion.div>

          {/* Stats Grid Column */}
          <motion.div 
            className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {profileData.stats.map((stat, idx) => (
              <div key={idx} className="glass-card p-5 rounded-2xl border border-slate-800/80 flex flex-col justify-center items-start group hover:border-cyan-500/40 transition-all">
                <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-1">
                  {stat.label}
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-100 group-hover:text-cyan-300 transition-colors flex items-baseline gap-0.5">
                  <span>{stat.value}</span>
                  <span className="text-cyan-400 text-2xl">{stat.suffix}</span>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
