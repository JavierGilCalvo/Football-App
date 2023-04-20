import './App.css'
import { LeagueCard } from './components/LeagueCard'
import { DailyMatchesContext } from './context/DailyMatchesContext'
import { useContext } from 'react'
import { useStats } from './hooks/useStats'
import { summaries as matchesFromCompetitor } from '../mocks/matches-competitor.json'
import { Stat } from './components/Stats'
import { MatchHeading } from './components/MatchHeading'
/*
  PÁGINAS:
    - Partidos de hoy.
    - Partido (en directo o no)
    - Clasificación Liga
    - Equipos Favoritos
*/

/*
  ENDPOINTS/SERVICIOS:
    - Partidos hoy.
    - Datos partido.
    - Datos liga.
    - Partidos de un equipo.
*/

const testMatchChosen = 'sr:sport_event:39564043'

function App () {
  const { matchesByLeague } = useContext(DailyMatchesContext)

  const matchOrNot = false

  const matchChosen = matchesFromCompetitor.find(match => {
    return match.sport_event.id === testMatchChosen
  })
  const { matchStats } = useStats({ matchChosen })

  return (

    <section className='app'>

      {matchOrNot &&
      (
        <ul>
          {matchesByLeague.map((league) => {
            return (
              <LeagueCard key={league.leagueName} leagueMatches={league} />
            )
          })}
        </ul>
      )}
      <>
        <MatchHeading matchChosen={matchChosen} />
        <div className='stats-section'>
          {
            Array.from(matchStats.values()).map(stat => {
              return (
                <Stat key={stat} matchChosen={matchChosen} stat={stat} />
              )
            })
          }

        </div>
      </>

    </section>

  )
}

export default App
