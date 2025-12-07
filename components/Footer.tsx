import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">{PERSONAL_INFO.name}</h3>
            <p className="text-slate-500">Building secure and scalable digital solutions.</p>
          </div>
          
          <div className="flex flex-col gap-3">
             <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center text-slate-400 hover:text-primary transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                {PERSONAL_INFO.email}
             </a>
             <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center text-slate-400 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                {PERSONAL_INFO.phone}
             </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-900 text-center text-slate-600 text-sm">
          <p>&copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;