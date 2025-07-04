import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { GlassmorphismCard } from '@/components/ui/glassmorphism-card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { ContactFormData } from '@/types/portfolio';

const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  projectType: z.string().min(1, 'Please select a project type'),
  projectDetails: z.string().min(10, 'Please provide more details about your project'),
});

export const ContactSection = () => {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      projectType: '',
      projectDetails: '',
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Neural Connection Established!",
        description: "Your transmission has been received. Our consciousness will sync with yours within 24 hours.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Transmission Failed",
        description: error.message || "Neural network interference detected. Please retry transmission.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden neural-network-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="cinematic-entrance">
            <h2 className="text-5xl md:text-7xl font-thin text-white mb-8 tracking-tight">
              Initiate <span className="font-medium italic text-blue-300">Contact</span>
            </h2>
          </div>
          <div className="cinematic-entrance" style={{ animationDelay: '0.3s' }}>
            <p className="text-2xl text-white/80 max-w-4xl mx-auto font-light leading-relaxed">
              Ready to transcend the boundaries of possibility? Begin your journey into the impossible.
            </p>
          </div>
        </div>
        
        <div className="cinematic-entrance" style={{ animationDelay: '0.6s' }}>
          <GlassmorphismCard variant="impossible" className="relative overflow-hidden">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-medium text-white mb-3 block">First Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your neural identifier..." 
                            className="w-full px-6 py-4 border-2 border-white/20 rounded-2xl bg-white/5 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--google-blue))] focus:border-transparent transition-all duration-300 text-lg placeholder:text-gray-400"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-medium text-white mb-3 block">Last Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your quantum signature..." 
                            className="w-full px-6 py-4 border-2 border-white/20 rounded-2xl bg-white/5 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--google-blue))] focus:border-transparent transition-all duration-300 text-lg placeholder:text-gray-400"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-medium text-white mb-3 block">Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="your@reality.dimension" 
                            className="w-full px-6 py-4 border-2 border-white/20 rounded-2xl bg-white/5 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--google-blue))] focus:border-transparent transition-all duration-300 text-lg placeholder:text-gray-400"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-medium text-white mb-3 block">Company</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your dimensional corporation..." 
                            className="w-full px-6 py-4 border-2 border-white/20 rounded-2xl bg-white/5 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--google-blue))] focus:border-transparent transition-all duration-300 text-lg placeholder:text-gray-400"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium text-white mb-3 block">Project Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-full px-6 py-4 border-2 border-white/20 rounded-2xl bg-white/5 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--google-blue))] focus:border-transparent transition-all duration-300 text-lg">
                            <SelectValue placeholder="Choose your impossible transformation..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-white/95 backdrop-blur-md border-white/20">
                          <SelectItem value="web-application">Neural Web Application</SelectItem>
                          <SelectItem value="ecommerce">Quantum E-commerce Platform</SelectItem>
                          <SelectItem value="marketing-website">Holographic Marketing Portal</SelectItem>
                          <SelectItem value="mobile-app">Telepathic Mobile Experience</SelectItem>
                          <SelectItem value="other">Beyond Current Reality</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="projectDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium text-white mb-3 block">Project Details</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={6}
                          placeholder="Tell us about your reality-bending requirements, impossible goals, and the timeline for your dimensional transformation. Be as specific as your imagination allows..." 
                          className="w-full px-6 py-4 border-2 border-white/20 rounded-2xl bg-white/5 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--google-blue))] focus:border-transparent transition-all duration-300 text-lg placeholder:text-gray-400 resize-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="pt-6">
                  <MagneticButton 
                    type="submit" 
                    variant="impossible"
                    size="xl"
                    className="w-full"
                    disabled={contactMutation.isPending}
                    magneticStrength={0.6}
                  >
                    <span className="flex items-center justify-center gap-3">
                      {contactMutation.isPending ? (
                        <>
                          <span className="animate-spin material-icons">autorenew</span>
                          <span>Establishing Neural Link...</span>
                        </>
                      ) : (
                        <>
                          <span>Initiate Impossible Journey</span>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                          </svg>
                        </>
                      )}
                    </span>
                  </MagneticButton>
                </div>
              </form>
            </Form>
            
            {/* Neural Network Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-[hsl(var(--google-blue))] rounded-full levitating opacity-30"
                  style={{
                    top: `${10 + Math.random() * 80}%`,
                    left: `${10 + Math.random() * 80}%`,
                    animationDelay: `${i * 0.8}s`,
                    animationDuration: `${4 + Math.random() * 3}s`
                  }}
                />
              ))}
            </div>
          </GlassmorphismCard>
        </div>
      </div>
      
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[hsl(var(--google-blue))]/8 to-transparent rounded-full blur-3xl levitating"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[hsl(var(--google-green))]/8 to-transparent rounded-full blur-3xl levitating" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};
