import React from 'react';
import { GraduationCap, CheckCircle, Clock, CalendarCheck, Star } from 'lucide-react';

export const Admissions: React.FC = () => {
  const admissionSteps = [
    {
      icon: CheckCircle,
      title: "Submit Application",
      description: "Complete our comprehensive online application form with all necessary documentation."
    },
    {
      icon: Clock,
      title: "Assessment",
      description: "Students undergo age-appropriate assessment to determine their academic level."
    },
    {
      icon: CalendarCheck,
      title: "Interview",
      description: "Parents and students meet with our academic team for a personal interview."
    },
    {
      icon: GraduationCap,
      title: "Enrollment",
      description: "Upon acceptance, complete the enrollment process and join our community."
    }
  ];

  const offerings = [
    { title: "Serene environment", description: "A peaceful and conducive atmosphere for learning" },
    { title: "Excellent staff", description: "Highly qualified and dedicated teaching professionals" },
    { title: "Quality education", description: "Comprehensive curriculum meeting international standards" },
    { title: "Reading club", description: "Fostering a love for literature and learning" },
    { title: "Good handwriting skills", description: "Emphasis on proper penmanship and presentation" },
    { title: "Excellent diction", description: "Focus on clear communication and language skills" },
    { title: "Positive Mentality", description: "Nurturing growth mindset and emotional intelligence" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 opacity-90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Now Open for
            <span className="block text-blue-400">Admission</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mb-8">
            Join our community of learners and unlock your child's full potential
          </p>
          <button
            onClick={() => window.location.href = '#admission-process'}
            className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg"
          >
            Begin Application
          </button>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Beamers International Schools, we provide a comprehensive educational experience
              that nurtures both academic excellence and personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <Star className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {offering.title}
                    </h3>
                    <p className="text-gray-600">{offering.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Admission Process Section */}
      <div id="admission-process" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Admission Process</h2>
            <div className="space-y-8">
              {admissionSteps.map((step, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Birth Certificate</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Previous School Records</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Immunization Records</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Passport Photographs</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Parent/Guardian ID</span>
              </li>
            </ul>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">School Fees</h3>
              <p className="text-gray-600 mb-4">
                Our fee structure is designed to provide value while maintaining our high standards of education.
                Please contact our admissions office for detailed fee information.
              </p>
              <button
                onClick={() => window.location.href = 'mailto:info@beamers.sch.ng'}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full"
              >
                Request Fee Structure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};