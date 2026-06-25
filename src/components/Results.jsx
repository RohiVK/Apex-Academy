import React from 'react';

const rankers = [
  { name: 'Aditya Vardhan', score: '99.98 Percentile', exam: 'JEE Main 2025', rank: 'AIR 12', initial: 'AV' },
  { name: 'Meera Deshmukh', score: 'AIR 45', exam: 'NEET-UG 2025', rank: 'AIIMS Delhi', initial: 'MD' },
  { name: 'Kabir Mehta', score: '99.92 Percentile', exam: 'JEE Main 2025', rank: 'AIR 88', initial: 'KM' },
  { name: 'Ananya Iyer', score: 'AIR 112', exam: 'NEET-UG 2025', rank: 'MAMC Mumbai', initial: 'AI' },
  { name: 'Rohan Sharma', score: '99.85 Percentile', exam: 'JEE Advanced', rank: 'IIT Bombay', initial: 'RS' },
  { name: 'Sneha Reddy', score: 'AIR 185', exam: 'NEET-UG 2025', rank: 'JIPMER', initial: 'SR' }
];

const marqueeRankers = [...rankers, ...rankers];

const testimonials = [
  {
    quote: "The personalized mentorship at Apex Academy completely changed my study strategy. The faculty helped me structure my weekly routines, and the doubt-clearing system was incredibly fast.",
    author: "Aditya Vardhan",
    role: "JEE Main 2025 (AIR 12)",
    type: "Student Testimonial",
    rating: 5
  },
  {
    quote: "As a parent, I was always informed about my child's progress through detailed analytics reports. The study materials provided are exhaustive and match the NEET level perfectly.",
    author: "Dr. Sunita Deshmukh",
    role: "Parent of Meera (AIR 45)",
    type: "Parent Testimonial",
    rating: 5
  },
  {
    quote: "Foundation Alpha program built a rock-solid understanding of Math and Science for my son in Class 9. It helped him crack NTSE with flying colors.",
    author: "Rajesh Iyer",
    role: "Parent of Arjun (Class 10)",
    type: "Parent Testimonial",
    rating: 5
  }
];

const Results = () => {
  return (
    <div className="bg-[#F8F9FA] dark:bg-[#0B0F19] border-b border-slate-200 dark:border-white/10 py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            EXAM OUTCOMES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-slate-800 dark:text-slate-100 mt-2 leading-tight">
            Wall of Excellence
          </h2>
          <p className="mt-4 text-xs uppercase tracking-wider text-slate-600 dark:text-slate-400 font-semibold">
            Our students consistently claim top positions in national level exams year after year.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden py-4 mask-marquee mb-20 select-none">
          {/* Gradient Masks for Fade-out borders */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#F8F9FA] to-transparent dark:from-[#0B0F19] z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#F8F9FA] to-transparent dark:from-[#0B0F19] z-10 pointer-events-none" />

          {/* Marquee track */}
          <div className="w-max flex gap-6 animate-marquee hover:[animation-play-state:paused] py-2">
            {marqueeRankers.map((ranker, index) => (
              <div 
                key={index}
                className="w-72 bg-white dark:bg-slate-900 rounded-none p-5 flex items-center gap-4 shrink-0 shadow-sm border border-slate-200 dark:border-white/10 transition-colors duration-150"
              >
                {/* Solid Deep Navy Initial Circle */}
                <div className="w-14 h-14 rounded-full bg-brand text-white font-extrabold flex items-center justify-center text-lg shadow-sm shrink-0">
                  {ranker.initial}
                </div>
                
                {/* Details */}
                <div className="text-left">
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 text-base leading-tight">
                    {ranker.name}
                  </h4>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-0.5 font-sans font-semibold">
                    {ranker.exam}
                  </p>
                  
                  {/* Badge */}
                  <div className="flex gap-2 items-center mt-2">
                    <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-brand/10 dark:bg-brand/20 text-brand dark:text-brand-light rounded-none font-sans">
                      {ranker.score}
                    </span>
                    <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-450 rounded-none font-sans">
                      {ranker.rank}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid Section */}
        <div className="mt-16 border-t border-slate-200 dark:border-white/10 pt-16">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              VOICES OF THE COMMUNITY
            </span>
            <h3 className="text-2xl md:text-3xl font-bold font-serif text-slate-800 dark:text-slate-100 mt-2 leading-tight">
              Trusted by Parents & Students
            </h3>
            <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-2 font-semibold">
              Hear directly from the families who experienced the Apex transformation first-hand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-none flex flex-col justify-between relative shadow-sm border border-slate-200 dark:border-white/10 hover:border-brand/40 dark:hover:border-brand/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {/* Large Editorial Quotation Mark */}
                <div className="absolute top-2 right-6 font-serif text-7xl text-brand/10 dark:text-white/5 select-none pointer-events-none">
                  “
                </div>

                <div>
                  {/* Star rating as solid character text */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(t.rating || 5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber-500 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Body */}
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans text-left">
                    "{t.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-8 pt-5 border-t border-slate-200 dark:border-white/10 flex flex-col gap-1 items-start">
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 text-base text-left">
                    {t.author}
                  </h4>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs text-brand dark:text-brand-light font-semibold">
                      {t.role}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-sans">
                      {t.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Results;
