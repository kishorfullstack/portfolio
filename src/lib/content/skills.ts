import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'services',
  skills: [
    {
      id: getId(),
      title: 'full‑stack product development',
      lottie: {
        light: '/lotties/fullstack.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'End‑to‑end delivery: discovery → architecture → implementation → launch → iteration',
        'Modern web apps with React / Next.js, TypeScript, Tailwind, and accessible UI patterns',
        'Backend APIs & services with Node.js / NestJS and Python; REST/GraphQL, websockets, queues',
        'Data & infra: PostgreSQL/MySQL/MongoDB, Prisma, Docker, CI/CD, cloud deployments (AWS/GCP/Azure)',
        'Integrations: payments (Stripe), auth (OAuth/JWT), notifications, 3rd‑party APIs',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'sass', icon: 'vscode-icons:file-type-sass' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'prisma', icon: 'vscode-icons:file-type-prisma' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'angularjs', icon: 'logos:angular-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'redux', icon: 'logos:redux' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
        { name: 'jest', icon: 'vscode-icons:file-type-jest' },
      ],
    },
    {
      id: getId(),
      title: 'UI/UX & design systems',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Clean, consistent UI using reusable components and a maintainable design system',
        'Prototyping in Figma and translating designs into pixel‑accurate, responsive interfaces',
        'Performance & UX: layout stability, loading states, micro‑interactions, accessibility',
        'Collaboration with stakeholders to iterate quickly and ship with confidence',
      ],
      softwareSkills: [
        { name: 'figma', icon: 'logos:figma' },
        { name: 'adobe illustrator', icon: 'logos:adobe-illustrator' },
        { name: 'adobe photoshop', icon: 'logos:adobe-photoshop' },
      ],
    },
    {
      id: getId(),
      title: 'AI/ML integration & automation',
      lottie: {
        light: '/lotties/coding.json',
        dark: '/lotties/build.json',
      },
      points: [
        'LLM apps with OpenAI/LangChain: chat, retrieval (RAG), function calling, tool integrations',
        'Vector search + knowledge bases (embeddings, chunking, evals) for production‑ready AI features',
        'Workflow automation: document processing, summarization, classification, and agentic pipelines',
        'Deployment patterns: rate limits, caching, observability, prompt/version management, safety',
      ],
      softwareSkills: [
        { name: 'python', icon: 'logos:python' },
        { name: 'openai', icon: 'simple-icons:openai' },
        { name: 'tensorflow', icon: 'logos:tensorflow' },
        { name: 'docker', icon: 'logos:docker-icon' },
        { name: 'postgresql', icon: 'logos:postgresql' },
      ],
    },
  ],
};
