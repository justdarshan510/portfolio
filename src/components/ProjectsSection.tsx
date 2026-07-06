import React, { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { X, RotateCw, Lock, ExternalLink } from 'lucide-react';
import { FadeIn } from './FadeIn';

// Inline high-fidelity custom SVG symbols/icons for codebase languages
const TSIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 select-none shrink-0" fill="currentColor">
    <rect width="24" height="24" rx="4" fill="#3178C6" />
    <text x="18" y="18" fill="white" fontSize="10.5" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="end">TS</text>
  </svg>
);

const JSIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 select-none shrink-0" fill="currentColor">
    <rect width="24" height="24" rx="4" fill="#F7DF1E" />
    <text x="18" y="18" fill="black" fontSize="10.5" fontWeight="900" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="end">JS</text>
  </svg>
);

const PythonIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 select-none shrink-0" fill="none">
    <path fill="url(#python-grad1)" d="M11.95 2C6.87 2 7.15 4.2 7.15 4.2l.01 1.76h4.84v.68H5.15S2 6.3 2 11.37c0 5.07 2.76 4.96 2.76 4.96h1.65v-2.31s-.05-2.77 2.72-2.77h4.81s2.69-.03 2.69-2.58V5.37C16.63 2.82 14.2 2 11.95 2z" />
    <path fill="url(#python-grad2)" d="M12.05 22c5.08 0 4.8-2.2 4.8-2.2l-.01-1.76h-4.84v-.68h6.85s3.15.34 3.15-4.73c0-5.07-2.76-4.96-2.76-4.96h-1.65v2.31s.05 2.77-2.72 2.77H10.1s-2.69.03-2.69 2.58v4.13c0 2.55 2.43 3.37 4.68 3.37z" />
    <circle cx="9.02" cy="3.98" r="0.67" fill="white" />
    <circle cx="14.98" cy="20.02" r="0.67" fill="white" />
    <defs>
      <linearGradient id="python-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3776AB" />
        <stop offset="100%" stopColor="#2B5B84" />
      </linearGradient>
      <linearGradient id="python-grad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD343" />
        <stop offset="100%" stopColor="#DCA212" />
      </linearGradient>
    </defs>
  </svg>
);

const CSSIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 select-none shrink-0" fill="currentColor">
    <path fill="#563D7C" d="M3 2l1.6 17.8L12 22l7.4-2.2L21 2H3z" />
    <path fill="#FFF" opacity="0.9" d="M12 4.1v3.2h4.5l-.2 2.2H12v3.2h1.1l.1 1.1-3.2.9-.2-2H6.6l.4 4.5 5 1.4 5-1.4.6-6.6.1-1.1.2-2.2L18 4.1H12z" />
  </svg>
);

const PROJECTS = [
  {
    num: '01',
    category: 'Personal Project',
    name: 'CricBid',
    link: 'https://cric-bid-kappa.vercel.app/',
    description: 'CricBid is a real-time multiplayer cricket bidding and player auction application. Users join live lobbies, manage franchise budgets, bid dynamically on players, and inspect player performance metrics to assemble a championship team.',
    highlights: ['Real-time Bidding', 'Lobby Rooms', 'Budget Tracking', 'Draft Analytics'],
    languages: [
      { name: 'TypeScript', percentage: 86.2, color: '#3178C6', icon: <TSIcon /> },
      { name: 'JavaScript', percentage: 6.4, color: '#F7DF1E', icon: <JSIcon /> },
      { name: 'Python', percentage: 3.8, color: '#3776AB', icon: <PythonIcon /> },
      { name: 'CSS', percentage: 3.6, color: '#563D7C', icon: <CSSIcon /> }
    ]
  },
  {
    num: '02',
    category: 'AI Tool',
    name: 'Enhancer',
    link: 'https://github.com/justdarshan510/Enhancer',
    description: 'Enhancer is a tool to upscale and improve the quality of blurred images using AI algorithms. It restores details and provides crisp, high-resolution outputs.',
    highlights: ['Image Upscaling', 'AI Processing', 'Resolution Enhancement', 'Python'],
    languages: [
      { name: 'Python', percentage: 95.0, color: '#3776AB', icon: <PythonIcon /> },
      { name: 'JavaScript', percentage: 5.0, color: '#F7DF1E', icon: <JSIcon /> },
      { name: 'CSS', percentage: 0.0, color: '#563D7C', icon: <CSSIcon /> },
      { name: 'TypeScript', percentage: 0.0, color: '#3178C6', icon: <TSIcon /> }
    ]
  },
  {
    num: '03',
    category: 'Dashboard',
    name: 'Hydroponics Dashboard',
    link: 'https://github.com/justdarshan510/hydroponic-dashboard',
    description: 'A comprehensive dashboard for monitoring hydroponic systems. It visualizes data metrics like water levels, pH, and temperature to ensure optimal crop growth.',
    highlights: ['Data Visualization', 'Real-time Metrics', 'Crop Monitoring', 'Responsive UI'],
    languages: [
      { name: 'TypeScript', percentage: 70.0, color: '#3178C6', icon: <TSIcon /> },
      { name: 'CSS', percentage: 30.0, color: '#563D7C', icon: <CSSIcon /> },
      { name: 'JavaScript', percentage: 0.0, color: '#F7DF1E', icon: <JSIcon /> },
      { name: 'Python', percentage: 0.0, color: '#3776AB', icon: <PythonIcon /> }
    ]
  }
];

