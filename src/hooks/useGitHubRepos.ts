import { useState, useEffect } from 'react'
import { fetchGitHubRepos } from '@/services/github.service'
import type { GitHubRepo } from '@/types'

interface UseGitHubReposReturn {
  repos: GitHubRepo[]
  loading: boolean
  error: string | null
}

export function useGitHubRepos(): UseGitHubReposReturn {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchGitHubRepos()
        if (!cancelled) setRepos(data)
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to fetch repositories')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => { cancelled = true }
  }, [])

  return { repos, loading, error }
}
