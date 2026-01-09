import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { SectionContainer } from '@/components/ui/section-container';
import { SectionHeading } from '@/components/ui/section-heading';
import { PROFILE } from '@/data/profile';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Github, Linkedin, FileText, Loader2, Send } from 'lucide-react';

import { toast } from 'sonner';
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});
type ContactFormValues = z.infer<typeof contactFormSchema>;
export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const onSubmit = useCallback(async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      // Send to Formspree
      const response = await fetch('https://formspree.io/f/mzddpprj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          _replyto: data.email,
        }),
      });

      if (response.ok) {
        toast.success("Message sent! Check your inbox for my reply.", {
          description: "I'll typically respond within 24 hours."
        });
        form.reset({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to send message", {
        description: error instanceof Error ? error.message : "Please try again later or contact me directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [form]);
  return (
    <SectionContainer id="contact" className="pb-20">
      <SectionHeading title="Get In Touch" number="06." />
      <div className="max-w-2xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-foreground">Let's Collaborate.</h2>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            I'm currently looking for new opportunities in Data Science and AI Engineering.
            Whether you have a query or just want to connect, feel free to reach out!
          </p>
        </div>
        <div className="bg-navy-900/30 p-6 md:p-8 rounded-xl border border-border/40 backdrop-blur-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-mono uppercase tracking-widest text-primary/80">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your Name"
                          className="bg-navy-950/50 border-border/40 focus:border-primary/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-mono uppercase tracking-widest text-primary/80">Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="your.email@example.com"
                          className="bg-navy-950/50 border-border/40 focus:border-primary/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-mono uppercase tracking-widest text-primary/80">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell me about your project or just say hi..."
                        className="min-h-[150px] bg-navy-950/50 border-border/40 focus:border-primary/50 resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full h-12 font-bold text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Form>
        </div>
        <div className="text-center space-y-8">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/Vishnuvaradhan_M_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-14 px-8 rounded-full font-semibold border border-border hover:bg-navy-900 transition-colors"
            >
              <FileText className="mr-2 h-5 w-5" /> Download Resume
            </a>
          </div>
          <div className="flex justify-center gap-6">
             <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all bg-navy-900/50" aria-label="GitHub Profile">
               <Github className="h-6 w-6" />
             </a>
             <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all bg-navy-900/50" aria-label="LinkedIn Profile">
               <Linkedin className="h-6 w-6" />
             </a>
          </div>
          <div className="pt-8 text-sm font-mono space-y-2 text-muted-foreground/60">
            <p>{PROFILE.location}</p>
            {PROFILE.phone && (
              <a href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`} className="block hover:text-primary transition-colors">
                {PROFILE.phone}
              </a>
            )}
            <p className="mt-2">{PROFILE.email}</p>
          </div>
        </div>
      </div>
      <footer className="mt-32 pt-8 border-t border-border/10 text-center">
        <p className="text-xs font-mono text-muted-foreground/40 max-w-xs mx-auto">
          Built with React, TypeScript, and Tailwind CSS. Hosted on Cloudflare.
        </p>
      </footer>
    </SectionContainer>
  );
}