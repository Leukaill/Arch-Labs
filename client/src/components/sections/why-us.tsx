const benefits = [
  {
    icon: 'speed',
    title: 'Reduce Complexity, Maximize Results',
    description: 'Streamlined development process that eliminates unnecessary complexity while delivering powerful, efficient solutions.',
    gradient: 'from-[hsl(var(--google-blue))] to-blue-600'
  },
  {
    icon: 'psychology',
    title: 'Modern, AI-Powered Solutions',
    description: 'Cutting-edge technology stack incorporating artificial intelligence and machine learning for next-generation applications.',
    gradient: 'from-[hsl(var(--google-green))] to-green-600'
  },
  {
    icon: 'security',
    title: 'Secure by Design',
    description: 'Enterprise-grade security practices built into every layer of development, ensuring your data and users are protected.',
    gradient: 'from-[hsl(var(--google-yellow))] to-yellow-600'
  },
  {
    icon: 'trending_up',
    title: 'Built for Your Business Growth',
    description: 'Scalable solutions designed to grow with your business, from startup to enterprise, without compromising performance.',
    gradient: 'from-[hsl(var(--google-red))] to-red-600'
  }
];

export const WhyUsSection = () => {
  return (
    <section id="why-us" className="benefits-section py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-[hsl(var(--gray-900))] mb-6">
            Why Choose Arc Labs
          </h2>
          <p className="text-xl text-[hsl(var(--gray-700))] max-w-3xl mx-auto">
            We combine technical expertise with business acumen to deliver solutions that drive real results for your organization.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card text-center group">
              <div className={`w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 floating`}>
                <span className="material-icons text-white text-3xl">{benefit.icon}</span>
              </div>
              <h3 className="text-xl font-medium text-[hsl(var(--gray-900))] mb-4">{benefit.title}</h3>
              <p className="text-[hsl(var(--gray-700))] leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
