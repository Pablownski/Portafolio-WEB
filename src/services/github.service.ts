import type { GitHubRepo } from '@/types'

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME ?? 'Pablownski'
const GITHUB_API_BASE = 'https://api.github.com'

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const headers: HeadersInit = {
    Accept: 'application/vnd.github.v3+json',
  }

  const token = import.meta.env.VITE_GITHUB_TOKEN
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  const response = await fetch(
    `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12&type=public`,
    { headers }
  )

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status} ${response.statusText}`)
  }

  const repos: GitHubRepo[] = await response.json()
  return repos.filter((repo) => !repo.fork)
}

export async function fetchGitHubProfile() {
  const response = await fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`)

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`)
  }

  return response.json()
}
