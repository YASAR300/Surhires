import Image from 'next/image';

/**
 * Hero artwork using /images/hero-art.png.
 * 100% borderless, shadowless, and seamless on the white background.
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
        className="w-full h-auto object-contain border-0 shadow-none rounded-none mix-blend-multiply pointer-events-none"
      />
    </div>
  );
}
