import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { certificationsData } from '../data/certifications';
import { Cpu, CircuitBoard, Cloud, FileCode, Code, Binary, Sparkles, BarChart3, Table, ShieldCheck } from 'lucide-react';

const iconMap = {
  Cpu, CircuitBoard, Cloud, FileCode, Code, Binary, Sparkles, BarChart3, Table
};

export const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'IoT & Embedded', 'Microcontrollers', 'Cloud & AI', 'Programming', 'Embedded Systems', 'Artificial Intelligence', 'Data Science', 'Productivity'];

  const filteredCerts = activeCategory === 'All'
    ? certificationsData
    : certificationsData.filter(c => c.category === activeCategory);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-950/90 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
            Verified Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight mt-4">
            Professional <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3">
            Academic & industry credentials earned from IIT Roorkee, AWS, L&T Edutech, Cisco, Texas Instruments, and Google Cloud.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.slice(0, 6).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'glass-card text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, idx) => {
            const Icon = iconMap[cert.icon] || ShieldCheck;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card rounded-2xl p-6 border border-slate-800/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-cyan-300" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-purple-300">
                      {cert.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors mb-1">
                    {cert.title}
                  </h3>

                  <p className="text-xs font-mono text-cyan-400 font-semibold mb-3">
                    {cert.issuer}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1 text-cyan-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Academic Certification</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
