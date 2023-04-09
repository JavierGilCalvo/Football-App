import { useCallback, useState } from 'react'
import { summaries as initialMatches } from '../../mocks/daily-matches-full.json'

export default function useDailyMatches () {
  const [dailyMatches] = useState(initialMatches)

  const matchesByLeague = new Map()
  const groupMatchesByLeague = useCallback(() => {
    dailyMatches.forEach(match => {
      const leagueName = match.sport_event.sport_event_context.competition.name
      if (!matchesByLeague.get(leagueName)) {
        matchesByLeague.set(leagueName, {
          leagueName,
          matches: []
        })
      }
      matchesByLeague.get(leagueName).matches.push(match)
    })
  }, [dailyMatches])

  groupMatchesByLeague()

  return Array.from(matchesByLeague.values())
}
