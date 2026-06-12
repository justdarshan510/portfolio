import React from 'react';
import { FadeIn } from './FadeIn';

const LANGUAGES = [
  {
    name: 'TypeScript',
    category: 'Full-Stack & Web',
    desc: 'Scalable web architecture, type-safe APIs, and robust frontend application structure.',
    color: 'rgba(49, 120, 198, 0.4)', // TS Blue
    borderColor: 'hover:border-[#3178C6]/50',
    logo: (
      <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <text x="13" y="19" fill="white" fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="11">TS</text>
      </svg>
    )
  },
  {
    name: 'JavaScript',
    category: 'Full-Stack & Web',
    desc: 'Dynamic scripting, asynchronous programming, and runtime execution environments.',
    color: 'rgba(247, 223, 30, 0.3)', // JS Yellow
    borderColor: 'hover:border-[#F7DF1E]/50',
    logo: (
      <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <text x="14" y="19" fill="black" fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="11">JS</text>
      </svg>
    )
  },
  {
    name: 'Python',
    category: 'AI & Backend',
    desc: 'Data pipeline engineering, machine learning workflows, and automated microservices.',
    color: 'rgba(55, 118, 171, 0.4)', // Python Blue
    borderColor: 'hover:border-[#3776AB]/50',
    logo: (
      <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.95 2C6.42 2 6.77 4.38 6.77 5.58v2.22h5.36c.4 0 .73.33.73.73v5.36h1.79c1.2 0 3.58-.35 3.58-5.88s-2.38-5.88-3.58-5.88H11.95z" fill="#3776AB"/>
        <path d="M12.05 22c5.53 0 5.18-2.38 5.18-3.58V16.2h-5.36a.73.73 0 01-.73-.73v-5.36H9.35c-1.2 0-3.58.35-3.58 5.88S8.15 22 9.35 22h2.7z" fill="#FFE052"/>
        <circle cx="9.25" cy="5.25" r="0.75" fill="#FFF"/>
        <circle cx="14.75" cy="18.75" r="0.75" fill="#FFF"/>
      </svg>
    )
  },
  {
    name: 'React',
    category: 'Frontend & UI',
    desc: 'Component-driven user interfaces, state synchronization, and high-performance SPAs.',
    color: 'rgba(97, 218, 251, 0.3)', // React Cyan
    borderColor: 'hover:border-[#61DAFB]/50',
    logo: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
        <g stroke="#61DAFB" strokeWidth="1">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    )
  },
  {
    name: 'C++',
    category: 'Algorithms & Systems',
    desc: 'High-performance application code, custom system engines, and optimal data structures.',
    color: 'rgba(0, 89, 156, 0.4)', // C++ Dark Blue
    borderColor: 'hover:border-[#00599C]/50',
    logo: (
      <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1.5L21.1 6.8v10.4L12 22.5L2.9 17.2V6.8L12 1.5Z" fill="#00599C" />
        <text x="6" y="16.5" fill="white" fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="9">C++</text>
      </svg>
    )
  },
  {
    name: 'SQL',
    category: 'Databases & Backend',
    desc: 'Relational data modeling, advanced queries, and database optimization workflows.',
    color: 'rgba(51, 103, 145, 0.4)', // SQL Blue
    borderColor: 'hover:border-[#336791]/50',
    logo: (
      <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" stroke="#336791" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="5" rx="9" ry="3" fill="#336791" fillOpacity="0.2" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    )
  }
];

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="bg-[#DCD5C6] text-[#121212] px-5 sm:px-8 md:px-10 py-24 sm:py-32 relative z-25 flex flex-col items-center"
    >
      <div className="max-w-5xl w-full mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading-dark font-black uppercase tracking-tight leading-none mb-4"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              Skills
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} y={20}>
            <p className="text-[#121212]/70 uppercase tracking-widest text-xs sm:text-sm mt-4 max-w-lg mx-auto leading-relaxed">
              Programming languages and key technologies that empower my full-stack applications and AI-powered solutions.
            </p>
          </FadeIn>
        </div>

        {/* Grid of Languages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          {LANGUAGES.map((lang, i) => (
            <FadeIn
              key={lang.name}
              delay={i * 0.08}
              y={30}
              className="group relative"
            >
              <div 
                className={`h-full bg-[#E3DBD0]/60 border border-[#121212]/10 rounded-[30px] p-6 md:p-8 flex flex-col items-start text-left transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] ${lang.borderColor}`}
                style={{
                  boxShadow: `0 0 0px 0px transparent`,
                }}
              >
                {/* Brand color glow effect behind card */}
                <div 
                  className="absolute inset-0 -z-10 rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${lang.color} 0%, transparent 70%)`
                  }}
                />

                {/* Logo & Category Header */}
                <div className="flex justify-between items-center w-full mb-6">
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {lang.logo}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-[#8A1425] font-semibold bg-[#D2C8BA] px-3 py-1.5 rounded-full border border-[#121212]/5">
                    {lang.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-xl md:text-2xl uppercase tracking-wider text-[#121212] mb-3 group-hover:text-[#8A1425] transition-colors duration-200">
                  {lang.name}
                </h3>

                {/* Description */}
                <p className="text-sm font-light leading-relaxed text-[#121212]/80">
                  {lang.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
