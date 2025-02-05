import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { EnrollmentForm } from './components/EnrollmentForm';
import { Home } from './pages/Home';
import { Admissions } from './pages/Admissions';
import { Contact } from './pages/Contact';

function App() {
  const [showEnrollForm, setShowEnrollForm] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={
            <Home 
              showEnrollForm={showEnrollForm}
              setShowEnrollForm={setShowEnrollForm}
              isMobileMenuOpen={isMobileMenuOpen}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
          } />
          <Route path="/admissions" element={
            <>
              <Navigation 
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                setShowEnrollForm={setShowEnrollForm}
              />
              <Admissions />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Navigation 
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                setShowEnrollForm={setShowEnrollForm}
              />
              <Contact />
            </>
          } />
        </Routes>

        <Footer />

        {showEnrollForm && (
          <EnrollmentForm 
            onClose={() => setShowEnrollForm(false)}
            onSubmit={(e) => {
              e.preventDefault();
              setShowEnrollForm(false);
              alert('Thank you for your interest! We will contact you shortly.');
            }}
          />
        )}
      </div>
    </Router>
  );
}

export default App;