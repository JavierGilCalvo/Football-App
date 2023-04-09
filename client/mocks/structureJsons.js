export const standingsComplete = {
  standings: [{
    type: [
      'total',
      'home',
      'away',
      'first half total',
      'first half home',
      'first half away',
      'second half total',
      'second half home',
      'second half away'
    ],
    groups: [{
      stage: {
        type: 'league',
        start_date: '2022-08-12',
        end_date: '2023-06-04'
      },
      standings: [{
        rank: 1,
        played: 13,
        win: 11,
        loss: 0,
        draw: 2,
        goals_for: 27,
        goals_against: 2,
        goals_diff: 25,
        competitor: {
          id: 'sr:competitor:2817',
          name: 'FC Barcelona',
          country: 'Spain',
          country_code: 'ESP',
          abbreviation: 'FCB',
          gender: 'male',
          form: 'WWWWW'
        },
        points: 35,
        current_outcome: 'Champions League',
        change: 0,
        points_per_game: 2.69
      }

      ]
    }
    ]
  }]

}
