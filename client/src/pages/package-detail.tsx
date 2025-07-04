import { useParams, Link } from 'wouter';
import { ArrowLeftIcon, CheckIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { 
  RocketLaunchIcon, 
  CpuChipIcon, 
  StarIcon
} from '@heroicons/react/24/outline';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { GlassmorphismCard } from '@/components/ui/glassmorphism-card';
import { ParticleBackground } from '@/components/3d/particle-background';

const packageData = {
  'professional-starter': {
    name: 'Professional Starter',
    description: 'Premium Web Solutions for Growing Businesses',
    price: '$15,000',
    icon: RocketLaunchIcon,
    features: [
      'Custom responsive design',
      'Advanced SEO optimization',
      'Performance optimization',
      'Mobile-first development',
      'Content management system',
      '6 months premium support',
      'Analytics integration',
      'Security implementation'
    ],
    detailedFeatures: {
      'Design & Development': [
        'Custom responsive design tailored to your brand',
        'Cross-browser compatibility testing',
        'Mobile-first responsive development',
        'Interactive user interface elements',
        'Professional typography and color schemes'
      ],
      'Performance & SEO': [
        'Advanced on-page SEO optimization',
        'Page speed optimization (90+ Google PageSpeed)',
        'Schema markup implementation',
        'Image optimization and lazy loading',
        'Clean URL structure and sitemap generation'
      ],
      'Features & Functionality': [
        'Content management system integration',
        'Contact forms with validation',
        'Social media integration',
        'Newsletter signup functionality',
        'Google Analytics and tracking setup'
      ],
      'Support & Maintenance': [
        '6 months of premium support',
        'Regular security updates',
        'Performance monitoring',
        'Monthly analytics reports',
        'Priority technical support'
      ]
    },
    timeline: '4-6 weeks',
    ideal: 'Small to medium businesses, professionals, and startups looking for a strong online presence',
    deliverables: [
      'Fully functional website',
      'Mobile responsive design',
      'Content management system',
      'SEO optimization',
      'Analytics setup',
      'Training materials',
      'Source code and documentation'
    ]
  },
  'enterprise-professional': {
    name: 'Enterprise Professional',
    description: 'Complete Digital Transformation Solution',
    price: '$45,000',
    icon: CpuChipIcon,
    features: [
      'Everything in Professional Starter',
      'Advanced API integrations',
      'Custom web applications',
      'Database architecture',
      'User authentication systems',
      'Real-time functionality',
      '12 months dedicated support',
      'DevOps and deployment',
      'Performance monitoring'
    ],
    detailedFeatures: {
      'Advanced Development': [
        'Custom web application development',
        'Database design and optimization',
        'API development and integrations',
        'User authentication and authorization',
        'Real-time features (chat, notifications)',
        'Advanced search and filtering'
      ],
      'Enterprise Features': [
        'Multi-user role management',
        'Advanced security implementation',
        'Data encryption and compliance',
        'Backup and recovery systems',
        'Load balancing and scaling',
        'Performance monitoring and alerting'
      ],
      'Integration & Deployment': [
        'Third-party API integrations',
        'Payment gateway integration',
        'Email service integration',
        'Cloud deployment and hosting',
        'CI/CD pipeline setup',
        'Server monitoring and maintenance'
      ],
      'Support & Training': [
        '12 months dedicated support',
        'Monthly performance reviews',
        'Team training and documentation',
        'Priority feature requests',
        'Technical consultation sessions'
      ]
    },
    timeline: '8-12 weeks',
    ideal: 'Large businesses, enterprises, and organizations requiring complex web applications',
    deliverables: [
      'Complete web application',
      'Database and backend systems',
      'API documentation',
      'Admin dashboard',
      'User training materials',
      'Deployment and hosting setup',
      'Comprehensive documentation'
    ]
  },
  'divine-impossible': {
    name: 'Divine Impossible',
    description: 'Transcendent Digital Experience',
    price: '$100,000',
    icon: StarIcon,
    features: [
      'Everything in Enterprise Professional',
      'AI-powered features',
      'Advanced 3D graphics',
      'Real-time collaboration',
      'Custom integrations',
      'Blockchain integration',
      'IoT connectivity',
      'Quantum-ready architecture',
      'Lifetime premium support'
    ],
    detailedFeatures: {
      'Cutting-Edge Technology': [
        'AI-powered user experiences',
        'Advanced 3D graphics and animations',
        'Virtual and augmented reality features',
        'Machine learning integrations',
        'Blockchain and smart contracts',
        'IoT device connectivity'
      ],
      'Advanced Capabilities': [
        'Real-time collaborative features',
        'Advanced data analytics',
        'Predictive user behavior',
        'Automated workflow systems',
        'Custom AI chatbots',
        'Advanced image and video processing'
      ],
      'Enterprise Solutions': [
        'Microservices architecture',
        'Quantum-ready development',
        'Advanced security protocols',
        'Multi-cloud deployment',
        'Global CDN optimization',
        'Enterprise-grade monitoring'
      ],
      'Premium Support': [
        'Lifetime premium support',
        'Dedicated development team',
        'Monthly feature updates',
        'Priority feature development',
        'Technical consultation',
        'White-glove service'
      ]
    },
    timeline: '12-16 weeks',
    ideal: 'Visionary companies and organizations pushing the boundaries of digital innovation',
    deliverables: [
      'Revolutionary digital platform',
      'AI-powered features',
      'Advanced 3D experiences',
      'Comprehensive documentation',
      'Team training and onboarding',
      'Lifetime support package',
      'Future-ready architecture'
    ]
  }
};

export default function PackageDetail() {
  const { packageId } = useParams<{ packageId: string }>();
  
  const packageInfo = packageData[packageId as keyof typeof packageData];
  
  if (!packageInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Package Not Found</h1>
          <Link href="/" className="text-blue-300 hover:text-blue-200">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }
  
  const IconComponent = packageInfo.icon;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-8">
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <div className="p-6 rounded-full bg-white/5 backdrop-blur-lg border border-white/10">
                <IconComponent className="w-16 h-16 text-blue-300" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-thin text-white mb-6 tracking-tight">
              {packageInfo.name}
            </h1>
            
            <p className="text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              {packageInfo.description}
            </p>
            
            <div className="text-4xl md:text-6xl font-bold text-blue-300 mb-8">
              {packageInfo.price}
            </div>
            
            <MagneticButton
              variant="primary"
              size="xl"
              className="mb-8"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get Started Now
            </MagneticButton>
          </div>
          
          {/* Package Overview */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <GlassmorphismCard variant="liquid" className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Timeline</h3>
              <p className="text-white/80 text-lg">{packageInfo.timeline}</p>
            </GlassmorphismCard>
            
            <GlassmorphismCard variant="liquid" className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ideal For</h3>
              <p className="text-white/80 text-lg">{packageInfo.ideal}</p>
            </GlassmorphismCard>
            
            <GlassmorphismCard variant="liquid" className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Deliverables</h3>
              <p className="text-white/80 text-lg">{packageInfo.deliverables.length} key deliverables</p>
            </GlassmorphismCard>
          </div>
          
          {/* Detailed Features */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12">What's Included</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(packageInfo.detailedFeatures).map(([category, features]) => (
                <GlassmorphismCard key={category} variant="liquid" className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <SparklesIcon className="w-6 h-6 mr-3 text-blue-300" />
                    {category}
                  </h3>
                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckIcon className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </GlassmorphismCard>
              ))}
            </div>
          </div>
          
          {/* Deliverables */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Project Deliverables</h2>
            
            <GlassmorphismCard variant="liquid" className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {packageInfo.deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-white/80">{deliverable}</span>
                  </div>
                ))}
              </div>
            </GlassmorphismCard>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <GlassmorphismCard variant="liquid" className="p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Begin?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Transform your digital presence with our {packageInfo.name} package. 
                Let's create something extraordinary together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton
                  variant="primary"
                  size="xl"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Start Your Project
                </MagneticButton>
                
                <MagneticButton
                  variant="outline"
                  size="xl"
                  onClick={() => {
                    window.location.href = 'mailto:contact@arclabs.com?subject=Package Inquiry: ' + packageInfo.name;
                  }}
                >
                  Ask Questions
                </MagneticButton>
              </div>
            </GlassmorphismCard>
          </div>
        </div>
      </div>
    </div>
  );
}