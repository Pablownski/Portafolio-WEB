export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  stack: string[]
  highlights: string[]
  liveUrl: string
  githubUrl?: string
  featured: boolean
  image: string
}

export interface Technology {
  name: string
  icon: string
  category: 'frontend' | 'tooling' | 'backend' | 'state' | 'cloud'
  description: string
  why: string
}

export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  stargazers_count: number
  language: string | null
  updated_at: string
  topics: string[]
  fork: boolean
}

export interface NavItem {
  label: string
  href: string
}
