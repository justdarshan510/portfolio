import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', style }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalChars = text.length;

  let globalIndex = 0;

  return (
    <p ref={containerRef} className={className} style={style}>

      {words.map((word, wordIdx) => {
        const chars = word.split('');
        return (
          <span key={wordIdx} className="inline-block whitespace-nowrap">
            {chars.map((char, charIdx) => {
              const index = globalIndex;
              globalIndex++;
              return (
                <Character
                  key={charIdx}
                  char={char}
                  index={index}
                  total={totalChars}
                  progress={scrollYProgress}
                />
              );
            })}
            {wordIdx < words.length - 1 && (
              <Character
                char=" "
                index={globalIndex++}
                total={totalChars}
                progress={scrollYProgress}
              />
            )}
          </span>
        );
      })}
    </p>
  );
};

interface CharacterProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const Character: React.FC<CharacterProps> = ({ char, index, total, progress }) => {
  const step = 1 / total;
  const start = index * step;
  const end = Math.min(start + step * 2, 1); // overlap slightly for visual smoothness

  const opacity = useTransform(
    progress,
    [0, start, end, 1],
    [0.2, 0.2, 1, 1]
  );

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none">{char === ' ' ? '\u00A0' : char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0 pointer-events-none">
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
};
