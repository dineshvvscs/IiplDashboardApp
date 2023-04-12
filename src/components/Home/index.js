import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamCardsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamCards()
  }

  getTeamCards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamCardsList: updatedData, isLoading: false})
  }

  render() {
    const {teamCardsList, isLoading} = this.state
    return (
      <>
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
          <div className="homeContainer">
            <div className="headingContainer">
              <img
                className="logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1 className="heading">IPL Dashboard</h1>
            </div>
            <ul className="orderListContainer">
              {teamCardsList.map(eachItem => (
                <TeamCard details={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default Home
