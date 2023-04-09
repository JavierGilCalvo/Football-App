import { createContext } from 'react'
import useDailyMatches from './hooks/useDailyMatches'

export const DailyMatchesContext = createContext('dailyMatches')

export function DailyMatchesContextProvider ({ children }) {
  const matchesByLeague = useDailyMatches()
  return (
    <DailyMatchesContext.Provider value={
        matchesByLeague
    }
    >
      {children}
    </DailyMatchesContext.Provider>
  )
}
