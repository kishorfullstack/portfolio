import { AboutSectionType } from '@/lib/types/sections';

export const aboutSection: AboutSectionType = {
  title: 'about me',
  // Paragraphs need to be changed from `/containers/About.tsx`
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'Next.js',
      'TypeScript',
      'React',
      'TailwindCSS',
      'Node.js / NestJS',
      "React Native",
      "Chrome Extension",
      "Microfoft Ad-Ins",
      "Shopify",
      'Python',
      'PostgreSQL / MySQL',
      'Prisma',
      'Docker',
      'AWS / GCP / Azure',
      'OpenAI / LangChain',
      'Vector search & RAG',
      "Cloud Services - AWS, GCP, Heroku, Azure",
    ],
  },
  img: '/images/photo-professional.jpg',
};
