import React from 'react';
import { Clock, Award } from 'lucide-react';
import logo from './Assets/logo.png';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About Beamers International Schools
            </h2>
            <p className="text-gray-600 mb-6">
              Since our founding in September 2022, we've been committed to providing 
              an exceptional educational experience that combines the best of British 
              and Nigerian curricula. Our approach focuses on developing well-rounded 
              individuals through comprehensive learning activities.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700">Founded September 12, 2022</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700">EYFS Certified Program</span>
              </div>
            </div>
          </div>
          <div className="relative h-[400px]">
            <img
              src={logo}
              /*className="w-full h-full object-cover rounded-lg shadow-xl" */
              className="w-full h-full object-contain rounded-lg shadow-xl"

              alt="logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};