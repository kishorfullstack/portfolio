import { contactSection } from '@/lib/content/contact';

import { Button, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

const Contact = () => {
  const { subtitle, title, paragraphs, link } = contactSection;
  return (
    <Wrapper
      id="contact"
      className="max-w-xl mx-auto text-center !py-16 md:!py-24 mb-20 md:mb-32"
      {...getSectionAnimation}
    >
      <div className="relative rounded-3xl p-8 md:p-12 backdrop-blur-xl border border-violet-400/20 bg-white/60 dark:bg-white/5 shadow-2xl shadow-violet-500/10">
        {/* Glow orb behind card */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-40 w-40 rounded-full blur-3xl opacity-40" style={{background: 'radial-gradient(circle, rgba(139,92,246,0.5) 0%, transparent 70%)'}} />
        </div>
      <p className="mb-3 font-mono text-sm capitalize text-accent relative">
        {subtitle}
      </p>
      <h2 className="heading-secondary !mb-5">{title}</h2>

      {paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}

      <Button type="link" size="lg" href={link} center className="mt-12">
        Say Hello
      </Button>
      </div>
    </Wrapper>
  );
};

export default Contact;
