import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { useMagneticEffect } from '@/hooks/use-magnetic-effect';

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  magneticStrength?: number;
}

const MagneticButton = forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ className, variant = 'primary', size = 'md', magneticStrength = 0.3, children, ...props }, _ref) => {
    const magneticRef = useMagneticEffect(magneticStrength);

    const variants = {
      primary: 'bg-[hsl(var(--google-blue))] text-white hover:shadow-lg hover:shadow-[hsl(var(--google-blue))]/30',
      secondary: 'bg-[hsl(var(--gray-100))] text-[hsl(var(--gray-800))] hover:bg-[hsl(var(--gray-200))]',
      outline: 'border-2 border-[hsl(var(--google-blue))] text-[hsl(var(--google-blue))] hover:bg-[hsl(var(--google-blue))] hover:text-white'
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };

    return (
      <button
        ref={magneticRef as any}
        className={cn(
          'rounded-full font-medium transition-all duration-300 magnetic-hover glow-on-hover',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

MagneticButton.displayName = 'MagneticButton';

export { MagneticButton };
