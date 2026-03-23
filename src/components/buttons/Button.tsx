'use client';
import { removeKeys } from '@/lib/utils/helper';

import { motion, MotionProps } from 'framer-motion';
import Link from 'next/link';

interface DefaultProps {
  children: React.ReactNode | string;
  className?: string;
  size?: 'lg' | 'sm';
  center?: boolean;
}

interface LinkProps extends DefaultProps {
  href: string;
  sameTab?: boolean;
}

interface ButtonProps extends DefaultProps {
  onClick?: (event: React.MouseEvent) => void;
}

type Props =
  | ({
      type?: 'button';
    } & ButtonProps)
  | ({
      type: 'link';
    } & LinkProps);

// For separating animation props from button props
const buttonProps: Array<keyof Props | keyof LinkProps> = [
  'center',
  'children',
  'className',
  'size',
  'type',
  'href',
];

const Button = (props: Props & MotionProps) => {
  const {
    className,
    children,
    type = 'button',
    size = 'sm',
    center = false,
  } = props;

  const classes = `${
    size === 'sm'
      ? 'p-2 px-4 text-sm'
      : 'text-sm p-4 px-7'
  } block ${
    center ? 'mx-auto' : ''
  } w-fit font-mono capitalize rounded-lg relative overflow-hidden
  bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold
  shadow-lg shadow-violet-500/25 hover:shadow-violet-500/45
  hover:-translate-y-0.5 focus:outline-none
  transition-all duration-200 cursor-pointer
  before:absolute before:inset-0 before:bg-white/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200
  ${className}`;

  // TODO: Needs to improve this framer motion logic
  if (props.type === 'link') {
    const { sameTab, ...motionProps } = props;
    removeKeys<Props & LinkProps>(motionProps, buttonProps);

    return (
      <motion.span {...motionProps}>
        <Link
          className={classes}
          href={props.href}
          target={sameTab ? '_self' : '_blank'}
          rel="noopener noreferrer"
        >
          {children}
        </Link>
      </motion.span>
    );
  }

  if (type == 'button') {
    return (
      <button type={type} className={classes} onClick={props.onClick}>
        {children}
      </button>
    );
  }

  return <></>;
};

export default Button;
