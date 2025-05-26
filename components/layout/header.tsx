"use client";

import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Coffee, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Calculator", href: "/calculator" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    setMobileMenuOpen(false);
    router.push(href);
  };

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/95 dark:bg-stone-900/95 backdrop-blur-sm shadow-sm py-3"
        : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Button 
          variant="ghost" 
          className="flex items-center gap-2 px-0 hover:bg-transparent"
          onClick={() => handleNavigation("/")}
        >
          <Coffee size={32} className="text-primary" />
          <span className="font-playfair font-bold text-2xl">Chocodew</span>
        </Button>

        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors relative",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => handleNavigation(item.href)}
            >
              {item.name}
              {pathname === item.href && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary mx-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Button>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => handleNavigation("/account")}
          >
            My Account
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-b"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className={cn(
                    "justify-start px-4 py-3 rounded-md text-sm font-medium w-full",
                    pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-accent/50"
                  )}
                  onClick={() => handleNavigation(item.href)}
                >
                  {item.name}
                </Button>
              ))}
              <Button
                variant="ghost"
                className="justify-start px-4 py-3 rounded-md text-sm font-medium text-foreground hover:bg-accent/50 w-full"
                onClick={() => handleNavigation("/account")}
              >
                My Account
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}