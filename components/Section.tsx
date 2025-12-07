import React from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "" }) => {
  return (
    <section id={id} className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
      {(title || subtitle) && (
        <div className="mb-12">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              {title}
              <span className="block h-1 w-20 bg-primary mt-2 rounded-full"></span>
            </h2>
          )}
          {subtitle && <p className="text-slate-400 text-lg max-w-2xl">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
};

export default Section;