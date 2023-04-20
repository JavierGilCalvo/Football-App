export function useStats ({ matchChosen }) {
  const matchStats = new Map()

  matchChosen.statistics.totals.competitors.forEach(competitorStats => {
    Object.keys(competitorStats.statistics).forEach((stat) => {
      if (!matchStats.get(stat)) {
        matchStats.set(stat, {
          statName: stat
        })
      }
      matchStats.get(stat)[competitorStats.name] = competitorStats.statistics[stat]
    })
  })

  return { matchStats }
}
