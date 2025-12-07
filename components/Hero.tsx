import React from 'react';
import { Mail, MapPin, ChevronDown, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-dark overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center md:text-left grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 space-y-8">
          <div className="space-y-2">
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm">Portfolio</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-light">
              {PERSONAL_INFO.title}
            </p>
          </div>

          <p className="text-slate-300 leading-relaxed max-w-lg mx-auto md:mx-0">
            A dedicated software developer building robust backend systems and intuitive user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </a>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-700 text-base font-medium rounded-md text-slate-300 bg-transparent hover:bg-slate-800 transition-all duration-300"
            >
              Learn More
            </button>
          </div>

          <div className="flex items-center justify-center md:justify-start space-x-6 text-slate-400 text-sm">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-secondary" />
              {PERSONAL_INFO.location}
            </div>
            <div className="flex items-center">
              <ShieldCheck className="h-4 w-4 mr-2 text-secondary" />
              WhiteHat Recognized
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
           <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-primary to-secondary p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden relative">
                  <span className="text-9xl font-bold text-slate-800 select-none">CK</span>
                  <img 
                    src={`https://ui-avatars.com/api/?name=Collins+Kiplagat&background=0f172a&color=38bdf8&size=512&font-size=0.33`} 
                    alt="Collins Kiplagat"
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                  />
              </div>
           </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <ChevronDown className="h-8 w-8 text-slate-500" />
      </div>
    </div>
  );
};

export default Hero;