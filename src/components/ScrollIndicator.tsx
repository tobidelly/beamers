import React from 'react';

export const ScrollIndicator: React.FC = () => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
      <div className="animate-bounce">
        <div className="w-1 h-16 bg-white/20 rounded-full mx-auto"></div>
        <div className="w-3 h-3 bg-white rounded-full mx-auto -mt-3"></div>
      </div>
    </div>
  );
};