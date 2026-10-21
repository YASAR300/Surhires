/**
 * Isometric 3D-styled vector illustration for the Hero section,
 * directly matching the reference visual: isometric JOBS paper,
 * mobile application interface, 3D character, magnifying glass,
 * and floating status tokens.
 */
export default function HeroIllustration({ className = '' }) {
  return (
    <div className={`relative w-full max-w-[560px] mx-auto select-none ${className}`}>
      <svg
        viewBox="0 0 600 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-xl"
        aria-hidden="true"
      >
        {/* Soft Isometric Platform Shadow */}
        <ellipse cx="320" cy="400" rx="240" ry="60" fill="#E2E8F0" fillOpacity="0.5" />
        <ellipse cx="330" cy="390" rx="190" ry="45" fill="#DBEAFE" fillOpacity="0.6" />

        {/* 1. Isometric Newspaper / Job Board "JOBS" */}
        <g transform="translate(120, 110)">
          {/* Back Paper Layers (Depth) */}
          <polygon points="120,40 120,240 20,180 20,-20" fill="#E2E8F0" />
          <polygon points="110,45 110,245 10,185 10,-15" fill="#F1F5F9" />

          {/* Main Paper Sheet Face */}
          <polygon points="100,50 100,250 0,190 0,-10" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
          {/* Paper Top Edge */}
          <polygon points="0,-10 30,-30 130,30 100,50" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />

          {/* "JOBS" Bold Header on Isometric Angle */}
          <g transform="skewY(30) translate(15, -10)">
            <rect x="0" y="0" width="12" height="24" fill="#2563EB" rx="2" />
            <text
              x="20"
              y="18"
              fill="#2563EB"
              fontSize="22"
              fontWeight="900"
              fontFamily="var(--font-heading), sans-serif"
              letterSpacing="2"
            >
              JOBS
            </text>
          </g>

          {/* Paper Content Columns / Articles */}
          <g transform="skewY(30) translate(15, 45)">
            <rect x="0" y="0" width="34" height="6" rx="2" fill="#93C5FD" />
            <rect x="0" y="10" width="30" height="4" rx="2" fill="#E2E8F0" />
            <rect x="0" y="18" width="34" height="4" rx="2" fill="#E2E8F0" />
            <rect x="0" y="26" width="28" height="4" rx="2" fill="#E2E8F0" />

            <rect x="42" y="0" width="32" height="6" rx="2" fill="#94A3B8" />
            <rect x="42" y="10" width="34" height="4" rx="2" fill="#E2E8F0" />
            <rect x="42" y="18" width="30" height="4" rx="2" fill="#E2E8F0" />
            <rect x="42" y="26" width="34" height="4" rx="2" fill="#E2E8F0" />

            {/* Second row of text snippets */}
            <rect x="0" y="42" width="34" height="4" rx="2" fill="#E2E8F0" />
            <rect x="0" y="50" width="26" height="4" rx="2" fill="#E2E8F0" />
            <rect x="42" y="42" width="34" height="4" rx="2" fill="#E2E8F0" />
            <rect x="42" y="50" width="30" height="4" rx="2" fill="#E2E8F0" />
          </g>
        </g>

        {/* 2. Isometric Tablet / Digital Device */}
        <g transform="translate(240, 130)">
          {/* Tablet Dark Border Depth */}
          <polygon points="180,60 180,240 20,330 20,150" fill="#1E293B" />
          <polygon points="20,150 180,60 190,65 30,155" fill="#334155" />

          {/* Tablet Screen Face */}
          <polygon points="175,70 175,230 30,315 30,155" fill="#F8FAFC" />

          {/* Inner Job List Cards on Screen */}
          <g transform="skewY(-30) translate(140, 240)">
            {/* Card 1 */}
            <rect x="0" y="0" width="100" height="34" rx="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
            <circle cx="15" cy="17" r="7" fill="#EFF6FF" />
            <rect x="28" y="11" width="45" height="5" rx="2" fill="#0B1F3A" />
            <rect x="28" y="19" width="30" height="3" rx="1.5" fill="#94A3B8" />
            <rect x="78" y="13" width="16" height="8" rx="3" fill="#DCFCE7" />

            {/* Card 2 (Active highlighted) */}
            <rect x="0" y="40" width="100" height="34" rx="6" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="1.5" />
            <circle cx="15" cy="57" r="7" fill="#2563EB" />
            <rect x="28" y="51" width="50" height="5" rx="2" fill="#1E40AF" />
            <rect x="28" y="59" width="35" height="3" rx="1.5" fill="#60A5FA" />
            <rect x="80" y="53" width="14" height="8" rx="3" fill="#2563EB" />

            {/* Rating Stars */}
            <g transform="translate(5, 84)">
              <circle cx="5" cy="0" r="3" fill="#FBBF24" />
              <circle cx="15" cy="0" r="3" fill="#FBBF24" />
              <circle cx="25" cy="0" r="3" fill="#FBBF24" />
              <circle cx="35" cy="0" r="3" fill="#FBBF24" />
              <circle cx="45" cy="0" r="3" fill="#CBD5E1" />
            </g>
          </g>
        </g>

        {/* 3. Isometric Chat / Applicant Bubbles Above Device */}
        <g transform="translate(340, 95)">
          {/* Blue Chat Bubble 1 */}
          <polygon points="30,0 75,-25 75,55 30,80" fill="#2563EB" />
          <polygon points="30,0 35,-3 80,-28 75,-25" fill="#60A5FA" />
          <g transform="skewY(30) translate(35, -20)">
            <rect x="0" y="0" width="32" height="4" rx="2" fill="#FFFFFF" fillOpacity="0.8" />
            <rect x="0" y="8" width="24" height="4" rx="2" fill="#FFFFFF" fillOpacity="0.8" />
            <rect x="0" y="16" width="28" height="4" rx="2" fill="#FFFFFF" fillOpacity="0.8" />
          </g>

          {/* Blue Chat Bubble 2 (Foreground) */}
          <polygon points="65,30 110,5 110,85 65,110" fill="#3B82F6" />
          <polygon points="65,30 70,27 115,2 110,5" fill="#93C5FD" />
          <g transform="skewY(30) translate(72, 8)">
            <rect x="0" y="0" width="32" height="4" rx="2" fill="#FFFFFF" />
            <rect x="0" y="8" width="20" height="4" rx="2" fill="#FFFFFF" />
            <rect x="0" y="16" width="26" height="4" rx="2" fill="#FFFFFF" />
          </g>
        </g>

        {/* 4. Large 3D Magnifying Glass in Foreground */}
        <g transform="translate(240, 240)">
          {/* Glass Lens (Isometric Ring) */}
          <ellipse
            cx="90"
            cy="70"
            rx="45"
            ry="25"
            transform="rotate(-30 90 70)"
            fill="#DBEAFE"
            fillOpacity="0.4"
            stroke="#2563EB"
            strokeWidth="8"
          />
          {/* Handle */}
          <path
            d="M50 95 L10 120"
            stroke="#1E40AF"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M50 95 L10 120"
            stroke="#2563EB"
            strokeWidth="10"
            strokeLinecap="round"
          />
          {/* Highlight on lens */}
          <ellipse
            cx="85"
            cy="65"
            rx="30"
            ry="12"
            transform="rotate(-30 85 65)"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeDasharray="25 60"
            fill="none"
          />
        </g>

        {/* 5. Isometric Candidate / Talent Figure */}
        <g transform="translate(425, 200)">
          {/* Head */}
          <circle cx="35" cy="20" r="14" fill="#FCD34D" />
          {/* Dark Hair */}
          <path d="M22 17 C22 10 30 7 42 10 C46 12 48 18 47 22 C45 20 40 19 35 21 Z" fill="#1E293B" />
          {/* Torso / Shirt (Light Blue & White) */}
          <path d="M22 36 L48 36 L52 75 L18 75 Z" fill="#FFFFFF" stroke="#E2E8F0" />
          <path d="M25 36 L35 36 L33 75 L22 75 Z" fill="#2563EB" />
          {/* Arms */}
          <path d="M18 42 L8 60 L18 64 L24 48 Z" fill="#3B82F6" />
          <circle cx="8" cy="62" r="5" fill="#FCD34D" />
          {/* Legs (Dark Navy Slacks) */}
          <rect x="22" y="75" width="11" height="55" rx="3" fill="#1E293B" />
          <rect x="36" y="75" width="11" height="55" rx="3" fill="#1E293B" />
          {/* Shoes */}
          <ellipse cx="27" cy="132" rx="9" ry="5" fill="#0B1F3A" />
          <ellipse cx="42" cy="132" rx="9" ry="5" fill="#0B1F3A" />
        </g>

        {/* 6. Floating Status Badges (Right side) */}
        <g transform="translate(470, 110)">
          {/* Dollar / Compensation Badge */}
          <circle cx="20" cy="20" r="18" fill="#1E293B" stroke="#FFFFFF" strokeWidth="2.5" />
          <text x="14" y="27" fill="#60A5FA" fontSize="20" fontWeight="bold">
            $
          </text>
        </g>

        <g transform="translate(470, 160)">
          {/* Verified Candidates Badge */}
          <circle cx="20" cy="20" r="18" fill="#1E293B" stroke="#FFFFFF" strokeWidth="2.5" />
          <circle cx="20" cy="16" r="4.5" fill="#93C5FD" />
          <path d="M12 28 C12 23 15 22 20 22 C25 22 28 23 28 28 Z" fill="#93C5FD" />
        </g>

        <g transform="translate(470, 210)">
          {/* Briefcase Portfolio Badge */}
          <circle cx="20" cy="20" r="18" fill="#1E293B" stroke="#FFFFFF" strokeWidth="2.5" />
          <rect x="11" y="15" width="18" height="12" rx="2" fill="#60A5FA" />
          <path d="M15 15 V13 C15 11.5 17 11.5 18 11.5 C19 11.5 21 11.5 21 13 V15" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
        </g>
      </svg>
    </div>
  );
}
