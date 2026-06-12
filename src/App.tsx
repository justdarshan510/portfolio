import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { User, Wrench, MousePointer2, Mail } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Page = 'about' | 'skills' | 'projects' | 'contact';

const NAV_ICONS: Record<Page, LucideIcon> = {
  about: User,
  skills: Wrench,
  projects: MousePointer2,
  contact: Mail,
};

function App() {
  const [activePage, setActivePage] = useState<Page>('about');

  const renderPage = () => {
    switch (activePage) {
      case 'about':
        return (
          <div className="flex flex-col w-full h-full">
            <HeroSection onNavigate={setActivePage} />
            <AboutSection onNavigate={setActivePage} />
          </div>
        );
      case 'skills':
        return <SkillsSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return (
          <div className="flex flex-col w-full h-full">
            <HeroSection onNavigate={setActivePage} />
            <AboutSection onNavigate={setActivePage} />
          </div>
        );
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#DCD5C6] text-[#121212] overflow-x-clip select-none flex flex-col">
      {/* Shared Navbar */}
      <header className="w-full z-40 sticky top-0 bg-[#DCD5C6]/90 backdrop-blur-md border-b border-[#121212]/5">
        <nav className="flex justify-between items-center px-6 md:px-10 py-6 md:py-8 w-full max-w-7xl mx-auto">
          <div className="flex justify-between w-full">
            {['About', 'Skills', 'Projects', 'Contact'].map((link) => {
              const linkId = link.toLowerCase() as Page;
              const isActive = activePage === linkId;
              const Icon = NAV_ICONS[linkId];
              
              const linkColorClass = isActive 
                ? 'text-[#8A1425] font-black scale-105' 
                : 'text-[#121212]/60 hover:text-[#8A1425]/80 font-semibold';

              return (
                <button
                  key={link}
                  onClick={() => setActivePage(linkId)}
                  className={`flex items-center gap-1.5 md:gap-2 uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.3rem] transition-all duration-300 cursor-pointer bg-transparent border-none outline-none ${linkColorClass}`}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" strokeWidth={1.8} />
                  <span>{link}</span>
                </button>
              );
            })}
          </div>
        </nav>
      </header>

      {/* Pages with exit/enter transitions */}
      <main className="flex-grow w-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="w-full h-full"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
