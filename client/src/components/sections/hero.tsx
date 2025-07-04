import { useEffect } from 'react';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { FloatingLogo } from '@/components/3d/floating-logo';
import { ParticleBackground } from '@/components/3d/particle-background';
import { initScrollAnimations } from '@/lib/gsap-animations';

export const HeroSection = () => {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 min-h-screen flex items-center relative overflow-hidden">
      <ParticleBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <FloatingLogo />
          
          <h1 className="hero-title text-5xl md:text-7xl font-light text-[hsl(var(--gray-900))] mb-6 leading-tight">
            The Premier Choice for
            <br />
            <span className="font-medium bg-gradient-to-r from-[hsl(var(--google-blue))] to-[hsl(var(--google-green))] bg-clip-text text-transparent">
              Enterprise Web Development
            </span>
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl text-[hsl(var(--gray-700))] mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            We build modern, scalable web applications that drive business growth. 
            From AI-powered solutions to enterprise platforms, Arc Labs delivers results that matter.
          </p>
          
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center">
            <MagneticButton 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              magneticStrength={0.4}
            >
              Start Your Project
            </MagneticButton>
            <MagneticButton 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('portfolio')}
              magneticStrength={0.4}
            >
              View Our Work
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};
