import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { DivineLogo } from '@/components/ui/divine-logo';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const heroHeight = window.innerHeight * 0.8; // Approximate hero section height
      setIsScrolled(scrollTop > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-lg border-b transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/10 border-white/20' 
        : 'bg-white/5 border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <DivineLogo size="md" />
            <span className={`text-2xl font-semibold tracking-wide group-hover:text-blue-300 transition-colors duration-300 ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}>
              Arc <span className="font-light">Labs</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className={`hover:text-blue-600 transition-all duration-300 font-medium text-lg ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('why-us')}
              className={`hover:text-blue-600 transition-all duration-300 font-medium text-lg ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              Why Us
            </button>
            <button 
              onClick={() => scrollToSection('packages')}
              className={`hover:text-blue-600 transition-all duration-300 font-medium text-lg ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              Solutions
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className={`hover:text-blue-600 transition-all duration-300 font-medium text-lg ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}
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
              className="relative w-12 h-12 bg-white/80 backdrop-blur-md rounded-xl flex items-center justify-center text-slate-700 hover:text-blue-600 transition-all duration-300 shadow-md"
            >
              <svg className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-200/50 py-8 shadow-lg">
            <div className="flex flex-col space-y-6 px-6">
              <button 
                onClick={() => {
                  scrollToSection('services');
                  setIsMenuOpen(false);
                }}
                className="text-left text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium text-lg py-2"
              >
                Services
              </button>
              <button 
                onClick={() => {
                  scrollToSection('why-us');
                  setIsMenuOpen(false);
                }}
                className="text-left text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium text-lg py-2"
              >
                Why Us
              </button>
              <button 
                onClick={() => {
                  scrollToSection('packages');
                  setIsMenuOpen(false);
                }}
                className="text-left text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium text-lg py-2"
              >
                Solutions
              </button>
              <button 
                onClick={() => {
                  scrollToSection('portfolio');
                  setIsMenuOpen(false);
                }}
                className="text-left text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium text-lg py-2"
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
