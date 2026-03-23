import Image from 'next/image';

type Props = { src: string; alt: string };

const AuthorImage = ({ src, alt }: Props) => {
  return (
    <div className="relative w-64 h-64 group sm:w-auto sm:h-auto">
      {/* Glow ring behind image */}
      <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-violet-500 via-cyan-400 to-pink-400 opacity-30 blur-md group-hover:opacity-50 transition-opacity duration-300 hidden sm:block" />
      <Image
        src={src}
        alt={alt}
        width={300}
        height={300}
        className="relative rounded-xl shadow-2xl shadow-violet-500/20"
      />
      <div className="absolute inset-0 border-2 z-[-1] rounded-xl border-violet-400/50 translate-x-5 translate-y-5 group-hover:translate-x-3 group-hover:translate-y-3 duration-200 hidden sm:block"></div>
    </div>
  );
};

export default AuthorImage;
