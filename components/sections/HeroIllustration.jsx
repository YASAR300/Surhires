/**
 * Original Isometric-style Technical Illustration for Surhires Hero Section.
 * Built entirely with inline SVG:
 * - Soft light-grey ellipse ground base
 * - Folded 3D isometric job board card with "JOBS" banner and column listings
 * - Digital tablet/phone card with candidate profile and skill indicators
 * - Upright blue spotlight flyers emerging from screen
 * - 3D blue-rimmed magnifying glass with glass reflection and grip handle
 * - Three floating dark round icon badges (compensation, candidate, briefcase)
 * - Gentle floating animation with automatic reduced-motion support.
 */
export default function HeroIllustration({ className = '' }) {
  return (
    <div
      className={`relative w-full max-w-[440px] sm:max-w-[500px] lg:max-w-[560px] mx-auto select-none flex items-center justify-center ${className}`}
    >
      <div className="w-full animate-float motion-reduce:animate-none">
        <svg
          viewBox="0 0 680 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-md"
          aria-hidden="true"
        >
          <defs>
            {/* Soft ambient ground shadow gradient */}
            <radialGradient id="baseShadowGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#CBD5E1" stopOpacity="0.5" />
              <stop offset="55%" stopColor="#E2E8F0" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>

            {/* Lens glass specular gradient */}
            <linearGradient id="lensGlassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
              <stop offset="35%" stopColor="#DBEAFE" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.25" />
            </linearGradient>

            {/* Card gradient: confident bright blue */}
            <linearGradient id="primaryCardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>

            <linearGradient id="frontCardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
          </defs>

          {/* ---------------- 0. Soft Light-Grey Ground Ellipse Base ---------------- */}
          <ellipse cx="340" cy="430" rx="270" ry="72" fill="url(#baseShadowGrad)" />
          <ellipse cx="340" cy="425" rx="195" ry="48" fill="#EEF4FF" fillOpacity="0.75" />
          <ellipse cx="340" cy="425" rx="130" ry="32" fill="#E2E8F0" fillOpacity="0.4" />

          {/* ---------------- 1. Isometric Job Board Card (Left) ---------------- */}
          <g id="job-board" transform="translate(85, 75)">
            {/* Base contact shadow */}
            <ellipse cx="85" cy="335" rx="85" ry="22" fill="#94A3B8" fillOpacity="0.2" />

            {/* Decorative leaf branch */}
            <g transform="translate(-20, 265)">
              <path d="M35 50 Q18 38 8 18" stroke="#2563EB" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M8 18 C3 8 13 4 20 13 C18 20 10 23 8 18 Z" fill="#60A5FA" />
              <path d="M20 24 C20 13 32 12 34 22 C32 30 23 30 20 24 Z" fill="#2563EB" />
              <path d="M28 36 C30 26 42 26 43 36 C40 43 31 42 28 36 Z" fill="#93C5FD" />
            </g>

            {/* Multi-page paper depth on edge */}
            <path d="M 28 40 L 40 32 L 40 310 L 28 318 Z" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1" />
            <path d="M 34 36 L 46 28 L 46 306 L 34 314 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />

            {/* Spine roll */}
            <path
              d="M 40 305 Q 40 325 55 325 Q 70 325 70 305 L 70 30 L 55 30 Q 40 30 40 50 Z"
              fill="#E2E8F0"
              stroke="#CBD5E1"
              strokeWidth="1.5"
            />

            {/* Front job board face */}
            <polygon points="55,30 185,-35 185,250 55,315" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
            <polygon points="55,30 185,-35 195,-30 65,35" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />

            {/* Job Board Content */}
            <g transform="translate(68, 48) skewY(-26.5)">
              {/* Blue Banner Square */}
              <rect x="0" y="0" width="18" height="26" fill="#2563EB" rx="3" />

              {/* "JOBS" Title */}
              <text
                x="26"
                y="22"
                fill="#2563EB"
                fontSize="28"
                fontWeight="800"
                fontFamily="var(--font-heading), Georgia, serif"
                letterSpacing="1.5"
              >
                JOBS
              </text>

              {/* Divider rule */}
              <line x1="0" y1="36" x2="105" y2="36" stroke="#E2E8F0" strokeWidth="1.5" />

              {/* Left Column listings */}
              <g transform="translate(0, 44)">
                <rect x="0" y="0" width="48" height="6" rx="2" fill="#2563EB" />
                <rect x="0" y="10" width="48" height="3" rx="1.5" fill="#CBD5E1" />
                <rect x="0" y="16" width="40" height="3" rx="1.5" fill="#CBD5E1" />
                <rect x="0" y="22" width="46" height="3" rx="1.5" fill="#CBD5E1" />
                <rect x="0" y="28" width="36" height="3" rx="1.5" fill="#CBD5E1" />

                <rect x="0" y="42" width="48" height="5" rx="2" fill="#475569" />
                <rect x="0" y="51" width="44" height="3" rx="1.5" fill="#E2E8F0" />
                <rect x="0" y="57" width="38" height="3" rx="1.5" fill="#E2E8F0" />
                <rect x="0" y="63" width="46" height="3" rx="1.5" fill="#E2E8F0" />
              </g>

              {/* Right Column listings */}
              <g transform="translate(56, 44)">
                <rect x="0" y="0" width="48" height="6" rx="2" fill="#2563EB" />
                <rect x="0" y="10" width="46" height="3" rx="1.5" fill="#CBD5E1" />
                <rect x="0" y="16" width="48" height="3" rx="1.5" fill="#CBD5E1" />
                <rect x="0" y="22" width="38" height="3" rx="1.5" fill="#CBD5E1" />

                <rect x="0" y="42" width="48" height="5" rx="2" fill="#475569" />
                <rect x="0" y="51" width="44" height="3" rx="1.5" fill="#E2E8F0" />
                <rect x="0" y="57" width="42" height="3" rx="1.5" fill="#E2E8F0" />
                <rect x="0" y="63" width="36" height="3" rx="1.5" fill="#E2E8F0" />
              </g>
            </g>
          </g>

          {/* ---------------- 2. Flat Isometric Tablet Card with Candidate Profile ---------------- */}
          <g id="tablet-candidate-card" transform="translate(290, 160)">
            {/* Tablet base shadow */}
            <polygon points="180,65 190,75 40,240 25,230" fill="#64748B" fillOpacity="0.22" />

            {/* Tablet Bezel Outer Dark Shell (3D Extrusion) */}
            <polygon points="175,70 175,85 20,225 20,210" fill="#0F1B33" />
            <polygon points="175,70 240,30 240,45 175,85" fill="#1E293B" />
            <polygon points="20,210 175,70 240,30 85,170" fill="#0F1B33" stroke="#0F1B33" strokeWidth="2" />

            {/* Screen Surface */}
            <polygon points="32,200 170,75 228,40 90,165" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />

            {/* Candidate Profile UI on Screen */}
            <g transform="translate(75, 125) skewY(-28) skewX(28)">
              {/* Profile Avatar Chip */}
              <circle cx="20" cy="18" r="9" fill="#2563EB" />
              <rect x="36" y="12" width="55" height="5" rx="2" fill="#0F1B33" />
              <rect x="36" y="21" width="40" height="4" rx="2" fill="#475569" />

              {/* Skill chips */}
              <rect x="12" y="36" width="30" height="6" rx="3" fill="#EEF4FF" stroke="#BFDBFE" strokeWidth="0.8" />
              <rect x="48" y="36" width="34" height="6" rx="3" fill="#EEF4FF" stroke="#BFDBFE" strokeWidth="0.8" />

              {/* Star Rating Watermark */}
              <path d="M 20 54 L 22 59 L 27 59 L 23 62 L 25 67 L 20 64 L 15 67 L 17 62 L 13 59 L 18 59 Z" fill="#CBD5E1" />
              <path d="M 38 54 L 40 59 L 45 59 L 41 62 L 43 67 L 38 64 L 33 67 L 35 62 L 31 59 L 36 59 Z" fill="#CBD5E1" />
              <path d="M 56 54 L 58 59 L 63 59 L 59 62 L 61 67 L 56 64 L 51 67 L 53 62 L 49 59 L 54 59 Z" fill="#CBD5E1" />
            </g>
          </g>

          {/* ---------------- 3. Two Standing Upright Blue Flyer Cards ---------------- */}
          <g id="standing-cards" transform="translate(340, 30)">
            {/* Back Blue Flyer */}
            <g transform="translate(10, 0)">
              <polygon points="35,170 80,140 100,160 55,190" fill="#93C5FD" fillOpacity="0.35" />
              <polygon points="25,50 85,15 85,175 25,210" fill="url(#primaryCardGrad)" />
              <polygon points="45,200 65,190 55,230" fill="url(#primaryCardGrad)" />

              <g transform="translate(35, 55) skewY(-30)">
                <rect x="0" y="0" width="42" height="28" rx="3" fill="#FFFFFF" fillOpacity="0.9" />
                <rect x="0" y="34" width="42" height="4" rx="2" fill="#FFFFFF" fillOpacity="0.85" />
                <rect x="0" y="42" width="36" height="4" rx="2" fill="#FFFFFF" fillOpacity="0.85" />
                <rect x="0" y="50" width="40" height="4" rx="2" fill="#FFFFFF" fillOpacity="0.85" />
                <rect x="0" y="58" width="30" height="4" rx="2" fill="#FFFFFF" fillOpacity="0.85" />
              </g>
            </g>

            {/* Front Blue Flyer */}
            <g transform="translate(65, 35)">
              <polygon points="25,50 85,15 85,175 25,210" fill="url(#frontCardGrad)" />
              <polygon points="45,200 65,190 55,235" fill="#2563EB" />

              <g transform="translate(35, 55) skewY(-30)">
                <rect x="0" y="0" width="42" height="28" rx="3" fill="#FFFFFF" />
                <rect x="0" y="34" width="42" height="4" rx="2" fill="#FFFFFF" />
                <rect x="0" y="42" width="36" height="4" rx="2" fill="#FFFFFF" />
                <rect x="0" y="50" width="40" height="4" rx="2" fill="#FFFFFF" />
                <rect x="0" y="58" width="32" height="4" rx="2" fill="#FFFFFF" />
              </g>
            </g>
          </g>

          {/* ---------------- 4. Foreground Large 3D Magnifying Glass ---------------- */}
          <g id="magnifying-glass" transform="translate(230, 280)">
            {/* Glass Shadow */}
            <ellipse cx="140" cy="115" rx="55" ry="24" fill="#94A3B8" fillOpacity="0.25" />
            <path d="M 60 150 L 110 115 L 120 125 L 70 160 Z" fill="#94A3B8" fillOpacity="0.2" />

            {/* Handle Grip (Ink / Dark Charcoal #0F1B33) */}
            <path d="M 5 210 L 80 155 L 94 165 L 18 220 Z" fill="#0F1B33" />
            {/* Blue accent ring on handle */}
            <path d="M 50 178 L 65 167 L 72 172 L 57 183 Z" fill="#2563EB" />
            <path d="M 75 160 L 90 148 L 97 154 L 82 165 Z" fill="#60A5FA" />

            {/* Lens Outer 3D Bevel Edge */}
            <ellipse cx="140" cy="90" rx="56" ry="38" transform="rotate(-20 140 90)" fill="#1D4ED8" />

            {/* Lens Main Blue Rim */}
            <ellipse
              cx="140"
              cy="86"
              rx="55"
              ry="37"
              transform="rotate(-20 140 86)"
              fill="#2563EB"
              stroke="#60A5FA"
              strokeWidth="2.5"
            />

            {/* Clear Glass Surface with Specular Glare */}
            <ellipse cx="140" cy="86" rx="42" ry="28" transform="rotate(-20 140 86)" fill="url(#lensGlassGrad)" />
            <path
              d="M 115 72 Q 130 62 155 64 Q 165 66 172 74"
              stroke="#FFFFFF"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.9"
            />
            <circle cx="120" cy="82" r="2.5" fill="#FFFFFF" opacity="0.8" />
          </g>

          {/* ---------------- 5. Candidate Character Figure ---------------- */}
          <g id="candidate-figure" transform="translate(470, 210)">
            {/* Foot shadow */}
            <ellipse cx="40" cy="225" rx="30" ry="10" fill="#94A3B8" fillOpacity="0.25" />

            {/* Right Leaf Plant */}
            <g transform="translate(45, 175)">
              <path d="M10 40 Q25 30 35 15" stroke="#2563EB" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M35 15 C42 10 45 20 38 25 C32 24 30 18 35 15 Z" fill="#60A5FA" />
              <path d="M25 22 C32 18 38 26 30 32 C25 30 22 25 25 22 Z" fill="#2563EB" />
            </g>

            {/* Neck & Head */}
            <rect x="27" y="38" width="8" height="10" fill="#FBBF24" />
            <circle cx="31" cy="26" r="13" fill="#FDE68A" />
            {/* Hair */}
            <path
              d="M 18 24 C 18 12 28 8 40 12 C 45 14 46 22 44 26 C 41 22 36 21 30 22 C 24 23 20 28 18 24 Z"
              fill="#0F1B33"
            />

            {/* Torso: White Shirt */}
            <path d="M 22 46 L 44 44 L 46 95 L 20 95 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
            <path d="M 27 46 Q 33 50 39 45" stroke="#CBD5E1" strokeWidth="1.5" fill="none" />

            {/* Arms */}
            <path d="M 40 44 L 52 54 L 48 88 L 40 82 Z" fill="#2563EB" />
            <circle cx="44" cy="90" r="4.5" fill="#FDE68A" />

            <path d="M 22 46 L 6 62 L -6 60 L 10 44 Z" fill="#2563EB" />
            <path d="M 6 62 L -18 56 L -16 50 L 0 54 Z" fill="#FDE68A" />
            <circle cx="-20" cy="54" r="4.5" fill="#FDE68A" />

            {/* Legs: Dark Trousers */}
            <path d="M 20 95 L 30 95 L 28 190 L 18 190 Z" fill="#1E293B" />
            <path d="M 34 95 L 46 95 L 44 190 L 32 190 Z" fill="#0F1B33" />

            {/* Shoes */}
            <path d="M 12 198 C 12 192 18 190 28 190 L 30 196 C 26 200 16 202 12 198 Z" fill="#2563EB" />
            <ellipse cx="20" cy="200" rx="9" ry="2.5" fill="#FFFFFF" />
            <path d="M 28 198 C 28 192 34 190 44 190 L 46 196 C 42 200 32 202 28 198 Z" fill="#0F1B33" />
            <ellipse cx="36" cy="200" rx="9" ry="2.5" fill="#FFFFFF" />
          </g>

          {/* ---------------- 6. Three Floating Round Dark Icon Badges ---------------- */}
          <g id="floating-badges" transform="translate(525, 115)">
            {/* 1. Compensation ($ / Currency) Badge */}
            <g transform="translate(0, 0)">
              <ellipse cx="24" cy="28" rx="20" ry="20" fill="#0F1B33" />
              <ellipse cx="24" cy="24" rx="20" ry="20" fill="#0F1B33" stroke="#60A5FA" strokeWidth="2.5" />
              {/* Currency Symbol */}
              <text
                x="17"
                y="32"
                fill="#FFFFFF"
                fontSize="22"
                fontWeight="900"
                fontFamily="var(--font-heading), Georgia, serif"
              >
                $
              </text>
            </g>

            {/* 2. Candidate / User Badge (Lucide User Icon silhouette) */}
            <g transform="translate(0, 68)">
              <ellipse cx="24" cy="28" rx="20" ry="20" fill="#0F1B33" />
              <ellipse cx="24" cy="24" rx="20" ry="20" fill="#0F1B33" stroke="#60A5FA" strokeWidth="2.5" />
              {/* Lucide User Path */}
              <circle cx="24" cy="18" r="4.5" fill="#FFFFFF" />
              <path d="M 15 31 C 15 26 19 25 24 25 C 29 25 33 26 33 31 Z" fill="#FFFFFF" />
            </g>

            {/* 3. Briefcase / Role Badge (Lucide Briefcase silhouette) */}
            <g transform="translate(0, 136)">
              <ellipse cx="24" cy="28" rx="20" ry="20" fill="#0F1B33" />
              <ellipse cx="24" cy="24" rx="20" ry="20" fill="#0F1B33" stroke="#60A5FA" strokeWidth="2.5" />
              {/* Lucide Briefcase Icon */}
              <rect x="14" y="19" width="20" height="13" rx="2.5" fill="#FFFFFF" />
              <path d="M 19 19 V 16 C 19 14.5 21 14.5 24 14.5 C 27 14.5 29 14.5 29 16 V 19" stroke="#0F1B33" strokeWidth="1.8" fill="none" />
              <line x1="14" y1="24" x2="34" y2="24" stroke="#0F1B33" strokeWidth="1.5" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
