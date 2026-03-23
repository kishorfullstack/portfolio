'use client';
import { ProjectType } from '@/lib/types';
import { blurImageURL } from '@/lib/utils/config';

import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ProjectCard = ({
  name,
  url,
  repo,
  year,
  img,
  tags,
  ...rest
}: ProjectType & MotionProps) => {
  // To avoid hydration failed error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <motion.div {...rest} className="w-full max-w-[350px]">
      <button
        onClick={(e) => {
          // Don't run this if the clicked target is an anchor element
          if ((e.target as HTMLElement).closest('a')) return;
          window.open(url);
        }}
        className="block w-full overflow-hidden transition-all duration-300 rounded-2xl group
          backdrop-blur-xl border border-violet-400/15 bg-white/75 dark:bg-white/5
          shadow-lg shadow-violet-500/8 dark:shadow-violet-500/10
          hover:-translate-y-2 hover:shadow-xl hover:shadow-violet-500/20 hover:border-violet-400/35"
      >
        <div className="relative overflow-hidden h-[210px]">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/65 via-black/15 to-transparent opacity-90 group-hover:from-violet-900/60 transition-all duration-300" />
          <Image
            src={img}
            alt={name}
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL={blurImageURL}
            className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110 group-focus:scale-110"
          />
          <div className="absolute z-20 flex flex-wrap gap-2 left-3 bottom-3">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-[10px] font-mono rounded-full bg-violet-600/50 text-violet-100 border border-violet-400/30 backdrop-blur"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="p-4 py-3 space-y-1">
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs text-slate-600 dark:text-slate-300">
              {year}
            </p>
            <div className="flex items-center space-x-1.5">
              {repo && (
                <a
                  href={repo}
                  className="block duration-200 hover:text-accent"
                  target="_blank"
                >
                  <Icon icon="tabler:brand-github" width={20} height={20} />
                </a>
              )}
              <a
                href={url}
                className="block duration-200 hover:text-accent"
                target="_blank"
              >
                <Icon icon="ci:external-link" width={22} height={22} />
              </a>
            </div>
          </div>
          <h4 className="flex justify-between font-semibold duration-200 group-hover:text-accent">
            <span className="text-left">{name}</span>
          </h4>
        </div>
      </button>
    </motion.div>
  ) : (
    <></>
  );
};

export default ProjectCard;
