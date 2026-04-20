import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white text-slate-900 font-sans">


        <section className="relative overflow-hidden py-24">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>


          <div className="container mx-auto px-6 md:px-8 2xl:px-20 flex flex-col lg:flex-row items-center gap-16 relative z-10">

            <div className="lg:w-1/2 2xl:w-3/5 text-center lg:text-left">
              <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-blue-700 uppercase bg-blue-100/50 rounded-full">
                Our Vision 2026
              </div>
              <h1 className="text-5xl lg:text-6xl 2xl:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
                Revolutionizing <br />
                The Way <span className="text-blue-700">World Works.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 lg:border-l-4 lg:border-blue-600 lg:pl-6">
                TalentGrid isn't just a job board. We are an AI-driven ecosystem designed to connect human potential with the world's most innovative companies.
              </p>
            </div>

            <div className="lg:w-1/2 2xl:w-2/5 w-full">
              <div className="relative group max-w-md mx-auto lg:ml-auto lg:mr-0">
                <div className="absolute -inset-4 bg-blue-600 rounded-2xl rotate-3 opacity-20 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="relative bg-blue-900 aspect-square rounded-2xl flex items-center justify-center p-10 shadow-2xl">
                  <h2 className="text-white text-4xl lg:text-5xl font-black leading-tight tracking-tighter text-center">
                    WE <br /> UNLOCK <br /> POTENTIAL.
                  </h2>
                </div>
              </div>
            </div>

          </div>
        </section>


        <section className="py-24 bg-white border-b border-slate-100">
          <div className="container mx-auto px-6 md:px-8 2xl:px-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-center md:text-left">
              {[
                { label: "Active Job Seekers", value: "645 Million", desc: "Building careers across the globe" },
                { label: "Partner Organizations", value: "3.3 Million", desc: "From startups to Fortune 500s" },
                { label: "Placements Made", value: "27 Per Min", desc: "Real-time impact every second" }
              ].map((stat, i) => (
                <div key={i} className="p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
                  <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-3">{stat.label}</p>
                  <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-3">{stat.value}</h3>
                  <p className="text-slate-500 font-medium">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-8 2xl:px-20 flex flex-col md:flex-row items-center gap-16 lg:gap-24">

            <div className="md:w-1/2 w-full">
              <div className="relative max-w-lg mx-auto md:mx-0">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000"
                  className="rounded-[2.5rem] shadow-2xl border-8 border-white grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover"
                  alt="Our Team"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-2xl hidden lg:block shadow-xl">
                  <p className="text-3xl font-black">500+</p>
                  <p className="text-sm font-medium opacity-80 mt-1">Global Employees</p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 w-full text-center md:text-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">Built by Developers, <br /> For Everyone.</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
                Our culture is rooted in engineering excellence and empathetic design. We believe that by solving the hardest problems in recruitment, we create a better future for the global workforce.
              </p>
              <ul className="space-y-4 max-w-xl mx-auto md:mx-0">
                {['Inclusive environment', 'Remote-first culture', 'Innovation labs'].map((item, idx) => (
                  <li key={idx} className="flex items-center justify-center md:justify-start gap-4 font-semibold text-slate-700 text-lg">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>


        <section className="py-12 pb-32 bg-white">
          <div className="container mx-auto px-6 md:px-8 2xl:px-20">
            <div className="bg-slate-900 rounded-[3rem] p-10 lg:p-20 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden">

              <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] -ml-40 -mb-40"></div>

              <div className="lg:w-1/2 relative z-10 text-center lg:text-left">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Global Leadership</h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
                  Our executive team brings together decades of experience from Silicon Valley and global markets to ensure TalentGrid stays at the forefront of HR tech.
                </p>
                <button className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all transform active:scale-95 shadow-xl">
                  Executive Board
                </button>
              </div>

              <div className="lg:w-1/2 relative z-10 w-full">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000"
                  alt="Leadership"
                  className="rounded-4xl shadow-2xl opacity-90 hover:opacity-100 transition-opacity w-full max-w-lg mx-auto lg:ml-auto lg:mr-0 object-cover aspect-4/3"
                />
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default AboutPage;