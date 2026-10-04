import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';
import { Code2, Cpu, Globe, Cloud, Wrench, Sparkles, Terminal, FileCode, Code, FileJson, Coffee, Radio, CircuitBoard, Binary, Activity, Zap, Layout, Atom, Server, Database, CloudSun, Flame, GitBranch, PlaySquare, Image, Brain, MessageSquare, BookOpen, TrendingUp } from 'lucide-react';

const iconMap = {
  Code2, Cpu, Globe, Cloud, Wrench, Sparkles, Terminal, FileCode, Code, FileJson, Coffee, Radio, CircuitBoard, Binary, Activity, Zap, Layout, Atom, Server, Database, CloudSun, Flame, GitBranch, PlaySquare, Image, Brain, MessageSquare, BookOpen, TrendingUp
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Programming Languages', 'Embedded Systems & IoT', 'Web Development', 'Cloud & Platforms', 'Tools & IDEs'];

  const filteredSkillsData = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(cat => cat.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950 grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
            Technical Matrix
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight mt-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3">
            Hardware microcontrollers, programming logic, full-stack web architectures, and cloud services.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'glass-card text-slate-400 hover:text-slate-200 hover:bg-slate-900/80 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Category Cards */}
        <div className="space-y-10">
          {filteredSkillsData.map((categoryGroup, idx) => {
            const CategoryIcon = iconMap[categoryGroup.icon] || Code2;
            return (
              <motion.div
                key={categoryGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/80"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/80">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30">
                    <CategoryIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-100">{categoryGroup.category}</h3>
                  <span className="ml-auto text-xs font-mono text-slate-400">
                    {categoryGroup.skills.length} Skills
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryGroup.skills.map((skill) => {
                    const SkillIcon = iconMap[skill.icon] || Code2;
                    return (
                      <div key={skill.name} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/60 hover:border-cyan-500/30 transition-all group">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2.5">
                            <SkillIcon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                            <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-xs font-mono text-cyan-400 font-medium">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
