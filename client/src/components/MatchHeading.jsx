export function MatchHeading ({ matchChosen }) {
  return (
    <section className='container-match-duel-participants'>
      <p className='match-detail-score-date'>{matchChosen.sport_event.start_time}</p>
      <section className='container-match-detail'>
        <p className='match-detail-team-name'>{matchChosen.sport_event.competitors[0].name}</p>
        <div className='match-detail-score'>
          <p>{matchChosen.sport_event_status.home_score}</p> <p> - </p> <p>{matchChosen.sport_event_status.away_score}</p>
        </div>
        <p className='match-detail-team-name'>{matchChosen.sport_event.competitors[1].name}</p>
      </section>
    </section>
  )
}
