import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your submission logic or email hook connection goes here
    alert(`Thank you ${formData.name}! Your message has been sent successfully.`);
    setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen px-6 md:px-12 py-16 text-black">
      <div className="max-w-4xl mx-auto">
        
        {/* ================= HEADER INTRO AREA ================= */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 bg-[#EEEDEA] text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
            CONNECT
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6">
            Let's Build Something <br />
            <span className="text-[#1D4ED8]">Exceptional Together.</span>
          </h1>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl font-normal">
            Have an interesting project, a full-time opportunity, or just want to chat about engineering and FinTech? Drop a line below.
          </p>
        </header>

        {/* ================= CONTENT SPLIT LAYOUT ================= */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          
          {/* Left Column: Direct Channels */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-xs font-black tracking-widest text-gray-400 uppercase mb-3">Direct Mail</h3>
              <a 
                href="mailto:abasifrekesmart@gmail.com" 
                className="text-black font-semibold text-lg hover:text-[#1D4ED8] transition-colors break-words"
              >
                ahbazmonday@example.com
              </a>
            </div>

            <div>
              <h3 className="text-xs font-black tracking-widest text-gray-400 uppercase mb-3">Location</h3>
              <p className="text-gray-600 font-medium text-base">
                Uyo, Nigeria <br />
                <span className="text-gray-400 text-sm">Available for international remote contracts</span>
              </p>
            </div>

            <div>
              <h3 className="text-xs font-black tracking-widest text-gray-400 uppercase mb-3">Professional Networks</h3>
              <ul className="space-y-2 font-semibold text-base">
                <li>
                  <a href="https://github.com/dashboard" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black transition-colors flex items-center gap-1.5">
                    GitHub <span>↗</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/feed" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black transition-colors flex items-center gap-1.5">
                    LinkedIn <span>↗</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="md:col-span-3 bg-white border border-gray-200/60 p-6 md:p-8 rounded-2xl shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-gray-400 tracking-wider uppercase mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-[#FAF9F5] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold text-gray-400 tracking-wider uppercase mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-[#FAF9F5] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] transition-all"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-bold text-gray-400 tracking-wider uppercase mb-2">Inquiry Type</label>
                <select 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-[#FAF9F5] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1D4ED8] transition-all text-gray-700 font-medium"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Full-Time Role">Full-Time / Contract Role</option>
                  <option value="Project Collaboration">Project Collaboration</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-gray-400 tracking-wider uppercase mb-2">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project goals..."
                  className="w-full bg-[#FAF9F5] border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] transition-all resize-none"
                ></textarea>
              </div>

              {/* Animated Submit Button */}
              <button 
                type="submit"
                className="w-full bg-black text-white text-sm font-semibold py-3.5 rounded-xl shadow-sm transform transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:bg-gray-800 hover:scale-[1.02] active:scale-[0.98]"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
