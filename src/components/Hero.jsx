import React, { useState, useEffect, useRef } from 'react';
import classroomImg from '../assets/classroom.png';

const Counter = ({ target, duration, suffix = "", decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    
    let start = 0;
    const end = parseFloat(target);
    if (start === end) return;

    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = progress * (end - start) + start;
      
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, target, duration]);

  const formatNumber = (num) => {
    const formatted = num.toFixed(decimals);
    if (decimals === 0) {
      return parseInt(formatted, 10).toLocaleString();
    }
    return formatted;
  };

  return (
    <span ref={elementRef}>
      {formatNumber(count)}{suffix}
    </span>
  );
};

const Hero = () => {
  const handleScrollTo = (id) => {
    const element = document.querySelector(id);
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
    <div>
      {/* Immersive Cover-Page Hero Section */}
      <div 
        className="relative min-h-screen flex items-center justify-start bg-cover bg-center text-white px-6 md:px-12"
        style={{ backgroundImage: `url(${classroomImg})` }}
      >
        {/* Dark editorial overlay for high-contrast legibility */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-10 max-w-4xl mx-auto w-full text-left py-20 flex flex-col items-start font-sans">
          
          <span className="text-xs font-bold tracking-widest text-[#CDC7B9] uppercase mb-4">
            Admissions Open for 2026 Batches
          </span>

          <h1 className="text-5xl sm:text-7.5xl md:text-8xl font-serif font-bold tracking-tight text-white leading-[1.02] sm:leading-[0.95]">
            Aim Higher.<br />
            Achieve More.
          </h1>

          <p className="mt-8 text-sm md:text-lg text-white/90 max-w-xl leading-relaxed font-light">
            Empowering future leaders with top-tier mentorship, structured academic planning, and a proven system of learning designed to crack the most competitive national level examinations.
          </p>

          {/* Single, sharp-edged rectangular primary CTA button */}
          <button
            onClick={() => handleScrollTo('#courses')}
            className="mt-10 px-10 py-4 bg-brand hover:bg-brand-hover text-white text-xs uppercase tracking-widest font-bold rounded-none transition-colors duration-100 cursor-pointer min-h-[46px]"
          >
            Explore Programs
          </button>
        </div>
      </div>

      {/* Statistics Band (Midnight Navy block below the fold) */}
      <div className="bg-brand-navy text-white py-16 border-t border-b border-white/10 relative z-10 w-full font-sans">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          <div className="flex flex-col gap-1 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-8">
            <h3 className="text-4xl font-bold font-serif text-white">
              <Counter target={99.8} duration={2000} suffix="%" decimals={1} />
            </h3>
            <p className="text-xs uppercase tracking-widest text-[#CDC7B9] mt-1 font-semibold">JEE/NEET Success Rate</p>
          </div>
          <div className="flex flex-col gap-1 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-8">
            <h3 className="text-4xl font-bold font-serif text-white">
              <Counter target={15000} duration={2000} suffix="+" decimals={0} />
            </h3>
            <p className="text-xs uppercase tracking-widest text-[#CDC7B9] mt-1 font-semibold">Students Mentored</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-4xl font-bold font-serif text-white">
              <Counter target={100} duration={2000} suffix="%" decimals={0} />
            </h3>
            <p className="text-xs uppercase tracking-widest text-[#CDC7B9] mt-1 font-semibold">Structured Study Material</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
