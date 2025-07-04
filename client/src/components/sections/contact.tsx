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
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-24 bg-[hsl(var(--gray-50))]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-[hsl(var(--gray-900))] mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-[hsl(var(--gray-700))]">
            Let's discuss how Arc Labs can help transform your business with cutting-edge web solutions.
          </p>
        </div>
        
        <GlassmorphismCard className="bg-white">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-[hsl(var(--gray-700))]">First Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your first name" 
                          className="w-full px-4 py-3 border border-[hsl(var(--gray-200))] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[hsl(var(--google-blue))] focus:border-transparent transition-all duration-200"
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
                      <FormLabel className="text-sm font-medium text-[hsl(var(--gray-700))]">Last Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your last name" 
                          className="w-full px-4 py-3 border border-[hsl(var(--gray-200))] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[hsl(var(--google-blue))] focus:border-transparent transition-all duration-200"
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-[hsl(var(--gray-700))]">Email</FormLabel>
                    <FormControl>
                      <Input 
                        type="email"
                        placeholder="Enter your email address" 
                        className="w-full px-4 py-3 border border-[hsl(var(--gray-200))] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[hsl(var(--google-blue))] focus:border-transparent transition-all duration-200"
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
                    <FormLabel className="text-sm font-medium text-[hsl(var(--gray-700))]">Company</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your company name" 
                        className="w-full px-4 py-3 border border-[hsl(var(--gray-200))] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[hsl(var(--google-blue))] focus:border-transparent transition-all duration-200"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="projectType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-[hsl(var(--gray-700))]">Project Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full px-4 py-3 border border-[hsl(var(--gray-200))] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[hsl(var(--google-blue))] focus:border-transparent transition-all duration-200">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="web-application">Web Application</SelectItem>
                        <SelectItem value="ecommerce">E-commerce Platform</SelectItem>
                        <SelectItem value="marketing-website">Marketing Website</SelectItem>
                        <SelectItem value="mobile-app">Mobile App</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
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
                    <FormLabel className="text-sm font-medium text-[hsl(var(--gray-700))]">Project Details</FormLabel>
                    <FormControl>
                      <Textarea 
                        rows={4}
                        placeholder="Tell us about your project requirements, goals, and timeline..." 
                        className="w-full px-4 py-3 border border-[hsl(var(--gray-200))] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[hsl(var(--google-blue))] focus:border-transparent transition-all duration-200"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <MagneticButton 
                type="submit" 
                size="lg"
                className="w-full"
                disabled={contactMutation.isPending}
              >
                {contactMutation.isPending ? 'Sending...' : 'Send Message'}
              </MagneticButton>
            </form>
          </Form>
        </GlassmorphismCard>
      </div>
    </section>
  );
};
