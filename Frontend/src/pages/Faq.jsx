import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const categories = [
    {
      title: "For Job Seekers",
      questions: [
        {
          q: "How do I apply for a job on TalentGrid?",
          a: "Simply create an account, upload your resume, and click 'Apply Now' on any listing. Your profile is instantly sent to the recruiter."
        },
        {
          q: "How can I track my application status?",
          a: "Check your 'Applied Jobs' dashboard. It updates in real-time as recruiters review, shortlist, or update your status."
        },
        {
          q: "Can I hide my profile from specific companies?",
          a: "Yes, in your Privacy Settings, you can choose to make your profile 'Private' or block specific employer domains."
        }
      ]
    },
    {
      title: "For Recruiters",
      questions: [
        {
          q: "How do I post a new job vacancy?",
          a: "Switch to the Recruiter Dashboard, click 'Post a Job', and fill in the details. Once published, it reaches thousands of active candidates."
        },
        {
          q: "How does the candidate matching work?",
          a: "Our AI analyzes your job description and automatically highlights 'Top Applicants' based on their MERN stack expertise and experience."
        }
      ]
    },
    {
      title: "Account & Safety",
      questions: [
        {
          q: "Is my personal data secure?",
          a: "We use Clerk for bank-grade authentication and encrypt all uploaded resumes. Your data is never shared with third parties without consent."
        },
        {
          q: "I forgot my password, what should I do?",
          a: "On the login screen, click 'Forgot Password'. A secure reset link will be sent to your registered email address immediately."
        }
      ]
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <Navbar />

      <section className="bg-slate-50 py-24 px-8 border-b border-slate-100">
        <div className="container mx-auto text-center max-w-3xl">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] text-blue-700 uppercase bg-blue-100/50 rounded-full">
            Help Center
          </div>
          <h1 className="text-5xl lg:text-6xl font-black tracking-tight mb-8 leading-tight">
            Frequently Asked <span className="text-blue-700">Questions.</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            Everything you need to know about navigating TalentGrid as a professional or an employer.
          </p>
        </div>
      </section>


      <section className="container mx-auto px-8 2xl:px-20 py-24">
        <div className="max-w-4xl mx-auto">
          {categories.map((category, catIdx) => (
            <div key={catIdx} className="mb-16 last:mb-0">
              <h2 className="text-2xl font-black text-slate-900 mb-8 border-l-4 border-blue-600 pl-4 uppercase tracking-tighter">
                {category.title}
              </h2>

              <div className="space-y-4">
                {category.questions.map((faq, qIdx) => {
                  const uniqueIndex = `${catIdx}-${qIdx}`;
                  const isOpen = openIndex === uniqueIndex;

                  return (
                    <div
                      key={qIdx}
                      className={`border rounded-3xl transition-all duration-500 overflow-hidden ${isOpen ? 'border-blue-200 bg-blue-50/30 shadow-xl shadow-blue-900/5' : 'border-slate-100 bg-white hover:border-blue-100'
                        }`}
                    >
                      <button
                        onClick={() => toggleAccordion(uniqueIndex)}
                        className="w-full flex items-center justify-between p-7 text-left outline-none"
                      >
                        <span className={`text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-blue-700' : 'text-slate-800'}`}>
                          {faq.q}
                        </span>
                        <div className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-blue-600 text-white rotate-45' : 'bg-slate-100 text-slate-400'
                          }`}>
                          <span className="text-2xl font-light">+</span>
                        </div>
                      </button>

                      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="px-7 pb-8 text-slate-600 text-lg leading-relaxed border-t border-blue-50 pt-4">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="container mx-auto px-8 2xl:px-20 pb-32">
        <div className="bg-slate-900 rounded-[3rem] p-10 lg:p-20 relative overflow-hidden group">

          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] group-hover:bg-blue-600/20 transition-all duration-700"></div>
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <div className="text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Support Available 24/7
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                Still have questions? <br />
                <span className="text-slate-400 font-medium text-3xl lg:text-4xl">We're here to guide you.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                Can't find the answer you're looking for? Reach out to our dedicated support team for personalized assistance.
              </p>
            </div>

            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <button className="w-full sm:w-auto bg-white text-slate-900 px-10 py-4 rounded-2xl font-bold hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-2xl shadow-white/5 active:scale-95">
                Message Support
              </button>
              <button className="w-full sm:w-auto bg-white/5 text-white border border-white/10 px-10 py-4 rounded-2xl font-bold hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm active:scale-95">
                Email Us
              </button>
            </div>
          </div>

        
          <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-blue-600/40 to-transparent"></div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FAQ;