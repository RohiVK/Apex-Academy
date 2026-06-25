import React, { useState } from 'react';

const coursesData = [
  {
    id: 'jee-excel',
    title: 'Apex JEE Excel',
    category: 'JEE',
    target: 'IIT-JEE Main & Advanced 2028',
    grade: 'Class 11 Students',
    timings: 'Mon - Fri | 4:00 PM - 8:00 PM',
    features: ['IIT-JEE Specialized Faculty', 'Daily Practice Papers (DPPs)', 'Weekly CBT Mock Tests', 'Personal Mentorship Sessions']
  },
  {
    id: 'jee-crash',
    title: 'JEE Main Express',
    category: 'JEE',
    target: 'JEE Main 2027 (1-Year Batch)',
    grade: 'Class 12 / Dropouts',
    timings: 'Daily | 10:00 AM - 3:00 PM',
    features: ['High-yield Concept Review', '15 Full-length Mock Tests', 'Exclusive Rank Booster Sheets', 'Dedicated Doubt Clearing Hours']
  },
  {
    id: 'neet-apex',
    title: 'Apex NEET Elite',
    category: 'NEET',
    target: 'NEET-UG 2028 (2-Year Program)',
    grade: 'Class 11 Students',
    timings: 'Mon - Fri | 3:30 PM - 7:30 PM',
    features: ['AIIMS & KGMU Alum Mentors', 'Fully Equipped NCERT Lab Sessions', 'Fortnightly NEET-pattern Tests', 'Biology Memory Maps & Cards']
  },
  {
    id: 'neet-achievers',
    title: 'NEET Achievers',
    category: 'NEET',
    target: 'NEET-UG 2027 (1-Year Intensive)',
    grade: 'Class 12 / Dropouts',
    timings: 'Mon - Sat | 9:00 AM - 2:00 PM',
    features: ['Comprehensive Syllabus Cover', 'Daily Bio-Med Drills', 'All India Test Series (AITS)', '1-on-1 Performance Audit']
  },
  {
    id: 'foundation-alpha',
    title: 'Foundation Alpha',
    category: 'Foundation',
    target: 'Olympiads, NTSE & Boards',
    grade: 'Class 9 & 10 Students',
    timings: 'Tue, Thu, Sat | 4:30 PM - 7:30 PM',
    features: ['Conceptual Science & Math focus', 'Logical Reasoning Workshops', 'School Board Syllabus Align', 'Early NTSE Prep Mock Sets']
  },
  {
    id: 'foundation-nexus',
    title: 'Foundation Nexus',
    category: 'Foundation',
    target: 'Early Starter JEE/NEET Base',
    grade: 'Class 8 Students',
    timings: 'Mon, Wed, Fri | 4:30 PM - 7:00 PM',
    features: ['Advanced Science & Mental Math', 'Gamified Problem Solving', 'Creative Thinking Projects', 'Interactive Parent-Teacher Audits']
  }
];

const Courses = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'JEE', 'NEET', 'Foundation'];

  const filteredCourses = activeFilter === 'All' 
    ? coursesData 
    : coursesData.filter(course => course.category === activeFilter);

  const handleEnquireClick = (courseTitle, gradeCategory) => {
    const selectCourseEvent = new CustomEvent('select-course', {
      detail: {
        courseTitle: courseTitle,
        grade: gradeCategory
      }
    });
    window.dispatchEvent(selectCourseEvent);

    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-brand-cream dark:bg-[#0B0F19] border-b border-slate-200 dark:border-white/10 py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 font-sans">
        
        {/* Section Header & Filter Navigation Split Layout */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-slate-200 dark:border-white/10 pb-6 mb-8 gap-6">
          <div className="text-left max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              DIVISION OVERVIEW
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-slate-800 dark:text-slate-100 mt-2 leading-tight">
              Academic Programs
            </h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed">
              Specialized tracks designed by industry leaders to deliver proven academic results.
            </p>
          </div>

          {/* Filter Navigation */}
          <div className="flex flex-wrap gap-2 md:gap-3 shrink-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-none font-semibold text-xs uppercase tracking-wider transition-colors duration-100 cursor-pointer min-h-[44px] ${
                  activeFilter === category
                    ? 'bg-brand text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10'
                }`}
              >
                {category === 'All' ? 'All Programs' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group flex flex-col justify-between rounded-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 hover:border-brand/50 dark:hover:border-brand/50 shadow-sm dark:shadow-none min-h-[440px] transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Top Card Section */}
              <div className="p-6 md:p-8 flex-1 text-left">
                {/* Category Tag & Grade */}
                <div className="flex items-center justify-between mb-5">
                  <span className="px-3 py-1 rounded-none bg-brand/10 dark:bg-brand/20 text-brand dark:text-brand-light text-xs font-bold uppercase tracking-wider">
                    {course.category}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    GRADE: {course.grade}
                  </span>
                </div>

                {/* Title & Target */}
                <h3 className="text-xl md:text-2xl font-bold font-serif text-slate-800 dark:text-slate-100 group-hover:text-brand transition-colors duration-150">
                  {course.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-brand dark:text-brand-light font-semibold mt-2">
                  TARGET: {course.target}
                </p>

                {/* Features list */}
                <ul className="mt-5 space-y-2.5 border-t border-slate-200 dark:border-white/10 pt-5 text-left">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400 font-sans">
                      <span className="text-brand dark:text-brand-light font-bold shrink-0 mt-0.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Card Section */}
              <div className="p-6 md:p-8 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-white/10 flex flex-col gap-4">
                {/* Batch Timings */}
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-left">
                  TIMINGS: {course.timings}
                </div>

                {/* Enquire CTA Button */}
                <button
                  onClick={() => handleEnquireClick(course.title, course.grade)}
                  className="w-full py-3 px-4 bg-white dark:bg-slate-800 hover:bg-brand dark:hover:bg-brand hover:text-white dark:hover:text-white text-brand dark:text-white text-xs uppercase tracking-wider font-semibold rounded-none border border-slate-200 dark:border-white/10 hover:border-brand dark:hover:border-brand shadow-sm transition-all duration-100 flex items-center justify-center gap-1 cursor-pointer min-h-[44px]"
                >
                  <span>Enquire Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Courses;
