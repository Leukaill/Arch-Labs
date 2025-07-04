import { useQuery } from '@tanstack/react-query';
import { HolographicCard } from '@/components/3d/holographic-card';
import { MagneticButton } from '@/components/ui/magnetic-button';
import type { Project } from '@/types/portfolio';

export const PortfolioSection = () => {
  const { data: projects, isLoading, error } = useQuery<Project[]>({
    queryKey: ['/api/projects/featured'],
  });

  if (error) {
    return (
      <section id="portfolio" className="portfolio-section py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-red-600 mb-4">
            <span className="material-icons text-4xl">error</span>
          </div>
          <h3 className="text-xl font-medium text-[hsl(var(--gray-900))] mb-2">Failed to Load Portfolio</h3>
          <p className="text-[hsl(var(--gray-700))]">Unable to fetch portfolio projects. Please try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="portfolio-section py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-[hsl(var(--gray-900))] mb-6">
            Our Work Speaks for Itself
          </h2>
          <p className="text-xl text-[hsl(var(--gray-700))] max-w-3xl mx-auto">
            Explore our portfolio of successful projects that have transformed businesses and exceeded expectations.
          </p>
        </div>
        
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-[hsl(var(--gray-200))] rounded-3xl aspect-video mb-6"></div>
                <div className="h-6 bg-[hsl(var(--gray-200))] rounded mb-2"></div>
                <div className="h-4 bg-[hsl(var(--gray-200))] rounded w-2/3 mb-2"></div>
                <div className="h-4 bg-[hsl(var(--gray-200))] rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects?.map((project) => (
                <HolographicCard key={project.id} className="portfolio-item group cursor-pointer">
                  <div className="bg-[hsl(var(--gray-100))] rounded-3xl overflow-hidden mb-6 aspect-video">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
                  <h3 className="text-xl font-medium text-[hsl(var(--gray-900))] mb-2">{project.title}</h3>
                  <p className="text-[hsl(var(--gray-700))] mb-2">{project.technologies.join(' • ')}</p>
                  {project.metrics && (
                    <p className="text-sm text-[hsl(var(--gray-600))]">{project.metrics}</p>
                  )}
                </HolographicCard>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <MagneticButton size="lg">
                View All Projects
              </MagneticButton>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
