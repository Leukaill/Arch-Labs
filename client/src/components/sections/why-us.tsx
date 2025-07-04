import { GlassmorphismCard } from '@/components/ui/glassmorphism-card';

const benefits = [
  {
    icon: 'electrical_services',
    title: 'Neural Architecture Mastery',
    description: 'We architect digital realities that learn, adapt, and evolve, creating systems that transcend traditional web limitations.',
    gradient: 'from-[hsl(var(--google-blue))] to-blue-600',
    delay: '0s'
  },
  {
    icon: 'psychology',
    title: 'Consciousness-Level AI',
    description: 'Our AI implementations operate beyond machine learning, creating interfaces that understand user intent before interaction.',
    gradient: 'from-[hsl(var(--google-green))] to-green-600',
    delay: '0.1s'
  },
  {
    icon: 'shield',
    title: 'Quantum Security Matrix',
    description: 'Multi-dimensional security protocols that protect your data across parallel realities and future timelines.',
    gradient: 'from-[hsl(var(--google-yellow))] to-yellow-600',
    delay: '0.2s'
  },
  {
    icon: 'auto_awesome',
    title: 'Impossible Performance',
    description: 'We deliver results that defy physics: instantaneous loading, infinite scalability, and zero-latency interactions.',
    gradient: 'from-[hsl(var(--google-red))] to-red-600',
    delay: '0.3s'
  }
];

export const WhyUsSection = () => {
  return (
    <section id="why-us" className="benefits-section py-32 relative overflow-hidden bg-gradient-to-b from-white via-[hsl(var(--gray-50))] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="cinematic-entrance">
            <h2 className="text-5xl md:text-7xl font-thin text-[hsl(var(--gray-900))] mb-8 tracking-tight">
              Why We're <span className="font-medium italic bg-gradient-to-r from-[hsl(var(--google-blue))] via-[hsl(var(--google-green))] to-[hsl(var(--google-yellow))] bg-clip-text text-transparent">Impossible</span>
            </h2>
          </div>
          <div className="cinematic-entrance" style={{ animationDelay: '0.3s' }}>
            <p className="text-2xl text-[hsl(var(--gray-700))] max-w-4xl mx-auto font-light leading-relaxed">
              We don't just exceed expectations—we redefine what's possible in the digital universe.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="cinematic-entrance benefit-card text-center group"
              style={{ animationDelay: benefit.delay }}
            >
              <GlassmorphismCard variant="liquid" className="h-full physics-hover">
                <div className="relative mb-8">
                  <div className={`w-24 h-24 bg-gradient-to-br ${benefit.gradient} rounded-3xl flex items-center justify-center mx-auto levitating premium-shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                    <span className="material-icons text-white text-4xl">{benefit.icon}</span>
                  </div>
                  
                  {/* Floating Energy Dots */}
                  <div className="absolute -inset-6 pointer-events-none">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-[hsl(var(--google-blue))] rounded-full levitating opacity-50"
                        style={{
                          top: `${20 + Math.random() * 60}%`,
                          left: `${20 + Math.random() * 60}%`,
                          animationDelay: `${i * 0.7}s`,
                          animationDuration: `${3 + Math.random() * 2}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                <h3 className="text-2xl font-medium text-[hsl(var(--gray-900))] mb-6 leading-tight group-hover:text-[hsl(var(--google-blue))] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-[hsl(var(--gray-700))] leading-relaxed font-light">
                  {benefit.description}
                </p>
                
                {/* Neural Connection Indicator */}
                <div className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${benefit.gradient} rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out`}
                  ></div>
                </div>
              </GlassmorphismCard>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-[hsl(var(--google-blue))]/5 to-transparent rounded-full blur-3xl levitating"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-[hsl(var(--google-green))]/5 to-transparent rounded-full blur-3xl levitating" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};
