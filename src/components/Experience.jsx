import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/experience';
import { Cloud, Globe, Cpu, CheckCircle2, Briefcase } from 'lucide-react';

const iconMap = { Cloud, Globe, Cpu };

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950 grid-bg border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
            Leadership & Roles
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight mt-4">
            Leadership & <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3">
            Active roles driving student technical outreach, IEEE events, and hardware coding initiatives.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8 relative">
          
          {/* Vertical Connecting Line */}
          <div className="absolute top-4 bottom-4 left-6 sm:left-8 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-slate-800 pointer-events-none hidden sm:block"></div>

          {experienceData.map((item, idx) => {
            const Icon = iconMap[item.icon] || Briefcase;
            return (
              <motion.div
                key={item.role + item.organization}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative flex flex-col sm:flex-row gap-6 items-start"
              >
                {/* Marker Node */}
                <div className="z-10 p-3 rounded-2xl bg-slate-900 border border-cyan-500/40 text-cyan-400 shadow-xl shrink-0 hidden sm:flex">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Main Card */}
                <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/80 flex-grow w-full hover:border-cyan-500/40 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-800/80">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-100">{item.role}</h3>
                      <p className="text-xs sm:text-sm font-semibold text-cyan-400 font-mono">{item.organization}</p>
                    </div>
                    <div className="flex flex-col sm:items-end">
                      <span className="text-xs font-mono text-purple-300">{item.institution}</span>
                      <span className="text-[11px] font-mono text-slate-400">{item.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {item.highlights.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
