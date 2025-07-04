import { GlassmorphismCard } from '@/components/ui/glassmorphism-card';

const services = [
  {
    icon: 'psychology',
    title: 'AI-Powered Applications',
    description: 'Revolutionary applications that harness artificial intelligence to deliver experiences that feel impossible and exceed every expectation.',
    gradient: 'from-[hsl(var(--google-blue))] to-blue-600',
    delay: '0s'
  },
  {
    icon: 'rocket_launch',
    title: 'Quantum E-commerce',
    description: 'Next-generation online stores with neural payment processing, predictive UX, and conversion rates that defy industry standards.',
    gradient: 'from-[hsl(var(--google-green))] to-green-600',
    delay: '0.1s'
  },
  {
    icon: 'auto_awesome',
    title: 'Holographic Interfaces',
    description: 'Three-dimensional web experiences that blur the line between digital and reality, creating truly immersive user journeys.',
    gradient: 'from-[hsl(var(--google-yellow))] to-yellow-600',
    delay: '0.2s'
  },
  {
    icon: 'electrical_services',
    title: 'Neural Architecture',
    description: 'Self-evolving platforms that learn, adapt, and optimize themselves, delivering performance that grows smarter over time.',
    gradient: 'from-[hsl(var(--google-red))] to-red-600',
    delay: '0.3s'
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="services-section py-32 relative overflow-hidden neural-network-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="cinematic-entrance">
            <h2 className="text-5xl md:text-7xl font-thin text-[hsl(var(--gray-900))] mb-8 tracking-tight">
              Impossible <span className="font-medium italic bg-gradient-to-r from-[hsl(var(--google-blue))] to-[hsl(var(--google-green))] bg-clip-text text-transparent">Solutions</span>
            </h2>
          </div>
          <div className="cinematic-entrance" style={{ animationDelay: '0.3s' }}>
            <p className="text-2xl text-[hsl(var(--gray-700))] max-w-4xl mx-auto font-light leading-relaxed">
              We don't just build websites. We architect digital realities that redefine what's possible in the web universe.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="cinematic-entrance"
              style={{ animationDelay: service.delay }}
            >
              <GlassmorphismCard 
                variant="impossible" 
                className="service-card text-center h-full group cursor-pointer"
              >
                <div className="relative mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center mx-auto levitating premium-shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                    <span className="material-icons text-white text-3xl">{service.icon}</span>
                  </div>
                  
                  {/* Floating Particles */}
                  <div className="absolute -inset-4 pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-[hsl(var(--google-blue))] rounded-full levitating opacity-40"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.5}s`,
                          animationDuration: `${3 + Math.random() * 2}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                <h3 className="text-2xl font-medium text-[hsl(var(--gray-900))] mb-6 leading-tight">
                  {service.title}
                </h3>
                <p className="text-[hsl(var(--gray-700))] leading-relaxed font-light">
                  {service.description}
                </p>
                
                {/* Progress Indicator */}
                <div className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${service.gradient} rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out`}
                  ></div>
                </div>
              </GlassmorphismCard>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[hsl(var(--google-blue))]/5 to-transparent rounded-full blur-3xl levitating"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-[hsl(var(--google-green))]/5 to-transparent rounded-full blur-3xl levitating" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};
