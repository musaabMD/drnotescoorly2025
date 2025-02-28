"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { LogIn, User, Menu, X, Wallet, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import config from "@/config";

const links = [
  {
    href: "/pricing",
    label: "Pricing",
    icon: <Wallet className="h-5 w-5 mr-2" />
  },
  {
    href: "/",
    label: "Exams",
    icon: <GraduationCap className="h-5 w-5 mr-2" />
  },
];

// Custom color palette - you can adjust these values to match your theme
const colors = {
  primary: "#181818",
  background: "#F6EFE8",
  white: "#FFFFFF"
};

const Header = () => {
  const searchParams = useSearchParams();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [searchParams]);

  // DrNote Logo SVG Component
  const DrNoteLogo = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#007832" />
      <path d="M8 12C8 10.8954 8.89543 10 10 10H22C27.5228 10 32 14.4772 32 20C32 25.5228 27.5228 30 22 30H10C8.89543 30 8 29.1046 8 28V12Z" fill="white"/>
      <path d="M14 16V24M14 16H22C23.6569 16 25 17.3431 25 19V21C25 22.6569 23.6569 24 22 24H14V16Z" stroke="#007832" strokeWidth="2" strokeLinecap="round"/>
      <path d="M26 15L29 15M27.5 10V13.5" stroke="#E8D8CE" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  return (
    <header
      style={{ backgroundColor: colors.primary }}
      className="text-white sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Desktop Header */}
        <div className="hidden md:flex justify-between items-center py-3 px-4">
          <div className="flex items-center gap-2">
            <Link href="/">
              <DrNoteLogo />
            </Link>
            <Link href="/">
              <span className="font-bold text-xl">{config.appName}</span>
            </Link>
          </div>
          
          {/* Navigation Links - Desktop - CENTERED */}
          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className="text-white hover:text-white/80 transition-colors flex items-center"
                title={link.label}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              <Link href="/signin" className="flex items-center">
                <LogIn className="h-5 w-5 mr-2" />
                Login
              </Link>
            </Button>
            <Button className="bg-white text-green-700 hover:bg-white">
              <Link href="/signup" className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Sign Up
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="flex md:hidden justify-between items-center py-3 px-4">
          <div className="flex items-center gap-2">
            <Link href="/">
              <DrNoteLogo />
            </Link>
            <Link href="/">
              <span className="font-bold text-lg">{config.appName}</span>
            </Link>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 rounded-md hover:bg-white/10"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-3 px-4 space-y-3 border-t border-white/20">
            {/* Navigation Links - Mobile */}
            {links.map((link) => (
              <Button 
                key={link.href}
                variant="ghost" 
                className="text-white hover:bg-white/10 w-full justify-start"
              >
                <Link href={link.href} className="flex items-center w-full">
                  {link.icon}
                  {link.label}
                </Link>
              </Button>
            ))}
            
            <Button variant="ghost" className="text-white hover:bg-white/10 w-full justify-start">
              <Link href="/signin" className="flex items-center w-full">
                <LogIn className="h-5 w-5 mr-2" />
                Login
              </Link>
            </Button>
            <Button className="bg-white text-green-700 hover:bg-white/90 w-full justify-start">
              <Link href="/signup" className="flex items-center w-full">
                <User className="h-5 w-5 mr-2" />
                Sign Up
              </Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;