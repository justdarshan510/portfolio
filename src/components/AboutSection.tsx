import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';

// Import local transparent computer setup assets
import cpuImg from '../assets/computer_cpu.png';
import monitorImg from '../assets/computer_monitor.png';
import keyboardImg from '../assets/computer_keyboard.png';
import mouseImg from '../assets/computer_mouse.png';

interface AboutSectionProps {
  onNavigate: (page: 'about' | 'skills' | 'projects' | 'contact') => void;
}

interface FloatingAssetProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  duration?: number;
  yRange?: number[];
  xRange?: number[];
  rotateRange?: number[];
  initialX?: number;
  widthClass: string;
}

const FloatingAsset: React.FC<FloatingAssetProps> = ({
  src,
  alt,
  className = '',
  delay = 0,
  duration = 5,
  yRange = [0, -8, 0],
  xRange = [0, 4, 0],
  rotateRange = [0, 1.5, 0],
  initialX = 0,
  widthClass
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: initialX, scale: 0.8 }}
      whileInView={{ opacity: 0.85, x: 0, scale: 1 }}
      viewport={{ once: true }}
      animate={{
        y: yRange,
        x: xRange,
        rotate: rotateRange
      }}
      transition={{
        y: { duration: duration, repeat: Infinity, ease: 'easeInOut', delay: delay },
        x: { duration: duration * 1.2, repeat: Infinity, ease: 'easeInOut', delay: delay },
        rotate: { duration: duration * 1.5, repeat: Infinity, ease: 'easeInOut', delay: delay }
      }}
      whileHover={{
        scale: 1.06,
        opacity: 1,
        filter: 'drop-shadow(0 15px 30px rgba(138, 20, 37, 0.15))',
        transition: { duration: 0.3 }
      }}
      className={`absolute z-10 pointer-events-auto select-none transition-all duration-300 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className={`${widthClass} h-auto object-contain`}
      />
    </motion.div>
  );
};

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center relative py-24 sm:py-32 px-5 sm:px-8 md:px-10 overflow-hidden bg-[#DCD5C6] text-[#121212] pb-24 sm:pb-32"
    >
      {/* Decorative 3D computer setup elements positioned absolutely in corners */}
      {/* Top-left: CPU Tower */}
      <FloatingAsset
        src={cpuImg}
        alt="PC Tower 3D"
        className="top-[4%] left-[1%] sm:left-[2%] md:left-[4%]"
        delay={0.15}
        duration={5.2}
        initialX={-80}
        widthClass="w-[100px] sm:w-[130px] md:w-[170px]"
      />

      {/* Bottom-left: Keyboard */}
      <FloatingAsset
        src={keyboardImg}
        alt="Keyboard 3D"
        className="bottom-[18%] left-[2%] sm:left-[4%] md:left-[6%]"
        delay={0.3}
        duration={5.8}
        yRange={[0, 8, 0]}
        xRange={[0, 3, 0]}
        initialX={-80}
        widthClass="w-[120px] sm:w-[150px] md:w-[200px]"
      />

      {/* Top-right: Monitor */}
      <FloatingAsset
        src={monitorImg}
        alt="Monitor 3D"
        className="top-[4%] right-[1%] sm:right-[2%] md:right-[4%]"
        delay={0.2}
        duration={6.0}
        yRange={[0, -10, 0]}
        xRange={[0, -4, 0]}
        initialX={80}
        widthClass="w-[100px] sm:w-[130px] md:w-[170px]"
      />

      {/* Bottom-right: Mouse */}
      <FloatingAsset
        src={mouseImg}
        alt="Mouse 3D"
        className="bottom-[18%] right-[2%] sm:right-[4%] md:right-[6%]"
        delay={0.4}
        duration={4.8}
        yRange={[0, -8, 0]}
        xRange={[0, -5, 0]}
        initialX={80}
        widthClass="w-[80px] sm:w-[100px] md:w-[130px]"
      />

      {/* Center text container */}
      <div className="flex flex-col items-center max-w-[560px] text-center z-20">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full">
          <h2
            className="hero-heading-dark font-black uppercase leading-none tracking-tight text-center mb-10 sm:mb-14 md:mb-16"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Paragraph */}
        <FadeIn delay={0.1} y={20} className="w-full">
          <p
            className="text-[#121212]/85 font-normal leading-relaxed mb-16 sm:mb-20 md:mb-24 text-center select-none"
            style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}
          >
            I am an Information Technology undergraduate focused on full-stack development, artificial intelligence, and modern web technologies. I build scalable applications, experiment with emerging technologies, and enjoy transforming ideas into intuitive digital experiences. I&apos;m always eager to learn, collaborate, and create solutions that make a difference
          </p>
        </FadeIn>

        {/* Contact Button */}
        <FadeIn delay={0.2} y={20}>
          <ContactButton onClick={() => onNavigate('contact')} />
        </FadeIn>
      </div>
    </section>
  );
};
