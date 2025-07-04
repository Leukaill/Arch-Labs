import { useState } from 'react';
import { Link } from 'wouter';
import { MagneticButton } from '@/components/ui/magnetic-button';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 liquid-glassmorphism border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 impossible-glow">
            <div className="relative w-12 h-12">
              {/* Logo Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--google-blue))] via-[hsl(var(--google-green))] to-[hsl(var(--google-yellow))] rounded-2xl levitating premium-shadow-xl"></div>
              
              {/* Logo Symbol */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 32 32" className="text-white">
                  <path
                    d="M6 26 Q16 6 26 26"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    className="data-stream"
                  />
                  <circle cx="6" cy="26" r="1.5" fill="currentColor" />
                  <circle cx="16" cy="14" r="2" fill="currentColor" />
                  <circle cx="26" cy="26" r="1.5" fill="currentColor" />
                </svg>
              </div>
            </div>
            <span className="text-2xl font-light text-[hsl(var(--gray-900))] tracking-wide">
              Arc <span className="font-medium">Labs</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-[hsl(var(--gray-700))] hover:text-[hsl(var(--google-blue))] transition-all duration-300 font-light text-lg predictive-hint future-magnetic"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('why-us')}
              className="text-[hsl(var(--gray-700))] hover:text-[hsl(var(--google-blue))] transition-all duration-300 font-light text-lg predictive-hint future-magnetic"
            >
              Why Us
            </button>
            <button 
              onClick={() => scrollToSection('packages')}
              className="text-[hsl(var(--gray-700))] hover:text-[hsl(var(--google-blue))] transition-all duration-300 font-light text-lg predictive-hint future-magnetic"
            >
              Solutions
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-[hsl(var(--gray-700))] hover:text-[hsl(var(--google-blue))] transition-all duration-300 font-light text-lg predictive-hint future-magnetic"
            >
              Portfolio
            </button>
            <MagneticButton 
              variant="primary"
              size="md"
              onClick={() => scrollToSection('contact')}
              magneticStrength={0.5}
            >
              Start Project
            </MagneticButton>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[hsl(var(--gray-700))] hover:text-[hsl(var(--google-blue))]"
            >
              <span className="material-icons">menu</span>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t border-[hsl(var(--border))] py-4">
            <div className="flex flex-col space-y-4 px-4">
              <button 
                onClick={() => {
                  scrollToSection('services');
                  setIsMenuOpen(false);
                }}
                className="text-left text-[hsl(var(--gray-700))] hover:text-[hsl(var(--google-blue))] transition-colors duration-200"
              >
                Services
              </button>
              <button 
                onClick={() => {
                  scrollToSection('why-us');
                  setIsMenuOpen(false);
                }}
                className="text-left text-[hsl(var(--gray-700))] hover:text-[hsl(var(--google-blue))] transition-colors duration-200"
              >
                Why Us
              </button>
              <button 
                onClick={() => {
                  scrollToSection('packages');
                  setIsMenuOpen(false);
                }}
                className="text-left text-[hsl(var(--gray-700))] hover:text-[hsl(var(--google-blue))] transition-colors duration-200"
              >
                Packages
              </button>
              <button 
                onClick={() => {
                  scrollToSection('portfolio');
                  setIsMenuOpen(false);
                }}
                className="text-left text-[hsl(var(--gray-700))] hover:text-[hsl(var(--google-blue))] transition-colors duration-200"
              >
                Portfolio
              </button>
              <MagneticButton 
                onClick={() => {
                  scrollToSection('contact');
                  setIsMenuOpen(false);
                }}
                className="w-full"
              >
                Get Started
              </MagneticButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
