import { useState } from 'react';
import { Link } from 'wouter';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { ArcLabsLogo } from '@/components/ui/arc-labs-logo';

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
          <Link href="/" className="flex items-center space-x-3 impossible-glow group">
            <ArcLabsLogo size="md" />
            <span className="text-2xl font-light text-[hsl(var(--gray-900))] tracking-wide group-hover:text-[hsl(var(--google-blue))] transition-colors duration-300">
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
              className="relative w-12 h-12 liquid-glassmorphism rounded-2xl flex items-center justify-center text-[hsl(var(--gray-700))] hover:text-[hsl(var(--google-blue))] transition-all duration-300 impossible-glow"
            >
              <span className={`material-icons transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}>
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 liquid-glassmorphism border-t border-white/20 py-8 backdrop-blur-xl">
            <div className="flex flex-col space-y-6 px-6">
              <button 
                onClick={() => {
                  scrollToSection('services');
                  setIsMenuOpen(false);
                }}
                className="text-left text-[hsl(var(--gray-700))] hover:text-[hsl(var(--google-blue))] transition-all duration-300 font-light text-lg predictive-hint py-2"
              >
                Services
              </button>
              <button 
                onClick={() => {
                  scrollToSection('why-us');
                  setIsMenuOpen(false);
                }}
                className="text-left text-[hsl(var(--gray-700))] hover:text-[hsl(var(--google-blue))] transition-all duration-300 font-light text-lg predictive-hint py-2"
              >
                Why Us
              </button>
              <button 
                onClick={() => {
                  scrollToSection('packages');
                  setIsMenuOpen(false);
                }}
                className="text-left text-[hsl(var(--gray-700))] hover:text-[hsl(var(--google-blue))] transition-all duration-300 font-light text-lg predictive-hint py-2"
              >
                Solutions
              </button>
              <button 
                onClick={() => {
                  scrollToSection('portfolio');
                  setIsMenuOpen(false);
                }}
                className="text-left text-[hsl(var(--gray-700))] hover:text-[hsl(var(--google-blue))] transition-all duration-300 font-light text-lg predictive-hint py-2"
              >
                Portfolio
              </button>
              <div className="pt-4">
                <MagneticButton 
                  variant="primary"
                  size="md"
                  onClick={() => {
                    scrollToSection('contact');
                    setIsMenuOpen(false);
                  }}
                  className="w-full"
                  magneticStrength={0.3}
                >
                  Start Project
                </MagneticButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
