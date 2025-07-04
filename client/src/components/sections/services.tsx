import { HolographicCard } from '@/components/3d/holographic-card';

const services = [
  {
    icon: 'web',
    title: 'Modern Web Applications',
    description: 'Custom enterprise solutions built with cutting-edge technology stacks for maximum performance and scalability.',
    color: 'var(--google-blue)'
  },
  {
    icon: 'shopping_cart',
    title: 'E-commerce Platforms',
    description: 'Powerful online stores with advanced features, payment integration, and seamless user experiences that drive conversions.',
    color: 'var(--google-green)'
  },
  {
    icon: 'phone_android',
    title: 'Mobile-First Experiences',
    description: 'Responsive web applications optimized for all devices, ensuring perfect experiences across desktop, tablet, and mobile.',
    color: 'var(--google-yellow)'
  },
  {
    icon: 'campaign',
    title: 'Marketing Websites',
    description: 'Brand-focused websites that tell your story, engage your audience, and convert visitors into customers with compelling design.',
    color: 'var(--google-red)'
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="services-section py-24 bg-[hsl(var(--gray-50))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-[hsl(var(--gray-900))] mb-6">
            Powerful Solutions for Modern Business
          </h2>
          <p className="text-xl text-[hsl(var(--gray-700))] max-w-3xl mx-auto">
            From custom applications to e-commerce platforms, we deliver comprehensive web solutions that scale with your ambitions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <HolographicCard key={index} className="service-card text-center">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 floating mx-auto"
                style={{ backgroundColor: `hsl(${service.color})` }}
              >
                <span className="material-icons text-white text-2xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-medium text-[hsl(var(--gray-900))] mb-4">{service.title}</h3>
              <p className="text-[hsl(var(--gray-700))] leading-relaxed">{service.description}</p>
            </HolographicCard>
          ))}
        </div>
      </div>
    </section>
  );
};
