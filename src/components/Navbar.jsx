import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Courses', href: '#courses' },
    { name: 'Results', href: '#results' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-150 border-b border-obsidian-200 dark:border-white/10 ${
      scrolled 
        ? 'bg-brand-cream/95 dark:bg-brand-navy/95 py-4 shadow-sm' 
        : 'bg-brand-cream/80 dark:bg-brand-navy/80 py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Branding & Geometric Logo */}
        <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-none bg-brand text-white flex items-center justify-center font-extrabold shadow-sm">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 22h20L12 2z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-obsidian-700 dark:text-white font-serif">
            Apex Academy
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xs uppercase tracking-wider font-semibold text-obsidian-700 hover:text-brand dark:text-obsidian-300 dark:hover:text-white transition-colors py-2 font-sans"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right side controls */}
        <div className="hidden md:flex items-center gap-5">
          {/* Theme Switcher Toggle */}
          <button
            onClick={toggleDarkMode}
            className="w-10 h-10 rounded-none bg-obsidian-100 hover:bg-obsidian-200 dark:bg-obsidian-800 dark:hover:bg-obsidian-700 flex items-center justify-center transition-colors text-obsidian-600 dark:text-obsidian-300 cursor-pointer min-h-[44px] min-w-[44px]"
            aria-label="Toggle Dark/Light Mode"
          >
            {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
          </button>

          {/* Book Demo CTA */}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="inline-flex items-center justify-center px-6 py-3 text-xs uppercase tracking-wider font-semibold text-white bg-brand hover:bg-brand-hover rounded-none transition-colors cursor-pointer min-h-[44px] font-sans"
          >
            Book a Free Demo
          </a>
        </div>

        {/* Mobile controls & toggle button */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="w-11 h-11 rounded-none bg-obsidian-100 dark:bg-obsidian-800 flex items-center justify-center text-obsidian-600 dark:text-obsidian-300 min-h-[44px] min-w-[44px]"
            aria-label="Toggle Dark/Light Mode"
          >
            {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-11 h-11 rounded-none bg-obsidian-100 dark:bg-obsidian-800 flex items-center justify-center text-obsidian-600 dark:text-obsidian-300 focus:outline-none min-h-[44px] min-w-[44px]"
            aria-label="Open Mobile Menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="md:hidden w-full bg-brand-cream dark:bg-brand-navy border-t border-obsidian-200 dark:border-white/10 py-6 px-6 shadow-md">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-semibold uppercase tracking-wider text-obsidian-750 dark:text-obsidian-300 hover:text-brand dark:hover:text-white transition-colors py-3 border-b border-obsidian-200 dark:border-white/5 min-h-[48px] flex items-center"
              >
                {link.name}
              </a>
            ))}
            
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="w-full text-center py-3.5 mt-2 text-xs uppercase tracking-wider font-semibold text-white bg-brand rounded-none min-h-[44px] flex items-center justify-center"
            >
              Book a Free Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
