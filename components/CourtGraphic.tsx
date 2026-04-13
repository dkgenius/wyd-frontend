// Animated SVG pickleball court diagram
export default function CourtGraphic() {
  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #0B5F70 0%, #073d4a 60%, #051e26 100%)",
        }}
      />

      {/* Court surface */}
      <svg
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        {/* Outer court rectangle */}
        <rect
          x="40"
          y="30"
          width="320"
          height="240"
          fill="rgba(15,129,154,0.25)"
          rx="2"
        />

        {/* Court outline */}
        <rect
          x="40"
          y="30"
          width="320"
          height="240"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="2"
          fill="none"
          className="court-line"
        />

        {/* Center line (horizontal) */}
        <line
          x1="40"
          y1="150"
          x2="360"
          y2="150"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1.5"
          className="court-line"
        />

        {/* Center line (vertical) */}
        <line
          x1="200"
          y1="30"
          x2="200"
          y2="270"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1.5"
          className="court-line"
        />

        {/* Kitchen lines (NVZ) - top */}
        <rect
          x="40"
          y="30"
          width="320"
          height="63"
          fill="rgba(245,166,35,0.1)"
        />
        <line
          x1="40"
          y1="93"
          x2="360"
          y2="93"
          stroke="rgba(245,166,35,0.7)"
          strokeWidth="2"
          strokeDasharray="8 4"
          className="court-line"
        />

        {/* Kitchen lines (NVZ) - bottom */}
        <rect
          x="40"
          y="207"
          width="320"
          height="63"
          fill="rgba(245,166,35,0.1)"
        />
        <line
          x1="40"
          y1="207"
          x2="360"
          y2="207"
          stroke="rgba(245,166,35,0.7)"
          strokeWidth="2"
          strokeDasharray="8 4"
          className="court-line"
        />

        {/* NVZ labels */}
        <text
          x="200"
          y="68"
          textAnchor="middle"
          fill="rgba(245,166,35,0.7)"
          fontSize="10"
          fontFamily="sans-serif"
          letterSpacing="2"
        >
          NON-VOLLEY ZONE
        </text>
        <text
          x="200"
          y="238"
          textAnchor="middle"
          fill="rgba(245,166,35,0.7)"
          fontSize="10"
          fontFamily="sans-serif"
          letterSpacing="2"
        >
          NON-VOLLEY ZONE
        </text>

        {/* Net */}
        <line
          x1="40"
          y1="150"
          x2="360"
          y2="150"
          stroke="rgba(255,255,255,0.9)"
          strokeWidth="3"
        />
        <text
          x="200"
          y="146"
          textAnchor="middle"
          fill="rgba(255,255,255,0.5)"
          fontSize="8"
          fontFamily="sans-serif"
          letterSpacing="3"
        >
          NET
        </text>

        {/* Pickleball */}
        <circle
          cx="270"
          cy="115"
          r="10"
          fill="rgba(245,166,35,0.9)"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
        />
        {/* Ball holes */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <circle
            key={i}
            cx={270 + Math.cos((angle * Math.PI) / 180) * 5}
            cy={115 + Math.sin((angle * Math.PI) / 180) * 5}
            r="1.5"
            fill="rgba(200,120,0,0.8)"
          />
        ))}

        {/* Paddle silhouette */}
        <g transform="translate(108, 170) rotate(-30)">
          {/* Handle */}
          <rect
            x="-5"
            y="18"
            width="10"
            height="28"
            rx="5"
            fill="rgba(255,255,255,0.15)"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
          />
          {/* Face */}
          <rect
            x="-18"
            y="-20"
            width="36"
            height="40"
            rx="10"
            fill="rgba(11,95,112,0.5)"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1.5"
          />
        </g>

        {/* Corner decorative dots */}
        {[
          [44, 34], [356, 34], [44, 266], [356, 266],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3" fill="rgba(255,255,255,0.5)" />
        ))}
      </svg>

      {/* Overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 30%, rgba(15,129,154,0.3) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}
