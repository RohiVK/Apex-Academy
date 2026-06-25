import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    grade: '',
    course: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleSelectCourse = (e) => {
      const { courseTitle, grade } = e.detail;
      let mappedGrade = 'Class 11';
      if (grade.includes('12') || grade.toLowerCase().includes('dropout') || grade.toLowerCase().includes('dropper')) {
        mappedGrade = 'Class 12 / Dropper';
      } else if (grade.includes('9') || grade.includes('10')) {
        mappedGrade = 'Class 9/10';
      } else if (grade.includes('8')) {
        mappedGrade = 'Class 8';
      }
      
      setFormData({
        name: '',
        phone: '',
        grade: mappedGrade,
        course: courseTitle
      });
    };
    window.addEventListener('select-course', handleSelectCourse);
    return () => window.removeEventListener('select-course', handleSelectCourse);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[\s-()]/g, ''))) {
      tempErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.grade) tempErrors.grade = 'Please select a grade';
    if (!formData.course) tempErrors.course = 'Please select a course';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        phone: '',
        grade: '',
        course: ''
      });
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <footer className="bg-brand-navy text-white border-t border-obsidian-850 pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start mb-20">
          
          {/* Left Column: Contact details & WhatsApp button */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-none bg-brand flex items-center justify-center text-white font-extrabold shadow-sm">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 2L2 22h20L12 2z" />
                  </svg>
                </div>
                <span className="text-xl font-bold tracking-tight text-white font-serif">
                  Apex Academy
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-6 leading-tight">
                Connect With Us Today
              </h2>
              <p className="text-[#CDC7B9] text-sm md:text-base mb-8 max-w-md">
                Have questions about our programs, fee structures, or registration details? Reach out to our academic advisors.
              </p>

              {/* Contact Information List */}
              <div className="space-y-6">
                <div className="flex flex-col gap-1 items-start">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-light">TELEPHONE</span>
                  <a href="tel:+919999999999" className="text-sm md:text-base font-semibold text-white hover:text-brand-light transition-colors">+91 99999 99999</a>
                </div>

                <div className="flex flex-col gap-1 items-start">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-light">EMAIL ADDRESS</span>
                  <a href="mailto:admissions@apexacademy.in" className="text-sm md:text-base font-semibold text-white hover:text-brand-light transition-colors">admissions@apexacademy.in</a>
                </div>

                <div className="flex flex-col gap-1 items-start">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-light">CAMPUS ADDRESS</span>
                  <p className="text-sm md:text-base font-semibold text-[#E6ECF2]">Apex Tower, Sector 62, Noida, UP - 201301</p>
                </div>
              </div>
            </div>

            {/* Prominent WhatsApp Link */}
            <div className="mt-12">
              <a
                href="https://wa.me/919999999999?text=Hi%2C%20I%20am%20interested%20in%20Apex%20Academy%2520courses."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-emerald-550 hover:bg-emerald-600 text-white text-xs uppercase tracking-wider font-semibold rounded-none shadow transition-colors duration-150 cursor-pointer min-h-[44px]"
                style={{ backgroundColor: '#059669' }}
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7 bg-[#1E293B]/60 p-8 md:p-10 rounded-none border border-obsidian-800 shadow-sm">
            <h3 className="text-2xl font-bold font-serif text-white mb-2 text-left">
              Quick Admission Enquiry
            </h3>
            <p className="text-sm text-[#CDC7B9] mb-8 text-left">
              Fill out this form and our academic advisors will reach out to you within 2 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-[#CDC7B9]">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter student's name"
                    className={`px-4 py-3 bg-[#0F172A] border rounded-none text-sm focus:outline-none focus:ring-1 focus:ring-brand-light focus:border-brand-light transition-colors text-white border-obsidian-800 min-h-[46px] ${
                      errors.name ? 'border-brand-light' : 'border-obsidian-800'
                    }`}
                  />
                  {errors.name && <span className="text-[10px] text-brand-light font-semibold mt-0.5">{errors.name}</span>}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-wider text-[#CDC7B9]">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className={`px-4 py-3 bg-[#0F172A] border rounded-none text-sm focus:outline-none focus:ring-1 focus:ring-brand-light focus:border-brand-light transition-colors text-white border-obsidian-800 min-h-[46px] ${
                      errors.phone ? 'border-brand-light' : 'border-obsidian-800'
                    }`}
                  />
                  {errors.phone && <span className="text-[10px] text-brand-light font-semibold mt-0.5">{errors.phone}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Grade Selection */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="grade" className="text-[10px] font-bold uppercase tracking-wider text-[#CDC7B9]">Current Class/Grade</label>
                  <select
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className={`px-4 py-3 bg-[#0F172A] border rounded-none text-sm focus:outline-none focus:ring-1 focus:ring-brand-light focus:border-brand-light transition-colors text-white border-obsidian-800 min-h-[46px] cursor-pointer ${
                      errors.grade ? 'border-brand-light' : 'border-obsidian-800'
                    }`}
                  >
                    <option value="" disabled>Select class</option>
                    <option value="Class 8">Class 8</option>
                    <option value="Class 9/10">Class 9 / 10</option>
                    <option value="Class 11">Class 11</option>
                    <option value="Class 12 / Dropper">Class 12 / Dropper</option>
                  </select>
                  {errors.grade && <span className="text-[10px] text-brand-light font-semibold mt-0.5">{errors.grade}</span>}
                </div>

                {/* Course Selection */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="course" className="text-[10px] font-bold uppercase tracking-wider text-[#CDC7B9]">Select Course Program</label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className={`px-4 py-3 bg-[#0F172A] border rounded-none text-sm focus:outline-none focus:ring-1 focus:ring-brand-light focus:border-brand-light transition-colors text-white border-obsidian-800 min-h-[46px] cursor-pointer ${
                      errors.course ? 'border-brand-light' : 'border-obsidian-800'
                    }`}
                  >
                    <option value="" disabled>Select program</option>
                    <option value="Apex JEE Excel">Apex JEE Excel (JEE 2028)</option>
                    <option value="JEE Main Express">JEE Main Express (JEE 2027)</option>
                    <option value="Apex NEET Elite">Apex NEET Elite (NEET 2028)</option>
                    <option value="NEET Achievers">NEET Achievers (NEET 2027)</option>
                    <option value="Foundation Alpha">Foundation Alpha (Boards/Olympiads)</option>
                    <option value="Foundation Nexus">Foundation Nexus (Class 8)</option>
                  </select>
                  {errors.course && <span className="text-[10px] text-brand-light font-semibold mt-0.5">{errors.course}</span>}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 py-4 px-6 bg-brand hover:bg-brand-hover disabled:bg-brand/50 text-white text-xs uppercase tracking-wider font-semibold rounded-none shadow transition-colors duration-150 flex items-center justify-center gap-2 cursor-pointer min-h-[46px]"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <span>Submit Enquiry</span>
                )}
              </button>

              {/* Success Alert */}
              {submitSuccess && (
                <div className="mt-4 p-4 rounded-none bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-2.5">
                  <span className="text-sm font-semibold">Thank you! Your enquiry has been received. Our advisors will call you shortly.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer Base */}
        <div className="border-t border-obsidian-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs md:text-sm text-[#CDC7B9]">
            © 2026 Apex Academy. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="#" className="w-9 h-9 rounded-none bg-[#1E293B] hover:bg-brand/20 border border-obsidian-800 text-[#CDC7B9] hover:text-white flex items-center justify-center transition-colors">
              <Facebook size={16} />
            </a>
            <a href="#" className="w-9 h-9 rounded-none bg-[#1E293B] hover:bg-brand/20 border border-obsidian-800 text-[#CDC7B9] hover:text-white flex items-center justify-center transition-colors">
              <Twitter size={16} />
            </a>
            <a href="#" className="w-9 h-9 rounded-none bg-[#1E293B] hover:bg-brand/20 border border-obsidian-800 text-[#CDC7B9] hover:text-white flex items-center justify-center transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" className="w-9 h-9 rounded-none bg-[#1E293B] hover:bg-brand/20 border border-obsidian-800 text-[#CDC7B9] hover:text-white flex items-center justify-center transition-colors">
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
