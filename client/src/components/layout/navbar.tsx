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
    <nav className="fixed top-0 w-full z-50 glassmorphism">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[hsl(var(--google-blue))] rounded-full flex items-center justify-center floating">
              <span className="material-icons text-white text-lg">rocket_launch</span>
            </div>
            <span className="text-xl font-medium text-[hsl(var(--gray-900))]">Arc Labs</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-[hsl(var(--gray-700))] hover:text-[hsl(var(--google-blue))] transition-colors duration-200"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('why-us')}
              className="text-[hsl(var(--gray-700))] hover:text-[hsl(var(--google-blue))] transition-colors duration-200"
            >
              Why Us
            </button>
            <button 
              onClick={() => scrollToSection('packages')}
              className="text-[hsl(var(--gray-700))] hover:text-[hsl(var(--google-blue))] transition-colors duration-200"
            >
              Packages
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-[hsl(var(--gray-700))] hover:text-[hsl(var(--google-blue))] transition-colors duration-200"
            >
              Portfolio
            </button>
            <MagneticButton onClick={() => scrollToSection('contact')}>
              Get Started
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
