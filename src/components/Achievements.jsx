import React from 'react';
import { motion } from 'framer-motion';
import { achievementsData } from '../data/achievements';
import { Trophy, Zap, Award, CheckCircle2, Sparkles } from 'lucide-react';

const iconMap = { Trophy, Zap, Award, Sparkles };

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-slate-950 grid-bg border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
            Honors & Awards
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight mt-4">
            Key <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3">
            Hackathons, technical buildathons, and innovation contest recognitions.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {achievementsData.map((item, idx) => {
            const Icon = iconMap[item.icon] || Trophy;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800/80 flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300"
              >
                <div>
                  {/* Badge & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono font-bold text-amber-300">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 mb-1 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs font-mono text-cyan-400 mb-4">
                    {item.organization}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Details Checklist */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  {item.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
