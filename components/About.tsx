import React from 'react';
import Section from './Section';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-dark">
      <div className="bg-card rounded-2xl p-8 md:p-12 border border-slate-700 shadow-2xl relative">
        <div className="absolute -top-6 left-8 bg-primary text-white px-4 py-2 rounded-lg font-bold shadow-lg">
          About Me
        </div>
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
          {PERSONAL_INFO.summary}
        </p>
        <div className="mt-8 pt-8 border-t border-slate-700 flex flex-wrap gap-4 text-sm text-slate-400">
             <span className="flex items-center">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Open to Remote Work
             </span>
             <span className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Cybersecurity Enthusiast
             </span>
             <span className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Full Stack Developer
             </span>
        </div>
      </div>
    </Section>
  );
};

export default About;