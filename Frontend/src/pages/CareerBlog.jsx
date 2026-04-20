import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const blogs = [
  {
    title: "Mastering the MERN Stack: A Roadmap for 2026",
    excerpt:
      "From specialized hooks to advanced database indexing — everything you need to stand out as a full-stack developer in a competitive market.",
    category: "Engineering",
    date: "Apr 18, 2026",
    readTime: "12 min",
    author: { name: "Arif S.", initials: "AS", bg: "bg-blue-900" },
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800",
  },
  {
    title: "The Art of Writing Resumes that Pass ATS Filters",
    excerpt:
      "Learn how to optimize your professional experience using the right keywords without losing the human touch that makes you memorable.",
    category: "Hiring",
    date: "Apr 15, 2026",
    readTime: "6 min",
    author: { name: "Team TalentGrid", initials: "TG", bg: "bg-emerald-900" },
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800",
  },
  {
    title: "Designing for Scale: Why UI/UX Matters in SaaS",
    excerpt:
      "Building interfaces that remain intuitive as your user base grows from hundreds to millions requires a fundamentally different mindset.",
    category: "Design",
    date: "Apr 12, 2026",
    readTime: "9 min",
    author: { name: "Sarah J.", initials: "SJ", bg: "bg-purple-900" },
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800",
  },
];

const categories = ["All", "Engineering", "Design", "Strategy", "Hiring"];

