export function MatchCard ({ match }) {
  return (
  // eslint-disable-next-line react/jsx-key
    <div className='match-card'>
      <section className='time'>
        {
        match.sport_event.start_time.substring(11, 16)
        }
      </section>
      <section>
        {match.sport_event.competitors.map((competitor) => {
          return (
            <p key={competitor.id} className='event event__participant--home'>{competitor.name}</p>
          )
        })}
      </section>
      {match.sport_event_status.match_status === 'ended' &&
      (
        <section className='score'>
          <p className='event event__participant--home'>{match.sport_event_status.home_score}</p>
          <p className='event event__participant--home'>{match.sport_event_status.away_score}</p>
        </section>
      )}
    </div>
  )
}
