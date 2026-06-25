import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "What are the average batch sizes at Apex Academy?",
    answer: "We maintain an optimal student-to-teacher ratio of 35 to 40 students per batch. This ensures that mentors can provide personalized attention, track individual progress, and address doubts effectively while maintaining a healthy competitive spirit."
  },
  {
    question: "Does Apex Academy provide its own study material?",
    answer: "Yes, our study package is highly exhaustive and self-sufficient. It includes conceptual textbooks, topic-wise practice workbooks, Daily Practice Papers (DPPs), and an archived collection of past 15 years' exam questions with detailed solutions."
  },
  {
    question: "How does the 24/7 doubt resolution system work?",
    answer: "Every student gets access to our premium digital learning portal. If they encounter a doubt while studying at home, they can simply snap a picture and upload it. A dedicated team of doubt-solving mentors provides a detailed step-by-step explanation within 15 to 30 minutes."
  },
  {
    question: "Can I attend a demo class before making a final enrollment?",
    answer: "Absolutely! We encourage parents and students to attend up to 2 free trial/demo classes to experience our teaching methodology, inspect the classroom environment, and interact with the faculty before finalizing admission."
  },
  {
    question: "What is the fee refund policy?",
    answer: "We offer a transparent refund policy. If a student chooses to withdraw within 7 days of batch commencement, a full refund (excluding registration charges) is issued. Pro-rata calculations apply for withdrawals within 30 days."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-28 bg-brand-cream dark:bg-brand-navy border-t border-b border-obsidian-200/50 dark:border-white/10 relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-obsidian-750 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xs uppercase tracking-wider text-obsidian-600 dark:text-slate-400 font-semibold">
            Everything you need to know about our batches, materials, policies, and support services.
          </p>
        </div>

        {/* FAQ Accordion Grid */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="rounded-none border border-obsidian-200 dark:border-white/10 bg-white/50 dark:bg-brand-navy/60 overflow-hidden transition-colors duration-150 hover:border-brand/20"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-bold text-obsidian-900 dark:text-white text-base md:text-lg cursor-pointer select-none focus:outline-none min-h-[48px]"
                >
                  <span className="pr-4">{item.question}</span>
                  <div className={`text-brand dark:text-brand-light shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm md:text-base text-obsidian-650 dark:text-slate-400 leading-relaxed font-normal border-t border-obsidian-150 dark:border-white/10 pt-4 text-left">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default FAQ;
