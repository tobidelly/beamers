import React from 'react';
import { BookOpen, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "X (Twitter)" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-6 w-6" />
              <span className="font-bold text-lg">Beamers International</span>
            </div>
            <p className="text-gray-400">
              Nurturing tomorrow's leaders through quality education.
            </p>
            <div className="mt-6">
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#curriculum" className="hover:text-white">Curriculum</a></li>
              <li><a href="#admissions" className="hover:text-white">Admissions</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="flex items-start space-x-2 text-gray-400">
              <Phone className="h-5 w-5 mt-1 flex-shrink-0" />
              <div>
                <p>08082967224</p>
                <p>08130992097</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Mail className="h-5 w-5 flex-shrink-0" />
              <p>info@beamers.sch.ng</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold mb-4">Location</h3>
            <div className="flex items-start space-x-2 text-gray-400">
              <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
              <p>Plot 3, Close A, Oliver Omeje Avenue, Abijo GRA, Lekki-Epe Expressway, Lagos</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Beamers International Schools. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};