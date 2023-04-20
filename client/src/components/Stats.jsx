import { constants } from '../constants/constants'

export function Stat ({ matchChosen, stat }) {
  const homeTeam = matchChosen.sport_event.competitors[0].name
  const awayTeam = matchChosen.sport_event.competitors[1].name

  // To calculate the width (%) of the inner bar (red or black)
  const total = stat[homeTeam] + stat[awayTeam]
  const homeWidth = stat[homeTeam] / total * 100
  const awayWidth = stat[awayTeam] / total * 100

  // The bar side with a greater stat will be red colored, and the smaller (or equals) bar will be black
  const greaterHome = (stat[homeTeam] > stat[awayTeam]) ? 'stat-greater' : 'stat-lower-or-equals'
  const greaterAway = (stat[awayTeam] > stat[homeTeam]) ? 'stat-greater' : 'stat-lower-or-equals'

  return (
    <div className='stat-row'>
      <div className='stat'>
        <p className='stat-value'>{stat[homeTeam]}</p>
        <p className='stat-title'>{constants[stat.statName]}</p>
        <p className='stat-value'>{stat[awayTeam]}</p>
      </div>
      <div className='stat__bar'><div className='stat__barBg stat__home'><div className={`${greaterHome}`} style={{ width: `${homeWidth}%` }} /></div>
        <div className='stat__barBg stat__away'><div className={`${greaterAway}`} style={{ width: `${awayWidth}%` }} /></div>
      </div>
    </div>
  )
}
