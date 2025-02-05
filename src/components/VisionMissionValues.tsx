import React from 'react';
import { Target, Compass, Heart } from 'lucide-react';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
    <div className="flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

export const VisionMissionValues: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Foundation
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Beamers International Schools, we are guided by clear principles that shape our 
            educational approach and community values.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard
            icon={<Target className="w-12 h-12 text-blue-600" />}
            title="Our Vision"
            description="To be a leading educational institution that nurtures global citizens who are innovative, 
            compassionate, and equipped to excel in an ever-changing world."
          />
          
          <ValueCard
            icon={<Compass className="w-12 h-12 text-blue-600" />}
            title="Our Mission"
            description="To provide exceptional education through a blend of British-Nigerian curriculum, fostering 
            academic excellence, character development, and cultural awareness."
          />
          
          <ValueCard
            icon={<Heart className="w-12 h-12 text-blue-600" />}
            title="Core Values"
            description="Excellence, Integrity, Innovation, Cultural Integration, and Community Service form the 
            foundation of our educational philosophy."
          />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Excellence",
              description: "Striving for the highest standards in education and character"
            },
            {
              title: "Integrity",
              description: "Upholding honesty, ethics, and accountability in all actions"
            },
            {
              title: "Innovation",
              description: "Embracing creative approaches to teaching and learning"
            },
            {
              title: "Community",
              description: "Building strong relationships between school, family, and society"
            }
          ].map((value, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
              <p className="text-sm text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};