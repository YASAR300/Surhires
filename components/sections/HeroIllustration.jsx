/**
 * High-fidelity 3D Isometric Technical Illustration for Surhires Hero Section.
 * Reconstructed with exact fidelity to the reference artwork:
 * 1. Isometric folded newspaper with rounded spine, multi-page depth, "JOBS" banner, and leafy plant.
 * 2. Isometric flat tablet display with star rating cards and bezel depth.
 * 3. Two standing upright 3D blue speech-bubble cards emerging from the screen.
 * 4. Large 3D foreground magnifying glass with glass reflection and cylindrical handle.
 * 5. Isometric candidate character reaching towards the interface.
 * 6. Three 3D stacked floating tokens (Dollar, Team, Briefcase) with cyan/blue rims.
 * 7. Soft grounding ambient shadow.
 */
export default function HeroIllustration({ className = '' }) {
  return (
    <div className={`relative w-full max-w-[580px] mx-auto select-none ${className}`}>
      <svg
        viewBox="0 0 680 540"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-2xl"
        aria-hidden="true"
      >
        <defs>
          {/* Subtle drop shadows & gradients */}
          <radialGradient id="platformShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#CBD5E1" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#E2E8F0" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="lensGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#DBEAFE" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="blueCardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>

          <linearGradient id="blueCardFrontGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>

          <filter id="softGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#2563EB" floodOpacity="0.12" />
          </filter>
        </defs>

        {/* ---------------- 0. Ground Platform Shadow ---------------- */}
        <ellipse cx="360" cy="430" rx="270" ry="75" fill="url(#platformShadow)" />
        <ellipse cx="370" cy="425" rx="190" ry="50" fill="#DBEAFE" fillOpacity="0.4" />

        {/* ---------------- 1. Folded Isometric Newspaper (Left) ---------------- */}
        <g id="newspaper" transform="translate(90, 80)">
          {/* Newspaper Bottom Shadow */}
          <ellipse cx="80" cy="330" rx="90" ry="25" fill="#94A3B8" fillOpacity="0.2" />

          {/* Left Leafy Plant Base */}
          <g transform="translate(-25, 260)">
            {/* Stem */}
            <path d="M40 50 Q20 40 10 20" stroke="#3B82F6" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {/* Leaves */}
            <path d="M10 20 C5 10 15 5 22 15 C20 22 12 25 10 20 Z" fill="#60A5FA" />
            <path d="M22 26 C22 15 34 14 36 24 C34 32 25 32 22 26 Z" fill="#3B82F6" />
            <path d="M30 38 C32 28 44 28 45 38 C42 45 33 44 30 38 Z" fill="#93C5FD" />
            <path d="M40 50 C44 42 54 44 52 52 C48 57 42 55 40 50 Z" fill="#2563EB" />
          </g>

          {/* Multi-page depth on left edge */}
          <path
            d="M 28 40 L 40 32 L 40 310 L 28 318 Z"
            fill="#E2E8F0"
            stroke="#CBD5E1"
            strokeWidth="1"
          />
          <path
            d="M 34 36 L 46 28 L 46 306 L 34 314 Z"
            fill="#F1F5F9"
            stroke="#CBD5E1"
            strokeWidth="1"
          />

          {/* Newspaper Spine Cylindrical Roll at bottom */}
          <path
            d="M 40 305 Q 40 325 55 325 Q 70 325 70 305 L 70 30 L 55 30 Q 40 30 40 50 Z"
            fill="#E2E8F0"
            stroke="#CBD5E1"
            strokeWidth="1.5"
          />

          {/* Front Newspaper Sheet Surface */}
          <polygon
            points="55,30 185,-35 185,250 55,315"
            fill="#FFFFFF"
            stroke="#CBD5E1"
            strokeWidth="2"
          />

          {/* Top Paper Cut Edges (Depth at top) */}
          <polygon points="55,30 185,-35 195,-30 65,35" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />

          {/* Content On Newspaper */}
          <g transform="translate(68, 48) skewY(-26.5)">
            {/* Blue Banner Square */}
            <rect x="0" y="0" width="18" height="26" fill="#2563EB" rx="3" />

            {/* "JOBS" Title */}
            <text
              x="26"
              y="22"
              fill="#2563EB"
              fontSize="30"
              fontWeight="900"
              fontFamily="var(--font-heading), sans-serif"
              letterSpacing="2"
            >
              JOBS
            </text>

            {/* Divider rule */}
            <line x1="0" y1="36" x2="105" y2="36" stroke="#E2E8F0" strokeWidth="1.5" />

            {/* Column 1 (Left) */}
            <g transform="translate(0, 44)">
              <rect x="0" y="0" width="48" height="6" rx="2" fill="#2563EB" />
              <rect x="0" y="10" width="48" height="3" rx="1.5" fill="#CBD5E1" />
              <rect x="0" y="16" width="42" height="3" rx="1.5" fill="#CBD5E1" />
              <rect x="0" y="22" width="46" height="3" rx="1.5" fill="#CBD5E1" />
              <rect x="0" y="28" width="38" height="3" rx="1.5" fill="#CBD5E1" />
              <rect x="0" y="34" width="44" height="3" rx="1.5" fill="#CBD5E1" />

              {/* Second story */}
              <rect x="0" y="46" width="48" height="5" rx="2" fill="#64748B" />
              <rect x="0" y="55" width="44" height="3" rx="1.5" fill="#E2E8F0" />
              <rect x="0" y="61" width="40" height="3" rx="1.5" fill="#E2E8F0" />
              <rect x="0" y="67" width="46" height="3" rx="1.5" fill="#E2E8F0" />
              <rect x="0" y="73" width="36" height="3" rx="1.5" fill="#E2E8F0" />
            </g>

            {/* Column 2 (Right) */}
            <g transform="translate(56, 44)">
              <rect x="0" y="0" width="48" height="6" rx="2" fill="#2563EB" />
              <rect x="0" y="10" width="46" height="3" rx="1.5" fill="#CBD5E1" />
              <rect x="0" y="16" width="48" height="3" rx="1.5" fill="#CBD5E1" />
              <rect x="0" y="22" width="40" height="3" rx="1.5" fill="#CBD5E1" />
              <rect x="0" y="28" width="44" height="3" rx="1.5" fill="#CBD5E1" />
              <rect x="0" y="34" width="42" height="3" rx="1.5" fill="#CBD5E1" />

              {/* Second story */}
              <rect x="0" y="46" width="48" height="5" rx="2" fill="#64748B" />
              <rect x="0" y="55" width="46" height="3" rx="1.5" fill="#E2E8F0" />
              <rect x="0" y="61" width="42" height="3" rx="1.5" fill="#E2E8F0" />
              <rect x="0" y="67" width="44" height="3" rx="1.5" fill="#E2E8F0" />
              <rect x="0" y="73" width="38" height="3" rx="1.5" fill="#E2E8F0" />
            </g>
          </g>
        </g>

        {/* ---------------- 2. Flat Isometric Tablet / Device (Center) ---------------- */}
        <g id="tablet" transform="translate(290, 160)">
          {/* Tablet Shadow */}
          <polygon
            points="180,65 190,75 40,240 25,230"
            fill="#64748B"
            fillOpacity="0.25"
          />

          {/* Tablet Bezel Outer Dark Shell (3D Extrusion) */}
          {/* Front Bevel Edge */}
          <polygon points="175,70 175,85 20,225 20,210" fill="#0F172A" />
          {/* Right Bevel Edge */}
          <polygon points="175,70 240,30 240,45 175,85" fill="#1E293B" />

          {/* Main Top Bezel Surface */}
          <polygon
            points="20,210 175,70 240,30 85,170"
            fill="#1E293B"
            stroke="#0F172A"
            strokeWidth="2"
          />

          {/* Screen Inset Surface */}
          <polygon
            points="32,200 170,75 228,40 90,165"
            fill="#F1F5F9"
            stroke="#E2E8F0"
            strokeWidth="1.5"
          />

          {/* Screen Content Graphics (Star Ratings & Card Rows) */}
          <g transform="translate(100, 140) skewY(-28) skewX(28)">
            {/* Subtle Star Rating watermark */}
            <path
              d="M 20 15 L 23 23 L 31 23 L 25 28 L 27 36 L 20 31 L 13 36 L 15 28 L 9 23 L 17 23 Z"
              fill="#E2E8F0"
              opacity="0.8"
            />
            <path
              d="M 50 40 L 53 48 L 61 48 L 55 53 L 57 61 L 50 56 L 43 61 L 45 53 L 39 48 L 47 48 Z"
              fill="#E2E8F0"
              opacity="0.8"
            />
          </g>

          {/* Camera Notch on Top Right Bezel */}
          <ellipse cx="230" cy="36" rx="2" ry="1.5" fill="#475569" />
        </g>

        {/* ---------------- 3. Two Standing Upright Blue Speech Flyers ---------------- */}
        <g id="standing-cards" transform="translate(340, 30)">
          {/* Back Blue Flyer */}
          <g transform="translate(10, 0)">
            {/* Shadow on tablet */}
            <polygon points="35,170 80,140 100,160 55,190" fill="#93C5FD" fillOpacity="0.4" />

            {/* Main Back Card Body */}
            <polygon points="25,50 85,15 85,175 25,210" fill="url(#blueCardGrad)" />
            {/* Triangular pointer tail */}
            <polygon points="45,200 65,190 55,230" fill="url(#blueCardGrad)" />

            {/* Back Card Inner Content */}
            <g transform="translate(35, 55) skewY(-30)">
              {/* White image window placeholder */}
              <rect x="0" y="0" width="42" height="28" rx="3" fill="#FFFFFF" fillOpacity="0.9" />
              {/* Text lines */}
              <rect x="0" y="34" width="42" height="4" rx="2" fill="#FFFFFF" fillOpacity="0.85" />
              <rect x="0" y="42" width="36" height="4" rx="2" fill="#FFFFFF" fillOpacity="0.85" />
              <rect x="0" y="50" width="40" height="4" rx="2" fill="#FFFFFF" fillOpacity="0.85" />
              <rect x="0" y="58" width="30" height="4" rx="2" fill="#FFFFFF" fillOpacity="0.85" />
              <rect x="0" y="66" width="38" height="4" rx="2" fill="#FFFFFF" fillOpacity="0.85" />
            </g>
          </g>

          {/* Front Blue Flyer (Slightly to the right and foreground) */}
          <g transform="translate(65, 35)">
            {/* Main Front Card Body */}
            <polygon points="25,50 85,15 85,175 25,210" fill="url(#blueCardFrontGrad)" filter="url(#softGlow)" />
            {/* Triangular pointer tail */}
            <polygon points="45,200 65,190 55,235" fill="#2563EB" />

            {/* Front Card Inner Content */}
            <g transform="translate(35, 55) skewY(-30)">
              {/* White image window placeholder */}
              <rect x="0" y="0" width="42" height="28" rx="3" fill="#FFFFFF" />
              {/* Text lines */}
              <rect x="0" y="34" width="42" height="4" rx="2" fill="#FFFFFF" />
              <rect x="0" y="42" width="36" height="4" rx="2" fill="#FFFFFF" />
              <rect x="0" y="50" width="40" height="4" rx="2" fill="#FFFFFF" />
              <rect x="0" y="58" width="32" height="4" rx="2" fill="#FFFFFF" />
              <rect x="0" y="66" width="38" height="4" rx="2" fill="#FFFFFF" />
            </g>
          </g>
        </g>

        {/* ---------------- 4. Foreground Large 3D Magnifying Glass ---------------- */}
        <g id="magnifying-glass" transform="translate(230, 280)">
          {/* Glass Lens Cast Shadow on Platform */}
          <ellipse cx="140" cy="115" rx="55" ry="24" fill="#94A3B8" fillOpacity="0.3" />
          <path d="M 60 150 L 110 115 L 120 125 L 70 160 Z" fill="#94A3B8" fillOpacity="0.25" />

          {/* Handle Cylindrical 3D Stem */}
          {/* Handle Grip (Dark Charcoal / Navy) */}
          <path
            d="M 5 210 L 80 155 L 94 165 L 18 220 Z"
            fill="#0F172A"
          />
          {/* Metallic / Blue Accent Rings on Handle */}
          <path
            d="M 50 178 L 65 167 L 72 172 L 57 183 Z"
            fill="#2563EB"
          />
          <path
            d="M 75 160 L 90 148 L 97 154 L 82 165 Z"
            fill="#60A5FA"
          />

          {/* Lens Outer Bevel Thickness (3D Edge) */}
          <ellipse
            cx="140"
            cy="90"
            rx="56"
            ry="38"
            transform="rotate(-20 140 90)"
            fill="#1D4ED8"
          />
          {/* Lens Main Blue Rim */}
          <ellipse
            cx="140"
            cy="86"
            rx="55"
            ry="37"
            transform="rotate(-20 140 86)"
            fill="#2563EB"
            stroke="#60A5FA"
            strokeWidth="3"
          />

          {/* Inner Clear Glass Surface */}
          <ellipse
            cx="140"
            cy="86"
            rx="42"
            ry="28"
            transform="rotate(-20 140 86)"
            fill="url(#lensGlass)"
          />

          {/* Curved Specular Glare / Reflection on Lens */}
          <path
            d="M 115 72 Q 130 62 155 64 Q 165 66 172 74"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />
          <circle cx="120" cy="82" r="2.5" fill="#FFFFFF" opacity="0.75" />
        </g>

        {/* ---------------- 5. Isometric Candidate Character (Right) ---------------- */}
        <g id="character" transform="translate(470, 210)">
          {/* Character Foot Shadow */}
          <ellipse cx="40" cy="225" rx="30" ry="10" fill="#94A3B8" fillOpacity="0.3" />

          {/* Right Leafy Plant Base behind feet */}
          <g transform="translate(45, 175)">
            <path d="M10 40 Q25 30 35 15" stroke="#3B82F6" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M35 15 C42 10 45 20 38 25 C32 24 30 18 35 15 Z" fill="#60A5FA" />
            <path d="M25 22 C32 18 38 26 30 32 C25 30 22 25 25 22 Z" fill="#3B82F6" />
            <path d="M18 32 C24 28 28 35 22 40 C17 38 15 34 18 32 Z" fill="#93C5FD" />
          </g>

          {/* Head & Neck */}
          {/* Neck */}
          <rect x="27" y="38" width="8" height="10" fill="#FBBF24" />
          {/* Head Face */}
          <circle cx="31" cy="26" r="13" fill="#FDE68A" />
          {/* Hair (Black stylized with side part) */}
          <path
            d="M 18 24 C 18 12 28 8 40 12 C 45 14 46 22 44 26 C 41 22 36 21 30 22 C 24 23 20 28 18 24 Z"
            fill="#0F172A"
          />
          {/* Ear */}
          <ellipse cx="20" cy="27" rx="2.5" ry="3.5" fill="#FDE68A" />

          {/* Torso: White T-Shirt with Short Blue Sleeves */}
          {/* Main White Shirt Body */}
          <path
            d="M 22 46 L 44 44 L 46 95 L 20 95 Z"
            fill="#FFFFFF"
            stroke="#E2E8F0"
            strokeWidth="1.5"
          />
          {/* Collar Line */}
          <path d="M 27 46 Q 33 50 39 45" stroke="#CBD5E1" strokeWidth="1.5" fill="none" />

          {/* Right Arm (At side) */}
          <path
            d="M 40 44 L 52 54 L 48 88 L 40 82 Z"
            fill="#2563EB"
          />
          {/* Right Hand */}
          <circle cx="44" cy="90" r="4.5" fill="#FDE68A" />

          {/* Left Arm (Reaching forward towards tablet screen) */}
          <path
            d="M 22 46 L 6 62 L -6 60 L 10 44 Z"
            fill="#2563EB"
          />
          {/* Left Forearm & Hand */}
          <path
            d="M 6 62 L -18 56 L -16 50 L 0 54 Z"
            fill="#FDE68A"
          />
          {/* Hand Pointing */}
          <circle cx="-20" cy="54" r="4.5" fill="#FDE68A" />

          {/* Legs: Dark Charcoal Trousers */}
          {/* Left Leg */}
          <path
            d="M 20 95 L 30 95 L 28 190 L 18 190 Z"
            fill="#1E293B"
          />
          {/* Right Leg */}
          <path
            d="M 34 95 L 46 95 L 44 190 L 32 190 Z"
            fill="#0F172A"
          />

          {/* Shoes: Modern Sneakers */}
          {/* Left Shoe */}
          <path
            d="M 12 198 C 12 192 18 190 28 190 L 30 196 C 26 200 16 202 12 198 Z"
            fill="#2563EB"
          />
          <ellipse cx="20" cy="200" rx="9" ry="2.5" fill="#FFFFFF" />

          {/* Right Shoe */}
          <path
            d="M 28 198 C 28 192 34 190 44 190 L 46 196 C 42 200 32 202 28 198 Z"
            fill="#0F172A"
          />
          <ellipse cx="36" cy="200" rx="9" ry="2.5" fill="#FFFFFF" />
        </g>

        {/* ---------------- 6. Three 3D Stacked Status Badges (Far Right) ---------------- */}
        <g id="status-badges" transform="translate(525, 120)">
          {/* 1. Dollar ($) Badge */}
          <g transform="translate(0, 0)">
            {/* 3D Coin Depth */}
            <ellipse cx="24" cy="28" rx="20" ry="20" fill="#0F172A" />
            {/* Top Cyan Highlight Ring */}
            <ellipse cx="24" cy="24" rx="20" ry="20" fill="#1E293B" stroke="#60A5FA" strokeWidth="2.5" />
            {/* Dollar Symbol */}
            <text
              x="17"
              y="32"
              fill="#FFFFFF"
              fontSize="22"
              fontWeight="900"
              fontFamily="var(--font-heading), sans-serif"
            >
              $
            </text>
          </g>

          {/* 2. Candidate / Team Badge */}
          <g transform="translate(0, 65)">
            {/* 3D Coin Depth */}
            <ellipse cx="24" cy="28" rx="20" ry="20" fill="#0F172A" />
            {/* Top Cyan Highlight Ring */}
            <ellipse cx="24" cy="24" rx="20" ry="20" fill="#1E293B" stroke="#60A5FA" strokeWidth="2.5" />
            {/* Candidate Silhouette */}
            <circle cx="24" cy="18" r="5" fill="#FFFFFF" />
            <path d="M 14 32 C 14 26 18 25 24 25 C 30 25 34 26 34 32 Z" fill="#FFFFFF" />
          </g>

          {/* 3. Briefcase / Career Badge */}
          <g transform="translate(0, 130)">
            {/* 3D Coin Depth */}
            <ellipse cx="24" cy="28" rx="20" ry="20" fill="#0F172A" />
            {/* Top Cyan Highlight Ring */}
            <ellipse cx="24" cy="24" rx="20" ry="20" fill="#1E293B" stroke="#60A5FA" strokeWidth="2.5" />
            {/* Briefcase Icon */}
            <rect x="13" y="18" width="22" height="14" rx="3" fill="#FFFFFF" />
            <path d="M 19 18 V 15 C 19 13.5 21 13.5 24 13.5 C 27 13.5 29 13.5 29 15 V 18" stroke="#1E293B" strokeWidth="1.5" fill="none" />
            <line x1="13" y1="23" x2="35" y2="23" stroke="#1E293B" strokeWidth="1.2" />
          </g>
        </g>
      </svg>
    </div>
  );
}
