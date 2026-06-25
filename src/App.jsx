import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Results from './components/Results';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import CustomCursor from './components/CustomCursor';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('no-transition');
    
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    window.getComputedStyle(root).opacity;
    root.classList.remove('no-transition');
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-navy text-obsidian-700 dark:text-obsidian-100 selection:bg-brand selection:text-white transition-colors duration-200 overflow-x-hidden relative font-sans">
      <CustomCursor />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="courses">
          <Courses />
        </section>
        
        <section id="results">
          <Results />
        </section>
        
        <section id="faqs">
          <FAQ />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>

      <WhatsAppButton />
    </div>
  );
}

export default App;
