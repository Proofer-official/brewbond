import React, { useState, useEffect } from 'react';
import { Coffee, Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-beige/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-brand-coffee text-brand-beige p-2 rounded-xl">
            <Coffee size={24} strokeWidth={2.5} />
          </div>
          <span className="text-2xl font-black tracking-tight text-brand-coffee">Brew & Bond</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="font-medium text-brand-coffee/80 hover:text-brand-coffee transition-colors">기능 소개</a>
          <a href="#faq" className="font-medium text-brand-coffee/80 hover:text-brand-coffee transition-colors">FAQ</a>
          <div className="flex gap-3">
            <Button variant="secondary" className="!py-2 !px-6 !text-sm">무료로 시작하기</Button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-brand-coffee"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-beige border-b border-brand-coffee/10 p-6 flex flex-col gap-4 shadow-xl">
          <a href="#features" className="text-lg font-medium p-2" onClick={() => setIsMobileMenuOpen(false)}>기능 소개</a>
          <a href="#faq" className="text-lg font-medium p-2" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
          <div className="h-px bg-brand-coffee/10 my-2"></div>
          <Button variant="secondary" fullWidth onClick={() => setIsMobileMenuOpen(false)}>무료로 시작하기</Button>
        </div>
      )}
    </nav>
  );
};