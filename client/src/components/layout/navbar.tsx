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
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500">
      <div className="bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-full shadow-lg px-8 py-4">
        <div className="flex items-center space-x-12">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <DivineLogo size="md" />
            <span className="text-xl font-semibold tracking-wide text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
              Arc <span className="font-light">Labs</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-slate-900 hover:text-blue-600 transition-all duration-300 font-medium text-sm"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('why-us')}
              className="text-slate-900 hover:text-blue-600 transition-all duration-300 font-medium text-sm"
            >
              Why Us
            </button>
            <button 
              onClick={() => scrollToSection('packages')}
              className="text-slate-900 hover:text-blue-600 transition-all duration-300 font-medium text-sm"
            >
              Solutions
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-slate-900 hover:text-blue-600 transition-all duration-300 font-medium text-sm"
            >
              Portfolio
            </button>
            <MagneticButton 
              variant="primary"
              size="sm"
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
              className="relative w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-slate-900 hover:text-blue-600 transition-all duration-300"
            >
              <svg className={`w-5 h-5 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
        
        {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl py-6 shadow-lg min-w-[280px]">
          <div className="flex flex-col space-y-4 px-6">
            <button 
              onClick={() => {
                scrollToSection('services');
                setIsMenuOpen(false);
              }}
              className="text-left text-slate-900 hover:text-blue-600 transition-all duration-300 font-medium text-sm py-2"
            >
              Services
            </button>
            <button 
              onClick={() => {
                scrollToSection('why-us');
                setIsMenuOpen(false);
              }}
              className="text-left text-slate-900 hover:text-blue-600 transition-all duration-300 font-medium text-sm py-2"
            >
              Why Us
            </button>
            <button 
              onClick={() => {
                scrollToSection('packages');
                setIsMenuOpen(false);
              }}
              className="text-left text-slate-900 hover:text-blue-600 transition-all duration-300 font-medium text-sm py-2"
            >
              Solutions
            </button>
            <button 
              onClick={() => {
                scrollToSection('portfolio');
                setIsMenuOpen(false);
              }}
              className="text-left text-slate-900 hover:text-blue-600 transition-all duration-300 font-medium text-sm py-2"
            >
              Portfolio
            </button>
            <div className="pt-2">
              <MagneticButton 
                variant="primary"
                size="sm"
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
    </nav>
  );
};
