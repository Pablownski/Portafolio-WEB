interface TechIconProps {
  name: string
}

const ICON_COLORS: Record<string, string> = {
  react: '#61dafb',
  typescript: '#3178c6',
  tailwind: '#06b6d4',
  vite: '#646cff',
  docker: '#2496ed',
  git: '#f05032',
  eslint: '#4b32c3',
  framer: '#0055ff',
  terraform: '#7b42bc',
  lambda: '#ff9900',
  ec2: '#ff9900',
  s3: '#569a31',
  rds: '#527fff',
  redis: '#dc382d',
}

const ICON_LABELS: Record<string, string> = {
  react: 'Re',
  typescript: 'TS',
  tailwind: 'Tw',
  vite: 'Vt',
  docker: 'Do',
  git: 'Git',
  eslint: 'ES',
  framer: 'FM',
  terraform: 'Tf',
  lambda: 'λ',
  ec2: 'EC2',
  s3: 'S3',
  rds: 'RDS',
  redis: 'Rd',
}

export function TechIcon({ name }: TechIconProps) {
  const color = ICON_COLORS[name] ?? '#3b82f6'
  const label = ICON_LABELS[name] ?? name.slice(0, 2).toUpperCase()

  return (
    <span
      className="text-xs font-bold font-heading"
      style={{ color }}
      aria-label={name}
    >
      {label}
    </span>
  )
}
