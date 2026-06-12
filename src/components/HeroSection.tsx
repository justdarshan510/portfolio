import React from 'react';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';
import portraitImg from '../assets/darshan_portrait_new.png';

interface HeroSectionProps {
  onNavigate: (page: 'about' | 'skills' | 'projects' | 'contact') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="min-h-[78vh] sm:min-h-[82vh] bg-[#DCD5C6] text-[#121212] flex flex-col justify-center relative overflow-x-clip select-none pb-12">
      {/* Main Content: Premium 2-Column Layout */}
      <div className="flex-grow flex items-center w-full max-w-7xl mx-auto px-6 md:px-10 py-10 lg:py-0 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* Left Column (60% Width on Large Screens): Copywriting & CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1">
            <FadeIn delay={0.15} y={40}>
              <h1 className="hero-heading-dark font-black uppercase tracking-tight leading-[0.9] text-[10vw] sm:text-[8vw] lg:text-[5rem] xl:text-[6.5rem] select-none mb-6">
                Hi, i&apos;m <br />
                darshan
              </h1>
            </FadeIn>

            <FadeIn delay={0.35} y={20}>
              <p
                className="text-[#121212]/80 font-light uppercase tracking-wide leading-snug max-w-md mb-8"
                style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.35rem)' }}
              >
                building innovative digital experiences through code and creativity
              </p>
            </FadeIn>

            <FadeIn delay={0.5} y={20}>
              <div className="flex justify-start">
                <ContactButton onClick={() => onNavigate('contact')} />
              </div>
            </FadeIn>
          </div>

          {/* Right Column (40% Width on Large Screens): Portrait Graphic */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center order-1 lg:order-2">
            <FadeIn delay={0.6} y={30} className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[440px]">
              <Magnet
                padding={120}
                strength={3}
                activeTransition="transform 0.3s ease-out"
                inactiveTransition="transform 0.6s ease-in-out"
                className="w-full flex justify-center items-center"
              >
                <img
                  src={portraitImg}
                  alt="Darshan Portrait"
                  className="w-full h-auto object-contain pointer-events-none select-none drop-shadow-[0_20px_50px_rgba(138,20,37,0.15)]"
                />
              </Magnet>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};
