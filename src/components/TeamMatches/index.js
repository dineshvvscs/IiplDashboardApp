import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatches from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    teamImageUrl: '',
    matchDetails: {},
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.TeamDetails()
  }

  TeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedMatchDetails = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }

    const updatedRecentMatches = data.recent_matches.map(eachItem => ({
      umpires: eachItem.umpires,
      result: eachItem.result,
      manOfTheMatch: eachItem.man_of_the_match,
      id: eachItem.id,
      date: eachItem.date,
      venue: eachItem.venue,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      firstInnings: eachItem.firstInnings,
      secondInnings: eachItem.secondInnings,
      matchStatus: eachItem.match_status,
    }))

    this.setState({
      teamImageUrl: data.team_banner_url,
      matchDetails: updatedMatchDetails,
      recentMatches: updatedRecentMatches,
      isLoading: false,
    })
  }

  render() {
    const {teamImageUrl, matchDetails, recentMatches, isLoading} = this.state
    return (
      <div className="teamMatchesContainer">
        {isLoading ? (
          <div>
            <Loader
              testid="loader"
              type="Oval"
              color="#ffffff"
              height={50}
              width={50}
            />
          </div>
        ) : (
          <>
            <img className="teamImage1" src={teamImageUrl} alt="team banner" />
            <h1 className="headingLatestMatch">Latest Matches</h1>
            <LatestMatches details={matchDetails} key={matchDetails.id} />
            <ul className="matchCardContainer1">
              {recentMatches.map(eachItem => (
                <MatchCard details={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches

/*
const updatedRecentMatches = {
      
    }
*/
