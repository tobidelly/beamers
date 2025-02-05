/* import React, { useState, useEffect } from "react";

const images = [
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFzaWMlMjBlZHVjYXRpb258ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFzaWMlMjBlZHVjYXRpb258ZW58MHx8MHx8fDA%3D",
];

export const HeroBackground: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          alt={`Background ${index + 1}`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/60 via-blue-800/80 to-blue-900/90"></div>
    </div>
  );
}; */

import React, { useState, useEffect } from "react";

const images = [
  "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJhc2ljJTIwZWR1Y2F0aW9ufGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFzaWMlMjBlZHVjYXRpb258ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFzaWMlMjBlZHVjYXRpb258ZW58MHx8MHx8fDA%3D",
  "https://media.istockphoto.com/id/1298932855/photo/red-ball-on-abacus.webp?a=1&b=1&s=612x612&w=0&k=20&c=WMXwu5zK9VUQ_AHNKdSTuuXp6kALlMYjSTIkCw9UZzI=",
  "https://images.unsplash.com/photo-1587586062323-836089e60d52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y3JheW9uc3xlbnwwfHwwfHx8MA%3D%3D",
];

export const HeroBackground: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          alt={`Background ${index + 1}`}
        />
      ))}
      
      {/* Reduced Overlay Opacity for Better Image Visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-blue-900/80"></div>
    </div>
  );
};
