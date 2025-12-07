import React from 'react';
import Section from './Section';
import { EXPERIENCES, EDUCATION, AWARDS } from '../constants';
import { Briefcase, Calendar, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Journey & Experience" className="bg-slate-900/50">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Work History */}
        <div className="md:col-span-2 space-y-8">
          <h3 className="text-2xl font-bold text-white flex items-center mb-6">
            <Briefcase className="mr-3 h-6 w-6 text-primary" />
            Professional History
          </h3>
          <div className="relative border-l border-slate-700 ml-3 space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <div key={exp.id} className="relative pl-8 md:pl-12">
                <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-slate-900"></span>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                    <span className="inline-flex items-center text-sm text-primary font-medium mt-1 sm:mt-0">
                        <Calendar className="mr-1.5 h-3.5 w-3.5" />
                        {exp.period}
                    </span>
                </div>
                <h5 className="text-lg text-slate-300 mb-4 font-medium">{exp.company}</h5>
                <p className="text-slate-400 leading-relaxed mb-4">
                  {exp.description}
                </p>
                {exp.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map(tech => (
                      <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Education & Awards Column */}
        <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center mb-6">
                <GraduationCap className="mr-3 h-6 w-6 text-secondary" />
                Education
              </h3>
              <div className="bg-card p-6 rounded-xl border border-slate-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-bl-full -mr-4 -mt-4"></div>
                <h4 className="text-lg font-bold text-white mb-2">{EDUCATION.degree}</h4>
                <p className="text-slate-300 mb-1">{EDUCATION.school}</p>
                <p className="text-sm text-slate-500">{EDUCATION.year}</p>
              </div>
            </div>

            {AWARDS.length > 0 && (
              <div>
                   <h3 className="text-2xl font-bold text-white flex items-center mb-6">
                      <span className="mr-3 text-2xl">🏆</span>
                      Recognition
                    </h3>
                    <div className="space-y-4">
                        {AWARDS.map((award) => (
                          <div key={award.id} className="bg-gradient-to-r from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700">
                              <h4 className="font-bold text-white mb-2">{award.title}</h4>
                              <p className="text-slate-400 text-sm mb-3">Recognized for responsible vulnerability disclosure and cybersecurity contributions.</p>
                              <div className="flex gap-2">
                                  <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20">{award.issuer}</span>
                              </div>
                          </div>
                        ))}
                    </div>
              </div>
            )}
        </div>
      </div>
    </Section>
  );
};

export default Experience;