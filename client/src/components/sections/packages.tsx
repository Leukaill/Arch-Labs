import { MagneticButton } from '@/components/ui/magnetic-button';
import { GlassmorphismCard } from '@/components/ui/glassmorphism-card';

const packages = [
  {
    name: 'Neural Starter',
    description: 'AI-Enhanced Foundation',
    price: '$25,000',
    icon: 'psychology',
    gradient: 'from-[hsl(var(--google-blue))] to-blue-600',
    features: [
      'AI-powered responsive design',
      'Neural content management',
      'Predictive SEO optimization',
      'Quantum-fast loading speeds',
      'Reality-bending animations',
      '6 months neural support'
    ],
    variant: 'primary' as const,
    buttonText: 'Initialize System',
    delay: '0s'
  },
  {
    name: 'Quantum Professional',
    description: 'Enterprise Mind-Meld',
    price: '$65,000',
    icon: 'auto_awesome',
    gradient: 'from-[hsl(var(--google-green))] to-green-600',
    features: [
      'Everything in Neural Starter',
      'Holographic user interfaces',
      'Interdimensional API integration',
      'Impossible performance metrics',
      'Telepathic user experience',
      'Reality distortion effects',
      '12 months quantum support',
      'Dedicated neural architect'
    ],
    variant: 'impossible' as const,
    buttonText: 'Transcend Reality',
    popular: true,
    delay: '0.1s'
  },
  {
    name: 'Impossible Enterprise',
    description: 'Beyond Human Comprehension',
    price: '$150,000',
    icon: 'electrical_services',
    gradient: 'from-[hsl(var(--google-yellow))] to-yellow-600',
    features: [
      'Everything in Quantum Professional',
      'Time-traveling architecture',
      'Parallel universe deployment',
      'Consciousness-level security',
      'Infinite scalability matrix',
      'Reality-rewriting capabilities',
      'Lifetime dimensional support',
      'Arc Labs neural collective'
    ],
    variant: 'primary' as const,
    buttonText: 'Achieve Impossibility',
    delay: '0.2s'
  }
];

export const PackagesSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="py-32 relative overflow-hidden neural-network-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="cinematic-entrance">
            <h2 className="text-5xl md:text-7xl font-thin text-[hsl(var(--gray-900))] mb-8 tracking-tight">
              Impossible <span className="font-medium italic bg-gradient-to-r from-[hsl(var(--google-blue))] via-[hsl(var(--google-green))] to-[hsl(var(--google-yellow))] bg-clip-text text-transparent">Solutions</span>
            </h2>
          </div>
          <div className="cinematic-entrance" style={{ animationDelay: '0.3s' }}>
            <p className="text-2xl text-[hsl(var(--gray-700))] max-w-4xl mx-auto font-light leading-relaxed">
              Choose your level of impossibility. Each solution transcends traditional web development boundaries.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className="cinematic-entrance relative" 
              style={{ animationDelay: pkg.delay }}
            >
              {pkg.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-[hsl(var(--google-yellow))] to-yellow-500 text-[hsl(var(--gray-900))] px-6 py-2 rounded-full text-sm font-medium premium-shadow-xl levitating">
                    Most Impossible
                  </div>
                </div>
              )}
              
              <GlassmorphismCard 
                variant="impossible" 
                className={`relative group cursor-pointer h-full ${pkg.popular ? 'scale-105 ring-2 ring-[hsl(var(--google-yellow))]/30' : ''}`}
              >
                <div className="text-center mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${pkg.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 levitating premium-shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                    <span className="material-icons text-white text-3xl">{pkg.icon}</span>
                  </div>
                  <h3 className="text-2xl font-medium text-[hsl(var(--gray-900))] mb-3 group-hover:text-[hsl(var(--google-blue))] transition-colors duration-300">
                    {pkg.name}
                  </h3>
                  <p className="text-[hsl(var(--gray-700))] mb-6 font-light">{pkg.description}</p>
                  <div className="mb-8">
                    <span className="text-4xl font-light text-[hsl(var(--gray-900))]">{pkg.price}</span>
                    <span className="text-[hsl(var(--gray-700))] ml-2 font-light">reality shift</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="material-icons text-[hsl(var(--google-green))] mr-3 mt-0.5 text-lg">check_circle</span>
                      <span className="text-[hsl(var(--gray-700))] font-light leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <MagneticButton 
                  variant={pkg.variant}
                  size="lg"
                  className="w-full"
                  onClick={scrollToContact}
                  magneticStrength={0.5}
                >
                  {pkg.buttonText}
                </MagneticButton>
                
                {/* Progress Indicator */}
                <div className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${pkg.gradient} rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out`}
                  ></div>
                </div>
              </GlassmorphismCard>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-[hsl(var(--google-blue))]/5 to-transparent rounded-full blur-3xl levitating"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-[hsl(var(--google-green))]/5 to-transparent rounded-full blur-3xl levitating" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-56 h-56 bg-gradient-to-r from-[hsl(var(--google-yellow))]/3 to-transparent rounded-full blur-3xl levitating" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </section>
  );
};
