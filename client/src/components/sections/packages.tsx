import { MagneticButton } from '@/components/ui/magnetic-button';
import { GlassmorphismCard } from '@/components/ui/glassmorphism-card';

const packages = [
  {
    name: 'Starter',
    description: 'Perfect for growing businesses',
    price: '$15,000',
    icon: 'rocket_launch',
    features: [
      'Custom website design',
      'Mobile-responsive development',
      'Content management system',
      'SEO optimization',
      '3 months support'
    ],
    variant: 'secondary' as const,
    buttonText: 'Get Started'
  },
  {
    name: 'Professional',
    description: 'For established companies',
    price: '$35,000',
    icon: 'business',
    features: [
      'Everything in Starter',
      'Advanced functionality',
      'API integrations',
      'Performance optimization',
      '6 months support',
      'Priority development'
    ],
    variant: 'primary' as const,
    buttonText: 'Get Started',
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    price: '$75,000',
    icon: 'domain',
    features: [
      'Everything in Professional',
      'Complex system architecture',
      'Multiple integrations',
      'Enterprise security',
      '12 months support',
      'Dedicated team'
    ],
    variant: 'secondary' as const,
    buttonText: 'Contact Sales'
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
    <section id="packages" className="py-24 bg-[hsl(var(--gray-50))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-[hsl(var(--gray-900))] mb-6">
            Choose Your Perfect Package
          </h2>
          <p className="text-xl text-[hsl(var(--gray-700))] max-w-3xl mx-auto">
            Flexible pricing options designed to meet the needs of businesses at every stage of growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <div key={index} className="relative">
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[hsl(var(--google-yellow))] text-[hsl(var(--gray-900))] px-4 py-1 rounded-full text-sm font-medium z-10">
                  Most Popular
                </div>
              )}
              
              <GlassmorphismCard 
                className={`${pkg.popular ? 'bg-[hsl(var(--google-blue))] text-white scale-105' : 'bg-white'} relative overflow-hidden`}
              >
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 ${pkg.popular ? 'bg-white bg-opacity-20' : 'bg-[hsl(var(--gray-100))]'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className={`material-icons ${pkg.popular ? 'text-white' : 'text-[hsl(var(--gray-600))]'} text-2xl`}>{pkg.icon}</span>
                  </div>
                  <h3 className={`text-2xl font-medium ${pkg.popular ? 'text-white' : 'text-[hsl(var(--gray-900))]'} mb-2`}>{pkg.name}</h3>
                  <p className={`${pkg.popular ? 'text-blue-100' : 'text-[hsl(var(--gray-700))]'}`}>{pkg.description}</p>
                  <div className="mt-4">
                    <span className={`text-4xl font-light ${pkg.popular ? 'text-white' : 'text-[hsl(var(--gray-900))]'}`}>{pkg.price}</span>
                    <span className={`${pkg.popular ? 'text-blue-100' : 'text-[hsl(var(--gray-700))]'} ml-2`}>starting at</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className={`material-icons ${pkg.popular ? 'text-[hsl(var(--google-yellow))]' : 'text-[hsl(var(--google-green))]'} mr-3`}>check_circle</span>
                      <span className={pkg.popular ? 'text-white' : 'text-[hsl(var(--gray-700))]'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <MagneticButton 
                  variant={pkg.variant}
                  className="w-full"
                  onClick={scrollToContact}
                >
                  {pkg.buttonText}
                </MagneticButton>
              </GlassmorphismCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
