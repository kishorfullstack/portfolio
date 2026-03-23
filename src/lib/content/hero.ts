import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Kishor Kumar.',
  tagline: 'I build scalable full‑stack products and AI‑powered experiences.',
  description:
    "Full‑Stack Technical Lead specializing in modern web apps (Next.js/TypeScript), backend services (Node/NestJS/Python), and production AI integrations (RAG, automation, LLM tooling). I help teams ship performant, secure, and maintainable software—end to end.",
  specialText: 'Available for freelance & full‑time opportunities',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