interface IframeModalProps {
  url: string;
  onClose: () => void;
  title: string;
}

const IframeModal: React.FC<IframeModalProps> = ({ url, onClose, title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleReload = () => {
    if (iframeRef.current) {
      setIsLoading(true);
      iframeRef.current.src = iframeRef.current.src;
    }
  };

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 backdrop-blur-md p-4 sm:p-6 md:p-8 pointer-events-auto"
    >
      {/* Modal Container */}
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 250 }}
        className="bg-[#1E1E1E] border border-white/10 rounded-[24px] overflow-hidden shadow-2xl w-full h-full max-w-6xl relative flex flex-col"
      >
        {/* Mock Browser Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#121212] border-b border-white/5 select-none">
          {/* Left: Window Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] hover:brightness-75 transition duration-150 border-none outline-none cursor-pointer flex items-center justify-center text-[8px] text-black/50 font-bold"
            >
              ×
            </button>
            <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] opacity-75" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] opacity-75" />
          </div>

          {/* Center: Secure URL Address Bar */}
          <div className="flex items-center gap-2 bg-[#1E1E1E] border border-white/10 rounded-full px-4 py-1.5 text-xs text-white/50 w-[50%] max-w-[400px] justify-center relative overflow-hidden">
            <Lock size={10} className="text-[#27C93F] shrink-0" />
            <span className="truncate select-none font-mono text-[10px] sm:text-xs">
              {url.replace(/^https?:\/\//, '')}
            </span>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition duration-150 bg-transparent border-none outline-none cursor-pointer flex items-center justify-center"
              title="Open in new tab"
            >
              <ExternalLink size={14} />
            </a>
            <button
              onClick={handleReload}
              className="text-white/60 hover:text-white transition duration-150 bg-transparent border-none outline-none cursor-pointer flex items-center justify-center"
              title="Reload page"
            >
              <RotateCw size={14} />
            </button>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-[#FF5F56] transition duration-150 bg-transparent border-none outline-none cursor-pointer flex items-center justify-center"
              title="Close viewer"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Content Viewport */}
        <div className="flex-grow flex-1 min-h-0 w-full relative bg-white">
          {isLoading && (
            <div className="absolute inset-0 bg-[#1E1E1E] flex flex-col items-center justify-center gap-4 text-white/70">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border-4 border-[#8A1425]/30 border-t-[#8A1425] animate-spin" />
              </div>
              <span className="text-xs uppercase tracking-widest font-semibold font-mono animate-pulse">
                Initializing Live Sandbox...
              </span>
            </div>
          )}
          <iframe
            ref={iframeRef}
            src={url}
            title={title}
            onLoad={() => setIsLoading(false)}
            className="w-full h-full border-none bg-white"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
};

export const ProjectsSection: React.FC = () => {
  const [activeDemoUrl, setActiveDemoUrl] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="bg-[#DCD5C6] text-[#121212] pt-24 pb-12 px-5 sm:px-8 md:px-10 relative z-30 flex flex-col items-center"
    >
      {/* Heading */}
      <div className="max-w-5xl w-full mx-auto mb-16 sm:mb-20 md:mb-24">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading-dark font-black uppercase text-center tracking-tight leading-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>
      </div>

      {/* Projects Cards container */}
      <div className="max-w-5xl w-full flex flex-col gap-12 sm:gap-20 md:gap-28 pb-32">
        {PROJECTS.map((project, i) => {
          const targetScale = 1 - (PROJECTS.length - 1 - i) * 0.03;
          return (
            <ProjectCard
              key={project.num}
              index={i}
              project={project}
              targetScale={targetScale}
              onOpenDemo={setActiveDemoUrl}
            />
          );
        })}
      </div>

      {/* Embedded Live Demo Portal */}
      <AnimatePresence>
        {activeDemoUrl && (
          <IframeModal
            url={activeDemoUrl}
            onClose={() => setActiveDemoUrl(null)}
            title="Live Demo Sandbox"
          />
        )}
      </AnimatePresence>

      {/* Small copyright footer */}
      <div className="w-full text-center mt-12 text-[#121212]/30 uppercase tracking-widest text-[10px] select-none">
        &copy; {new Date().getFullYear()} Darshan. All rights reserved.
      </div>
    </section>
  );
};

interface ProjectCardProps {
  index: number;
  project: typeof PROJECTS[0];
  targetScale: number;
  onOpenDemo: (url: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ index, project, targetScale, onOpenDemo }) => {
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardContainerRef,
    offset: ['start start', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardContainerRef}
      className="w-full h-auto md:h-[68vh] md:min-h-[600px] flex flex-col justify-start relative mb-8 md:mb-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(5rem + ${index * 28}px)`,
          willChange: 'transform'
        }}
        className="sticky w-full bg-white/40 backdrop-blur-xl border border-white/60 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-5 md:p-6 flex flex-col gap-4 sm:gap-5 h-auto md:h-[63vh] md:min-h-[540px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] select-none pb-6 sm:pb-8 md:pb-6"
      >
        {/* Top Row */}
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-4 sm:gap-6">
            <div
              className="font-black tracking-tight leading-none text-[#121212] select-none opacity-10"
              style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
            >
              {project.num}
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#121212]/50 font-light leading-none mb-1">
                {project.category}
              </span>
              <span
                className="font-semibold uppercase tracking-wider text-[#121212]"
                style={{ fontSize: 'clamp(0.9rem, 2vw, 1.5rem)' }}
              >
                {project.name}
              </span>
            </div>
          </div>

          {/* Live Project Action Buttons: Sandbox Live Preview and direct External Link */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => {
                const sandboxUrl = project.link.includes('github.com') 
                  ? project.link.replace('https://github.com/', 'https://stackblitz.com/github/') 
                  : project.link;
                onOpenDemo(sandboxUrl);
              }}
              className="rounded-full bg-[#121212] text-white hover:bg-[#8A1425] active:scale-95 transition-all duration-300 font-semibold uppercase tracking-wider px-5 py-2 sm:px-6 sm:py-2.5 text-xs select-none border-none outline-none shadow-md cursor-pointer"
              title="Open inside secure iframe sandbox"
            >
              Live Preview
            </button>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/20 hover:bg-white/40 text-[#121212] border border-[#121212]/10 active:scale-95 transition-all duration-300 font-semibold uppercase tracking-wider p-2 sm:p-2.5 flex items-center justify-center shadow-md cursor-pointer shrink-0"
              title="Open site directly on vercel.app in a new tab"
            >
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Bottom Row: Two-Column Layout (Description & Image) */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 w-full flex-grow overflow-visible md:overflow-hidden items-stretch py-1 sm:py-2">
          {/* Left Column (45% width) - Technical & Marketing Description */}
          <div className="w-full md:w-[45%] flex flex-col justify-between text-left select-text gap-4 sm:gap-6">
            <div className="flex flex-col gap-3 sm:gap-4">
              <h4 className="text-[10px] sm:text-xs uppercase tracking-widest text-[#121212]/50 font-bold">
                Project Overview
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-[#121212]/80 leading-relaxed font-light">
                {project.description}
              </p>
            </div>
            
            <div className="flex flex-col gap-3 pt-4 border-t border-[#121212]/5">
              <h4 className="text-[10px] sm:text-xs uppercase tracking-widest text-[#121212]/50 font-bold">
                Key Highlights
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.highlights.map((tag) => (
                  <span 
                    key={tag}
                    className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#8A1425] bg-[#8A1425]/5 border border-[#8A1425]/10 px-2.5 py-1 rounded-full select-none"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (55% width) - Codebase Languages Showcase */}
          <div className="w-full md:w-[55%] flex flex-col justify-between bg-white/20 backdrop-blur-md border border-white/40 rounded-[24px] sm:rounded-[30px] md:rounded-[40px] p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col gap-1.5 text-left">
              <h4 className="text-[10px] sm:text-xs uppercase tracking-widest text-[#121212]/50 font-bold">
                Languages Used
              </h4>
              <p className="text-xs sm:text-sm text-[#121212]/70 font-light leading-relaxed">
                Distribution of programming languages used across the repository.
              </p>
            </div>


            {/* Legend Grid with Custom Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 flex-grow content-center">
              {project.languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center gap-3 bg-white/40 backdrop-blur-sm border border-white/50 rounded-2xl p-3 sm:p-4 shadow-sm hover:scale-[1.02] hover:bg-white/60 transition-all duration-300"
                >
                  <div className="flex items-center justify-center p-1.5 rounded-xl bg-white/80 shadow-sm shrink-0 border border-black/5">
                    {lang.icon}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs sm:text-sm font-semibold text-[#121212]">
                      {lang.name}
                    </span>
                    <span className="text-[10px] sm:text-xs text-[#121212]/60 font-mono font-medium">
                      {lang.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
