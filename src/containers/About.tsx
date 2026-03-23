'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hi, I’m Kishor Kumar. I completed my MCA from{' '}
            <Link
              href="https://www.glbitm.org/"
              target="_blank"
              className="text-accent"
            >
              G. L. Bajaj Institute of Technology & Management
            </Link>
            . I’m a full‑stack developer and technical lead focused on building reliable products with modern web stacks and measurable business impact.
          </p>
          <p>
            I’ve worked with teams at{' '}
            <Link
              href="https://www.cloudanalogy.com/"
              target="_blank"
              className="text-accent"
            >
              Cloud Analogy
            </Link>
            , delivering end‑to‑end features across frontend, backend, cloud infrastructure, and integrations.
          </p>
          <p>
            Lately I’ve been building AI‑enabled workflows (RAG, automation, LLM tool integrations) alongside scalable APIs, payments, and high‑quality UI systems.
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <AuthorImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
