import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
const NAV_LINKS = [
  { label: 'About', href: 'about' },
  { label: 'Experience', href: 'experience' },
  { label: 'Projects', href: 'projects' },
  { label: 'Skills', href: 'skills' },
  { label: 'Education', href: 'education' },
  { label: 'Contact', href: 'contact' },
];
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const NavItems = ({ className, isMobile, onClick }: { className?: string, isMobile?: boolean, onClick?: () => void }) => (
    <div className={cn("flex", className)}>
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}
          activeClass="text-primary font-bold"
          className={cn(
            "font-medium text-muted-foreground hover:text-primary transition-all duration-200 cursor-pointer tracking-wide",
            isMobile ? "text-base" : "text-sm"
          )}
          onClick={onClick}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
      isScrolled
        ? "bg-background/80 backdrop-blur-md border-border/40 py-3 shadow-sm"
        : "bg-transparent border-transparent py-5"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="text-2xl font-black text-primary tracking-tighter cursor-pointer"
            >
              V<span className="text-foreground">M.</span>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavItems className="items-center space-x-8" />
          </div>
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-navy-950 border-border/20 w-[280px]">
                <SheetHeader className="text-left mb-8">
                  <SheetTitle className="text-xl font-bold tracking-tight text-primary">Menu</SheetTitle>
                </SheetHeader>
                <NavItems
                  isMobile
                  className="flex-col space-y-6"
                  onClick={() => setIsOpen(false)}
                />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}