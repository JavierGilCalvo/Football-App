import { MatchCard } from './MatchCard'

export function LeagueCard ({ leagueMatches }) {
  return (
    <li>
      <h2 className='event__header'>{leagueMatches.leagueName}</h2>
      {
                leagueMatches.matches.map(match => {
                  return (
                    <MatchCard key={match.sport_event.id} match={match} />
                  )
                })
              }

    </li>
  )
}
