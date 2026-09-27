import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

const FeaturedProjectContext = createContext(null)

export function FeaturedProjectProvider({ children }) {
  const [featuredProjects, setFeaturedProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchProjects = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const res = await fetch(`${API_URL}/api/featured-projects`)
      if (!res.ok) throw new Error(`Failed to load projects (${res.status})`)
      setFeaturedProjects(await res.json())
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { fetchProjects() }, [fetchProjects])

  return (
    <FeaturedProjectContext.Provider value={{ featuredProjects, loading, error, refetch: fetchProjects }}>
      {children}
    </FeaturedProjectContext.Provider>
  )
}

export function useFeaturedProjects() {
  const ctx = useContext(FeaturedProjectContext)
  if (!ctx) throw new Error('useFeaturedProjects must be used inside a FeaturedProjectProvider')
  return ctx
}