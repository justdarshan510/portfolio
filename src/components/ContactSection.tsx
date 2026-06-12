import React from 'react';
import { FadeIn } from './FadeIn';

export const ContactSection: React.FC = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-16 sm:py-24 relative overflow-hidden bg-[#DCD5C6] text-[#121212]">
      <div className="max-w-5xl w-full mx-auto flex flex-col items-center gap-10 text-center relative z-20">
        <FadeIn delay={0.1} y={30}>
          <h2 className="hero-heading-dark font-black uppercase text-5xl sm:text-7xl md:text-8xl tracking-wider select-none leading-none mb-2">
            Let&apos;s Create
          </h2>
        </FadeIn>

        <FadeIn delay={0.25} y={20} className="max-w-lg">
          <p className="text-[#121212]/80 font-light uppercase tracking-wider text-xs sm:text-sm md:text-base leading-relaxed">
            Have an idea, project, or collaboration in mind? I&apos;m always excited to work on innovative web applications, AI-powered solutions, and creative digital experiences. Feel free to reach out—I&apos;d love to hear from you.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} y={20}>
          <a
            href="mailto:just.darshan510@gmail.com"
            className="text-[#8A1425] font-semibold tracking-widest text-xl sm:text-3xl md:text-4xl hover:opacity-70 transition-opacity duration-200 uppercase border-b-2 border-[#8A1425] pb-2 select-none"
          >
            just.darshan510@gmail.com
          </a>
        </FadeIn>

        <FadeIn delay={0.55} y={20} className="flex gap-8 mt-8 text-[#121212]/60 uppercase tracking-widest text-xs select-none">
          <a href="https://www.instagram.com/just.darshan510" target="_blank" rel="noopener noreferrer" className="hover:text-[#8A1425] transition-colors duration-200">
            Instagram
          </a>
          <a href="https://github.com/justdarshan510" target="_blank" rel="noopener noreferrer" className="hover:text-[#8A1425] transition-colors duration-200">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/darshan-sudhakar-b106ba39b" target="_blank" rel="noopener noreferrer" className="hover:text-[#8A1425] transition-colors duration-200">
            LinkedIn
          </a>
        </FadeIn>

        <FadeIn delay={0.7} y={15} className="mt-16 sm:mt-24">
          <p className="text-[10px] sm:text-xs text-[#121212]/30 uppercase tracking-widest select-none">
            &copy; {new Date().getFullYear()} Darshan -- 3D Creator. All rights reserved.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
