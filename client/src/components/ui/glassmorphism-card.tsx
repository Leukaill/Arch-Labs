import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface GlassmorphismCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'holographic';
}

const GlassmorphismCard = forwardRef<HTMLDivElement, GlassmorphismCardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'glassmorphism rounded-3xl p-8 google-shadow hover:google-shadow-lg transition-all duration-300 magnetic-hover',
          variant === 'holographic' && 'holographic',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassmorphismCard.displayName = 'GlassmorphismCard';

export { GlassmorphismCard };
