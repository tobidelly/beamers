import React from 'react';
import { Users, GraduationCap, Globe2 } from 'lucide-react';

export const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900">6+</h3>
            <p className="text-gray-600">Started with 6 pupils in 2022</p>
          </div>
          <div className="text-center">
            <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900">K-12</h3>
            <p className="text-gray-600">Comprehensive Education</p>
          </div>
          <div className="text-center">
            <Globe2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900">Dual</h3>
            <p className="text-gray-600">British-Nigerian Curriculum</p>
          </div>
        </div>
      </div>
    </section>
  );
};