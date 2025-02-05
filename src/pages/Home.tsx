import React from 'react';
import { Navigation } from '../components/Navigation';
import { HeroBackground } from '../components/HeroBackground';
import { Hero } from '../components/Hero';
import { ScrollIndicator } from '../components/ScrollIndicator';
import { Stats } from '../components/Stats';
import { VisionMissionValues } from '../components/VisionMissionValues';
import { About } from '../components/About';
import { Curriculum } from '../components/Curriculum';
import { Gallery } from '../components/Gallery';
import { Footer } from '../components/Footer';
import { WhatsAppChat } from '../components/WhatsAppChat';

interface HomeProps {
  showEnrollForm: boolean;
  setShowEnrollForm: (show: boolean) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export const Home: React.FC<HomeProps> = ({
  showEnrollForm,
  setShowEnrollForm,
  isMobileMenuOpen,
  setIsMobileMenuOpen
}) => {
  return (
    <>
      <header className="relative min-h-screen flex flex-col">
        <HeroBackground />
        <Navigation 
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          setShowEnrollForm={setShowEnrollForm}
        />
        <Hero setShowEnrollForm={setShowEnrollForm} />
        <ScrollIndicator />
      </header>

      <Stats />
      <VisionMissionValues />
      <About />
      <Curriculum />
      <Gallery />
      <WhatsAppChat />
    </>
  );
};