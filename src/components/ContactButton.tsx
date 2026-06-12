import React from 'react';

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`relative rounded-full text-white font-semibold uppercase tracking-widest transition-transform duration-200 active:scale-95 px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base select-none ${className}`}
      style={{
        background: 'linear-gradient(135deg, #8A1425 0%, #B21F35 100%)',
        boxShadow: '0px 4px 20px rgba(138, 20, 37, 0.25), inset 0px 2px 8px rgba(255, 255, 255, 0.3)',
        outline: '2px solid #DCD5C6',
        outlineOffset: '-3px',
      }}
    >
      Contact Me
    </button>
  );
};
