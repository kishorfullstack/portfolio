'use client';
import { heroSection } from '@/lib/content/hero';
import { useTheme } from '@/lib/hooks/use-theme';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth } from '@/lib/utils/helper';

import { Button, Wrapper } from '@/components';

import { slideUp } from '@/styles/animations';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  { ssr: false }
);

const Hero = () => {
  const { cta, subtitle, title, tagline, description, specialText } =
    heroSection;

  const { isDarkMode } = useTheme();
  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');
  const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;

  const getAnimationDelay = (i: number, increment = 0.15) =>
    DEFAULT_ANIMATION_DELAY + increment * i;

  return (
    <Wrapper
      id="hero"
      className="relative flex flex-col justify-center h-full min-h-screen gap-10 mt-12 xs:gap-12 xs:mt-0"
    >
      {/* Aurora glow orbs */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full blur-3xl" style={{background: 'radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 70%)'}} />
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-96 w-96 rounded-full blur-3xl" style={{background: 'radial-gradient(circle, rgba(6,182,212,0.16) 0%, transparent 70%)'}} />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full blur-3xl opacity-30" style={{background: 'radial-gradient(circle, rgba(167,139,250,0.10) 0%, transparent 70%)'}} />

      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="flex flex-col gap-6 xs:gap-7">
      <motion.p
        variants={slideUp({ delay: getAnimationDelay(0) })}
        initial="hidden"
        animate="show"
        className="font-mono text-sm md:text-base inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 text-accent backdrop-blur-sm"
      >
        <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        {subtitle}
      </motion.p>

      <div className="max-w-5xl text-4xl font-extrabold tracking-tighter md:text-7xl">
        <motion.h1
          variants={slideUp({ delay: getAnimationDelay(1) })}
          initial="hidden"
          animate="show"
          className="text-[#1e1b2e] dark:text-[#f0ecff] capitalize mb-2 leading-[1.1]"
        >
          {title}
        </motion.h1>
        <motion.h1
          variants={slideUp({ delay: getAnimationDelay(2) })}
          initial="hidden"
          animate="show"
          className="leading-[1.2] bg-gradient-to-r from-violet-500 via-cyan-400 to-pink-400 bg-clip-text text-transparent"
        >
          {tagline}
        </motion.h1>
      </div>

      <motion.p
        variants={slideUp({ delay: getAnimationDelay(3) })}
        initial="hidden"
        animate="show"
        className="max-w-xl text-base md:text-lg text-[#4b4563] dark:text-[#c4b5fd]"
      >
        {description}
      </motion.p>

      <motion.p
        variants={slideUp({ delay: getAnimationDelay(4) })}
        initial="hidden"
        animate="show"
        className="font-mono text-xs md:text-sm px-3 py-1 rounded-md bg-accent/10 text-accent border border-accent/20 w-fit"
      >
        {specialText}
      </motion.p>

      {cta && (
        <Button
          size="lg"
          type="link"
          variants={slideUp({ delay: getAnimationDelay(5) })}
          initial="hidden"
          animate="show"
          href={cta?.url ?? '#'}
          className={`mt-5 xs:mt-8 md:mt-10 ${
            cta.hideInDesktop ? 'md:hidden' : ''
          }`}
          sameTab={cta?.sameTab}
        >
          {cta.title}
        </Button>
      )}
        </div>

        <motion.div
          variants={slideUp({ delay: getAnimationDelay(3, 0.1) })}
          initial="hidden"
          animate="show"
          className="hidden lg:block"
        >
          <div className="relative overflow-hidden rounded-3xl border border-violet-400/20 bg-white/70 dark:bg-white/5 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-transparent to-cyan-400/10" />
            <Player
              autoplay
              loop
              src={isDarkMode ? '/lotties/coding.json' : '/lotties/fullstack.json'}
              className="relative w-full h-auto p-4"
            />
          </div>
        </motion.div>
      </div>
    </Wrapper>
  );
};

export default Hero;
