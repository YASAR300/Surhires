import Image from 'next/image';

/**
 * Hero section illustration using /images/hero-art.png.
 * Guaranteed zero borders, zero shadows, and zero container frames.
 */
export default function HeroIllustration({ className = '' }) {
  return (
    <div
      className={`relative w-full max-w-[560px] mx-auto select-none border-0 shadow-none bg-transparent flex items-center justify-center ${className}`}
    >
      <Image
        src="/images/hero-art.png"
        alt="Surhires — Find Jobs, Hire Top Tech Talent"
        width={1200}
        height={896}
        priority
        className="w-full h-auto object-contain border-0 shadow-none rounded-none mix-blend-multiply"
      />
    </div>
  );
}
