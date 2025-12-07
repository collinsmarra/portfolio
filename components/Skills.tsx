import React from 'react';
import Section from './Section';
import { SKILLS } from '../constants';
import { Code, Server, Terminal, Cloud } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Language': return <Code className="h-4 w-4" />;
      case 'Platform': return <Cloud className="h-4 w-4" />;
      case 'Tool': return <Terminal className="h-4 w-4" />;
      default: return <Server className="h-4 w-4" />;
    }
  };

  return (
    <Section id="skills" title="Technical Arsenal" className="bg-dark">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((skill) => (
          <div 
            key={skill.name}
            className="group flex items-center p-4 bg-card border border-slate-700 rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className={`p-3 rounded-md mr-4 bg-slate-800 group-hover:bg-primary/20 group-hover:text-primary transition-colors text-slate-400`}>
              {getIcon(skill.category)}
            </div>
            <div>
              <h3 className="text-white font-medium">{skill.name}</h3>
              <p className="text-xs text-slate-500 uppercase tracking-wider">{skill.category}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;