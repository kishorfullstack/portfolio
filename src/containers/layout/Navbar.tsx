'use client';
import { navbarSection } from '@/lib/content/navbar';
import { author } from '@/lib/content/portfolio';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth } from '@/lib/utils/helper';

import { Button, DarkModeButton, Link as CLink, NavButton } from '@/components';

import { fadeIn, slideIn } from '@/styles/animations';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';


type NavItemsProps = {
  href?: string;
  children: React.ReactNode;
  index: number;
  delay: number;
  isActive?: boolean;
  onClick?: (event: React.MouseEvent) => void;
};

const NavItem = ({ href, children, onClick, index, delay, isActive }: NavItemsProps) => {
  return (
    <motion.li
      className="group relative"
      variants={slideIn({ delay: delay + index / 10, direction: 'down' })}
      initial="hidden"
      animate="show"
    >
      <CLink
        href={href || `/#${children}`}
        className={`block p-2 duration-300 font-medium ${
          isActive ? 'text-accent' : 'hover:text-accent'
        }`}
        onClick={onClick}
        withPadding
      >
        {children}
      </CLink>
      {/* Active underline indicator */}
      <span
        className={`absolute bottom-0 left-2 right-2 h-[2px] rounded-full transition-all duration-300 ${
          isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`}
        style={{ background: 'linear-gradient(90deg, var(--color-accent), #22d3ee)', transformOrigin: 'left' }}
      />
    </motion.li>
  );
};

const Navbar = () => {
  const { cta, navLinks } = navbarSection;
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');
  const ANIMATION_DELAY = windowWidth <= md ? 0 : 0.8;

  // Extract section IDs from nav URLs (e.g. "/#about" → "about")
  const sectionIds = navLinks
    .map(({ url }) => url.replace('/#', ''))
    .filter(Boolean);

  useEffect(() => {
    const updateActive = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.25;
      // Find the last section whose top is above 25% of the viewport
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top + window.scrollY <= scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    return () => window.removeEventListener('scroll', updateActive);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <motion.header
      variants={fadeIn(0.5)}
      initial="hidden"
      animate="show"
      id="navbar"
      className="fixed inset-x-0 top-0 right-0 z-50 flex items-end justify-between px-8 py-4 duration-500 md:px-6 xl:px-12 backdrop-blur-xl border-b border-violet-500/10 bg-white/60 dark:bg-[#07071a]/70 shadow-sm shadow-violet-500/5"
    >
      <h1 className="relative text-2xl capitalize font-signature group top-1" style={{background: 'linear-gradient(135deg, var(--color-accent), #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
        <Link href="/#hero" className="block">
          {author.name}
          <div className="absolute bottom-1.5 left-0 h-[2px] w-0 group-hover:w-full duration-300 rounded-full" style={{background: 'linear-gradient(90deg, var(--color-accent), #22d3ee)'}}></div>
        </Link>
      </h1>

      <NavButton
        onClick={() => {
          setNavbarCollapsed((prev) => !prev);
        }}
        navbarCollapsed={navbarCollapsed}
        className="md:invisible"
      />

      {(navbarCollapsed || windowWidth > md) && (
        <nav className="capitalize absolute text-sm duration-200 md:bg-transparent z-50 w-[90%] left-1/2 -translate-x-1/2 top-full h-max rounded-2xl shadow-2xl shadow-violet-500/10 p-6 backdrop-blur-xl border border-violet-500/15 bg-white/90 dark:bg-[#0e0d26]/90 md:static md:w-auto md:left-auto md:transform-none md:top-auto md:rounded-none md:shadow-none md:border-none md:backdrop-blur-none md:bg-transparent dark:md:bg-transparent md:p-0 md:h-auto">
          <ul className="flex flex-col items-stretch gap-3 list-style-none lg:gap-5 xl:gap-6 md:flex-row md:items-center">
            {navLinks.map(({ name, url }, i) => (
              <NavItem
                key={i}
                href={url}
                index={i}
                delay={ANIMATION_DELAY}
                isActive={activeSection === url.replace('/#', '')}
                onClick={() => setNavbarCollapsed(false)}
              >
                {name}
              </NavItem>
            ))}

            <div className="flex items-center justify-between gap-5 xl:gap-6">
              {cta && (
                <Button
                  type="link"
                  href={cta.url}
                  sameTab={cta?.sameTab}
                  variants={slideIn({
                    delay: ANIMATION_DELAY + navLinks.length / 10,
                    direction: 'down',
                  })}
                  initial="hidden"
                  animate="show"
                >
                  {cta.title}
                </Button>
              )}
              <DarkModeButton
                onClick={() => setNavbarCollapsed(false)}
                variants={slideIn({
                  delay: ANIMATION_DELAY + (navLinks.length + 1) / 10,
                  direction: 'down',
                })}
                initial="hidden"
                animate="show"
              />
            </div>
          </ul>
        </nav>
      )}
    </motion.header>
  );
};

export default Navbar;
