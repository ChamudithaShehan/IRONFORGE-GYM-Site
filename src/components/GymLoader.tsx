import React from "react";

export default function GymLoader() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-8">
      {/* Main loader container */}
      <div className="relative">
        {/* Pulsing energy rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-40 h-40 rounded-full animate-ping"
            style={{
              border: "2px solid hsl(var(--primary) / 0.3)",
              animationDuration: "1.5s",
            }}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-32 h-32 rounded-full animate-ping"
            style={{
              border: "2px solid hsl(var(--primary) / 0.4)",
              animationDuration: "1.2s",
              animationDelay: "0.2s",
            }}
          />
        </div>

        {/* Dumbbell SVG */}
        <svg
          width="160"
          height="160"
          viewBox="0 0 160 160"
          className="relative z-10"
        >
          {/* Left weight stack */}
          <g
            className="origin-center"
            style={{ animation: "lift 1s ease-in-out infinite" }}
          >
            {/* Outer plate */}
            <rect
              x="20"
              y="50"
              width="16"
              height="60"
              rx="3"
              fill="hsl(var(--primary))"
              opacity="0.8"
            />
            {/* Inner plate */}
            <rect
              x="36"
              y="55"
              width="12"
              height="50"
              rx="2"
              fill="hsl(var(--primary))"
              opacity="0.9"
            />
            {/* Small plate */}
            <rect
              x="48"
              y="60"
              width="8"
              height="40"
              rx="2"
              fill="hsl(var(--primary))"
            />
          </g>

          {/* Bar */}
          <rect
            x="56"
            y="72"
            width="48"
            height="16"
            rx="8"
            className="fill-foreground"
            style={{ animation: "lift 1s ease-in-out infinite" }}
          />

          {/* Bar grip lines */}
          <g style={{ animation: "lift 1s ease-in-out infinite" }}>
            <line
              x1="65"
              y1="74"
              x2="65"
              y2="86"
              className="stroke-muted-foreground"
              strokeWidth="1"
            />
            <line
              x1="70"
              y1="74"
              x2="70"
              y2="86"
              className="stroke-muted-foreground"
              strokeWidth="1"
            />
            <line
              x1="75"
              y1="74"
              x2="75"
              y2="86"
              className="stroke-muted-foreground"
              strokeWidth="1"
            />
            <line
              x1="85"
              y1="74"
              x2="85"
              y2="86"
              className="stroke-muted-foreground"
              strokeWidth="1"
            />
            <line
              x1="90"
              y1="74"
              x2="90"
              y2="86"
              className="stroke-muted-foreground"
              strokeWidth="1"
            />
            <line
              x1="95"
              y1="74"
              x2="95"
              y2="86"
              className="stroke-muted-foreground"
              strokeWidth="1"
            />
          </g>

          {/* Right weight stack */}
          <g
            className="origin-center"
            style={{ animation: "lift 1s ease-in-out infinite" }}
          >
            {/* Small plate */}
            <rect
              x="104"
              y="60"
              width="8"
              height="40"
              rx="2"
              fill="hsl(var(--primary))"
            />
            {/* Inner plate */}
            <rect
              x="112"
              y="55"
              width="12"
              height="50"
              rx="2"
              fill="hsl(var(--primary))"
              opacity="0.9"
            />
            {/* Outer plate */}
            <rect
              x="124"
              y="50"
              width="16"
              height="60"
              rx="3"
              fill="hsl(var(--primary))"
              opacity="0.8"
            />
          </g>

          {/* Sweat drops */}
          <circle
            cx="45"
            cy="45"
            r="3"
            className="fill-primary"
            opacity="0.6"
            style={{ animation: "sweat 1s ease-in-out infinite" }}
          />
          <circle
            cx="115"
            cy="40"
            r="2.5"
            className="fill-primary"
            opacity="0.6"
            style={{ animation: "sweat 1s ease-in-out infinite 0.3s" }}
          />
        </svg>

        {/* Glow effect under dumbbell */}
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-3 rounded-full blur-md"
          style={{
            backgroundColor: "hsl(var(--primary) / 0.5)",
            animation: "glow 1s ease-in-out infinite",
          }}
        />
      </div>

      {/* Loading text with animated dots */}
      <div className="flex items-center gap-1">
        <span className="text-foreground font-bebas text-xl sm:text-2xl tracking-widest uppercase">
          Loading
        </span>
        <span className="flex gap-1">
          <span
            className="w-2 h-2 rounded-full animate-bounce"
            style={{
              backgroundColor: "hsl(var(--primary))",
              animationDelay: "0ms",
            }}
          />
          <span
            className="w-2 h-2 rounded-full animate-bounce"
            style={{
              backgroundColor: "hsl(var(--primary))",
              animationDelay: "150ms",
            }}
          />
          <span
            className="w-2 h-2 rounded-full animate-bounce"
            style={{
              backgroundColor: "hsl(var(--primary))",
              animationDelay: "300ms",
            }}
          />
        </span>
      </div>

      {/* Motivational text that cycles */}
      <p className="text-muted-foreground font-oswald text-sm animate-pulse">
        Warming up the gains...
      </p>

      {/* Progress bar */}
      <div className="w-48 h-1.5 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, hsl(var(--primary) / 0.8), hsl(var(--primary)), hsl(var(--primary) / 0.8))`,
            animation: "progress 2s ease-in-out infinite",
            backgroundSize: "200% 100%",
          }}
        />
      </div>

      {/* Inline styles for custom animations */}
      <style>{`
        @keyframes lift {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes sweat {
          0% { opacity: 0; transform: translateY(0); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translateY(20px); }
        }

        @keyframes glow {
          0%, 100% { opacity: 0.3; transform: translateX(-50%) scaleX(1); }
          50% { opacity: 0.6; transform: translateX(-50%) scaleX(1.3); }
        }

        @keyframes progress {
          0% { width: 0%; background-position: 0% 50%; }
          50% { width: 100%; background-position: 100% 50%; }
          100% { width: 0%; background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}

