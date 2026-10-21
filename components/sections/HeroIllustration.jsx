import Image from 'next/image';

/**
 * Hero section high-resolution 3D isometric graphic.
 * Generated to match the exact aesthetic of the reference artwork with high fidelity.
 */
export default function HeroIllustration({ className = '' }) {
  return (
    <div
      className={`relative w-full max-w-[560px] mx-auto select-none flex items-center justify-center ${className}`}
    >
      {/* Subtle ambient soft blue illumination */}
      <div className="absolute inset-0 bg-radial-gradient from-blue-100/40 via-transparent to-transparent rounded-full blur-3xl -z-10" />

      <Image
        src="/images/hero-illustration.jpg"
        alt="Surhires — Find Jobs, Hire Top Tech Talent"
        width={560}
        height={420}
        priority
        className="w-full h-auto object-contain drop-shadow-xl transition-transform duration-300 hover:scale-[1.01] motion-reduce:hover:scale-100 rounded-2xl"
      />
    </div>
  );
}
