import useDailyMatches from './hooks/useDailyMatches'
import './App.css'
import { LeagueCard } from './components/LeagueCard'

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

function App () {
  const matchesByLeague = useDailyMatches()
  return (
    <section className='app'>
      <ul>
        {matchesByLeague.map((league) => {
          return (
            <LeagueCard key={league.leagueName} leagueMatches={league} />
          )
        })}
      </ul>
    </section>
  )
}

export default App
