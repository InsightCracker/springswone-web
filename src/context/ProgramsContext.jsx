import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

const ProgramContext = createContext(null)

export function ProgramProvider({ children }) {
  const [programs, setPrograms] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchPrograms = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const res = await fetch(`${API_URL}/api/programs`)
      if (!res.ok) throw new Error(`Failed to load programs (${res.status})`)
      setPrograms(await res.json())
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { fetchPrograms() }, [fetchPrograms])

  return (
    <ProgramContext.Provider value={{ programs, loading, error, refetch: fetchPrograms }}>
      {children}
    </ProgramContext.Provider>
  )
}

export function usePrograms() {
  const ctx = useContext(ProgramContext)
  if (!ctx) throw new Error('usePrograms must be used inside a ProgramProvider')
  return ctx
}