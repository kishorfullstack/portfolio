'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';

type Props = {
  path: any;
  className?: string;
};

const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  { ssr: false }
);

const isStaticImage = (path: any): path is string =>
  typeof path === 'string' &&
  (path.endsWith('.svg') ||
    path.endsWith('.png') ||
    path.endsWith('.jpg') ||
    path.endsWith('.jpeg') ||
    path.endsWith('.webp'));

const ShowLottie = ({ path, className = '' }: Props) => {
  return (
    <motion.div
      className={`relative max-w-sm md:max-w-md ${className}`}
      initial={{ opacity: 0, scale: 0.88, y: 24 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Ambient glow behind the animation */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-3xl opacity-40"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(139,92,246,0.35) 0%, rgba(6,182,212,0.18) 50%, transparent 75%)',
        }}
      />

      {/* Floating wrapper */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        {/* Soft glow ring */}
        <div
          className="pointer-events-none absolute inset-4 -z-10 rounded-full blur-2xl opacity-25"
          style={{
            background:
              'conic-gradient(from 0deg, #7c3aed, #22d3ee, #f472b6, #7c3aed)',
          }}
        />

        {isStaticImage(path) ? (
          <Image
            src={path}
            alt=""
            width={520}
            height={520}
            priority={false}
            className="w-full h-auto drop-shadow-xl"
          />
        ) : (
          <Player
            autoplay
            loop
            src={path}
            className="w-full h-auto drop-shadow-xl"
          />
        )}
      </motion.div>
    </motion.div>
  );
};

export default ShowLottie;