export default function CareerBlog() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? blogs : blogs.filter((b) => b.category === active);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
        .font-display { font-family: 'Playfair Display', Georgia, serif !important; }
        .font-body    { font-family: 'DM Sans', system-ui, sans-serif !important; }
        .card-lift    { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .card-lift:hover { transform: translateY(-4px); box-shadow: 0 20px 48px rgba(0,0,0,0.10); }
        .card-lift:hover .img-zoom { transform: scale(1.05); }
        .img-zoom     { transition: transform 0.6s ease; }
        .featured-wrap:hover .featured-img { transform: scale(1.04); }
        .featured-img { transition: transform 0.8s ease; }
      `}</style>

      <div className="font-body bg-stone-50 text-stone-900 min-h-screen">
        <Navbar />

        {/* ── HERO ── */}
        <section className="bg-stone-50 border-b border-stone-200 pt-20 pb-16">
          <div className="max-w-6xl mx-auto px-8 lg:px-10">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-blue-600 block" />
              <span className="font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-blue-600">
                Knowledge Hub
              </span>
            </div>

          
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
              <h1 className="font-display text-5xl xl:text-[64px] font-extrabold leading-[1.08] tracking-tight text-stone-950 m-0">
                Insights to fuel
                <br />
                <em className="italic text-blue-600">your career.</em>
              </h1>
              <div>
                <p className="font-body text-lg text-stone-500 leading-relaxed font-light mb-5 max-w-sm">
                  Deep dives into engineering, design, and career strategy —
                  written by practitioners who've been there.
                </p>
                <div className="flex items-center gap-4 font-body text-xs font-medium text-stone-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                    Updated weekly
                  </span>
                  <span className="text-stone-300">·</span>
                  <span>50,000+ readers</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURED ── */}
        <div className="max-w-6xl mx-auto px-8 lg:px-10 pt-12">
          <div className="featured-wrap grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden border border-stone-200 bg-white cursor-pointer">
            {/* Photo */}
            <div className="relative h-72 lg:h-auto overflow-hidden">
              <img
                className="featured-img w-full h-full object-cover block"
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900"
                alt="Featured"
              />
              <div className="absolute inset-0 bg-linear-to-r from-black/20 to-transparent" />
            </div>

          
            <div className="bg-stone-950 flex flex-col justify-center px-10 lg:px-14 py-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-body text-[9px] font-black tracking-[0.2em] uppercase bg-blue-600 text-white px-2.5 py-1 rounded">
                  Editor's Pick
                </span>
                <span className="font-body text-xs text-stone-500 tracking-wide">
                  Apr 20, 2026
                </span>
              </div>

              <h2 className="font-display text-2xl xl:text-[28px] font-bold text-stone-100 leading-snug mb-4 tracking-tight">
                How Generative AI is Redefining the Role of the Junior Developer
              </h2>

              <p className="font-body text-sm text-stone-400 leading-relaxed font-light mb-8 max-w-xs">
                In a world of automated code, the ability to architect systems
                and reason about logic is more valuable than ever before.
              </p>

              <div className="flex items-center justify-between">
                <button className="font-body text-blue-500 text-sm font-semibold tracking-wide bg-transparent border-0 p-0 cursor-pointer hover:text-blue-400 transition-colors">
                  Read Full Story →
                </button>
                <span className="font-body text-xs text-stone-500 border border-stone-700 px-3 py-1 rounded-full">
                  15 min read
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── ARTICLES ── */}
        <section className="max-w-6xl mx-auto px-8 lg:px-10 py-16">
          {/* Header + filter row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-10 pb-6 border-b border-stone-200">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-stone-950 mb-1">
                Latest Articles
              </h2>
              <p className="font-body text-sm text-stone-400 m-0">
                Fresh perspectives added every week
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`font-body text-xs font-medium tracking-wide px-3.5 py-1.5 rounded-full border transition-all duration-200 cursor-pointer
                    ${
                      active === cat
                        ? "bg-stone-950 text-stone-50 border-stone-950"
                        : "bg-transparent text-stone-500 border-stone-300 hover:border-stone-600 hover:text-stone-700"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((blog, i) => (
                <article
                  key={i}
                  className="card-lift bg-white border border-stone-200 rounded-2xl overflow-hidden flex flex-col cursor-pointer"
                >
                
                  <div className="relative h-48 overflow-hidden">
                    <img
                      className="img-zoom w-full h-full object-cover block"
                      src={blog.image}
                      alt={blog.title}
                    />
                    <span className="font-body absolute top-3 left-3 bg-white text-stone-700 text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full shadow-sm">
                      {blog.category}
                    </span>
                  </div>

                  
                  <div className="flex flex-col flex-1 p-6">
                
                    <div className="font-body flex gap-2 items-center text-[11px] font-medium uppercase tracking-wider text-stone-400 mb-3">
                      <span>{blog.date}</span>
                      <span>·</span>
                      <span>{blog.readTime} read</span>
                    </div>

                  
                    <h3 className="font-display text-[18px] font-bold leading-snug text-stone-950 mb-3 tracking-tight line-clamp-2">
                      {blog.title}
                    </h3>

                  
                    <p className="font-body text-sm text-stone-500 leading-relaxed font-light line-clamp-3 flex-1 mb-5">
                      {blog.excerpt}
                    </p>

                  
                    <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-7 h-7 rounded-full ${blog.author.bg} flex items-center justify-center text-white font-body text-[10px] font-bold tracking-wide`}
                        >
                          {blog.author.initials}
                        </div>
                        <span className="font-body text-sm font-medium text-stone-700">
                          {blog.author.name}
                        </span>
                      </div>
                      <button className="font-body text-amber-600 text-xs font-semibold tracking-wide bg-transparent border-0 p-0 cursor-pointer hover:text-amber-700 transition-colors">
                        Read →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="font-body text-center py-16 text-stone-400 text-sm">
              No articles in this category yet — check back soon.
            </div>
          )}
        </section>

        {/* ── NEWSLETTER ── */}
        <section className="bg-stone-950 py-20 px-8 lg:px-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Copy */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-px bg-blue-600 block" />
                <span className="font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-blue-600">
                  Newsletter
                </span>
              </div>
              <h2 className="font-display text-4xl xl:text-5xl font-bold text-stone-100 leading-tight tracking-tight mb-4">
                Weekly insights,
                <br />
                <em className="italic text-blue-500">in your inbox.</em>
              </h2>
              <p className="font-body text-base text-stone-400 leading-relaxed font-light max-w-sm">
                Join 50,000+ developers and designers who get our curated career
                advice every Monday morning.
              </p>
            </div>

          
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="name@company.com"
                className="font-body w-full px-5 py-4 rounded-xl bg-stone-900 border border-stone-700 text-stone-200 text-sm placeholder:text-stone-600 outline-none focus:border-blue-600 transition-all"
              />
              <button className="font-body w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold tracking-wide transition-colors duration-200 cursor-pointer border-0">
                Subscribe — it's free
              </button>
              <p className="font-body text-xs text-stone-600 text-center m-0">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}