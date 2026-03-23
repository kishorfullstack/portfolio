'use client';
import { Icon } from '@iconify/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

type Props = {
  src: string;
  name: string;
};

const SkillIcon = ({ src, name }: Props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative grid place-items-center cursor-pointer"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6, scale: 1.12 }}
      whileTap={{ scale: 0.93 }}
      transition={{ type: 'spring', stiffness: 400, damping: 18 }}
    >
      {/* Animated glow ring — spins on hover */}
      <motion.span
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={hovered ? { opacity: 1, rotate: 360 } : { opacity: 0, rotate: 0 }}
        transition={hovered
          ? { opacity: { duration: 0.2 }, rotate: { duration: 3, repeat: Infinity, ease: 'linear' } }
          : { opacity: { duration: 0.3 }, rotate: { duration: 0 } }
        }
        style={{
          background: 'conic-gradient(from 0deg, #7c3aed, #22d3ee, #f472b6, #7c3aed)',
          padding: '2px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      {/* Card */}
      <div
        className="relative grid place-items-center h-14 w-14 sm:h-16 sm:w-16 rounded-2xl
          backdrop-blur-xl border bg-white/75 dark:bg-white/8
          transition-colors duration-300"
        style={{
          borderColor: hovered ? 'rgba(167,139,250,0.55)' : 'rgba(167,139,250,0.15)',
          boxShadow: hovered
            ? '0 0 18px rgba(124,58,237,0.35), 0 4px 20px rgba(124,58,237,0.18)'
            : '0 2px 10px rgba(124,58,237,0.08)',
        }}
      >
        {/* Pulse glow behind icon on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.span
              className="absolute inset-0 rounded-2xl pointer-events-none"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.25 }}
              style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 70%)' }}
            />
          )}
        </AnimatePresence>

        <motion.div
          animate={hovered ? { scale: 1.15, rotate: [0, -8, 8, 0] } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="text-2xl"
        >
          <Icon icon={src} width="32" height="32" />
        </motion.div>
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute -top-11 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
            initial={{ opacity: 0, y: 6, scale: 0.88 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            <div className="px-2.5 py-1 text-xs font-medium text-white capitalize rounded-lg whitespace-nowrap
              bg-[#1e1b2e]/95 border border-violet-400/30 backdrop-blur shadow-lg shadow-violet-500/20">
              {name}
              {/* Arrow */}
              <span
                className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0"
                style={{
                  borderLeft: '5px solid transparent',
                  borderRight: '5px solid transparent',
                  borderTop: '5px solid rgba(30,27,46,0.95)',
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SkillIcon;
