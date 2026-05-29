const BADGES = [
  { label: 'React', color: '#61dafb', angle: 0 },
  { label: 'TypeScript', color: '#3178c6', angle: 72 },
  { label: 'Docker', color: '#2496ed', angle: 144 },
  { label: 'Git', color: '#f05032', angle: 216 },
  { label: 'Tailwind', color: '#06b6d4', angle: 288 },
]

export function OrbitingBadges() {
  const radius = 145

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 animate-orbit"
      style={{ animationDuration: '20s' }}
    >
      {BADGES.map((badge, i) => {
        const angleRad = ((badge.angle - 90) * Math.PI) / 180
        const x = Math.cos(angleRad) * radius
        const y = Math.sin(angleRad) * radius

        return (
          <div
            key={badge.label}
            className="absolute"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: 'translate(-50%, -50%)',
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <div
              className="px-2.5 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm"
              style={{
                backgroundColor: `${badge.color}15`,
                borderColor: `${badge.color}40`,
                color: badge.color,
                animation: `orbit 20s linear infinite reverse`,
              }}
            >
              {badge.label}
            </div>
          </div>
        )
      })}
    </div>
  )
}
