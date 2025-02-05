import React from 'react';

interface HeroProps {
  setShowEnrollForm: (show: boolean) => void;
}

export const Hero: React.FC<HeroProps> = ({ setShowEnrollForm }) => {
  return (
    <div className="relative z-10 flex-grow flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Nurturing Tomorrow's
            <span className="text-blue-400"> Leaders</span>
            <br />Today
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Providing excellence in British-Nigerian curriculum education for kindergarten, 
            preschool, and primary levels. Join us in shaping the future of education.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setShowEnrollForm(true)}
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Begin Your Journey
            </button>
            <a 
              href="#about"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};