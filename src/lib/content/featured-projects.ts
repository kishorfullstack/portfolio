import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'Supportpay',
      description: 'It is a comprehensive fintech platform designed for families, co-parents, and caregivers to manage and automate shared expenses, payments, receipts, schedules, and documentation across multiple households.',
      tasks:
        'Led end‑to‑end delivery across web + backend, owned architecture and integrations, and shipped secure payment and document workflows at scale.',
      url: 'https://www.supportpay.com/',
      img: 'https://cdn6.aptoide.com/imgs/b/f/f/bffc4952d1dd1fe907d1dbf7ec5adbfe_fgraphic.jpg',
      tags: [
        'NextJs 14',
        'TypeScript',
        'TailwindCSS',
        'ShadCN',
        'Prisma',
        'Stripe',
      ],
    },
    {
      id: getId(),
      name: 'Gallery View',
      description: 'It is a bespoke CRM platform tailored specifically for independent art galleries.',
      tasks:
        'Owned architecture and implementation across frontend + backend, improved performance for large media catalogs, and delivered scalable APIs with payments and enquiry workflows.',
      url: 'https://gallery-view.co.uk/',
      img: 'https://gallery-view.co.uk/wp-content/uploads/2024/09/USP1.gif',
      tags: [
        'NextJs 14',
        'TypeScript',
        'TailwindCSS',
        'ShadCN',
        'Prisma',
        'Stripe',
      ],
    },
    {
      id: getId(),
      name: 'GetLifeGuard',
      description: 'An E-Commerce platform for Self-Defense Keychain.',
      tasks:
        'Delivered a conversion‑focused storefront with a scalable backend, integrations, and a clean, maintainable UI system.',
      url: 'https://www.beachlifeguard.com/',
      img: 'https://www.beachlifeguard.com/product_images/uploaded_images/lifeguard-website.jpg',
      tags: [
        'NextJs 14',
        'TypeScript',
        'TailwindCSS',
        'ShadCN',
        'Prisma',
        'Stripe',
      ],
    },
    {
      id: getId(),
      name: 'Velvi Matrimony',
      description:
        'A platform that redefines the way individuals find their life partners.',
      tasks:
        'Built responsive UI and real‑time filtering flows, collaborating closely with the client to iterate quickly and ship production features.',
      url: 'https://www.velvimatrimony.in/',
      img: 'https://i.postimg.cc/tRS4GvzJ/Screenshot-2024-02-27-at-5-48-49-PM.png',
      tags: ['NextJs', 'TypeScript', 'TailwindCSS', 'APIs'],
    },
    {
      id: getId(),
      name: 'Integra',
      description: 'An AI-Powered Leads Generation Platform.',
      tasks:
        'Shipped AI‑assisted lead generation flows, built a design system, and delivered secure auth + Stripe payments with a scalable Next.js architecture.',
      url: 'https://integrateleads.com/',
      img: 'https://user-images.githubusercontent.com/68834718/279476369-2f69466a-71db-4da0-9afd-04f8f0efb621.jpeg',
      tags: ['AI/ML', 'NextJs', 'TypeScript', 'TailwindCSS', 'Express'],
    },
    {
      id: getId(),
      name: 'Drafton',
      description: 'The AI-powered platform that simplifies proposal creation.',
      tasks:
        'Implemented auth and subscriptions, built dashboard UI components, and integrated content workflows—supporting production AI features and growth.',
      url: 'https://www.drafton.io/',
      img: 'https://i.postimg.cc/4N6dsGcm/Screenshot-2024-06-17-at-11-05-22-PM.png',
      tags: ['Open AI', 'NextJs', 'TypeScript', 'TailwindCSS', 'Prisma'],
    },
  ],
};

export default featuredProjectsSection;
