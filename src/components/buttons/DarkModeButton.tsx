'use client';
import { useTheme } from '@/lib/hooks/use-theme';

import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const DarkModeButton = ({
  className,
  onClick,
  ...rest
}: Props & MotionProps) => {
  const { isDarkMode, toggle } = useTheme();

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick && onClick(e);
    toggle();
  };

  return (
    <motion.button
      className={`rounded-xl p-1.5 hover:bg-violet-500/15 hover:text-accent focus:text-accent focus:outline-none focus:bg-violet-500/15 cursor-pointer w-fit border border-transparent hover:border-violet-400/25 ${className} duration-200 transition-all`}
      onClick={clickHandler}
      {...rest}
    >
      <Icon
        icon={isDarkMode ? 'carbon:sun' : 'ph:moon'}
        width="26"
        height="26"
      />
    </motion.button>
  );
};

export default DarkModeButton;
