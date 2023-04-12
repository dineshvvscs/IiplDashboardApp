import './index.css'

const MatchCard = props => {
  const {details} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = details
  let resultStatus = false
  if (matchStatus === 'Won') {
    resultStatus = true
  }

  const resultFinalStatus = resultStatus ? 'greenColor' : 'redColor'
  return (
    <li className="matchCard">
      <img
        className="matchCardLogo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="cardHeadingMatch">{competingTeam}</p>
      <p className="matchCardResult">{result}</p>
      <p className={resultFinalStatus}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
