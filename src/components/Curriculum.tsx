import React from 'react';
import { BookOpen, GraduationCap, Users } from 'lucide-react';

export const Curriculum: React.FC = () => {
  return (
    <section id="curriculum" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Curriculum
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Early Years",
              description: "Foundation stage focusing on essential development areas",
              icon: BookOpen
            },
            {
              title: "Primary Education",
              description: "Blend of British and Nigerian curriculum standards",
              icon: GraduationCap
            },
            {
              title: "Special Programs",
              description: "Mathematics, literacy, communication and language focus",
              icon: Users
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <item.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};