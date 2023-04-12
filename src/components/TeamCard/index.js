import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {details} = props
  const {id, name, teamImageUrl} = details
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="teamCard">
        <img className="teamImage" src={teamImageUrl} alt={name} />
        <p className="teamName">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
