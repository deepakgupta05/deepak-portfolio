import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../data/education';
import { GraduationCap, MapPin, Calendar, CheckCircle2, BookOpen } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-950/90 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight mt-4">
            Education <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3">
            Formal undergraduate engineering degree program in Electronics & Communication Engineering.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-800/80 shadow-2xl relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800/80">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400 shrink-0">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 font-medium">
                      {edu.status}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-100 mt-2">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-purple-300 font-mono mt-1">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:items-end text-xs font-mono text-slate-400 space-y-1">
                  <div className="flex items-center gap-1.5 text-cyan-300 font-medium">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>Program Highlights & Technical Focus</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {edu.details.map((detail, dIdx) => (
                    <div key={dIdx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/60 flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
