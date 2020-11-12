import React, { Component } from 'react'
import Content from './Components/Content'
import Footer from './Components/Footer'
import Header from './Components/Header'

let racesUrl = "https://www.dnd5eapi.co/api/races"

class App extends Component {

  constructor() {
    super()

    this.state = {
      races: [],
      search: ''
    }
  }

  fetchRaces = () => {
    fetch(racesUrl)
      .then(response => response.json())
      .then(result => {
        this.setState({
          races: result.results
        })
      })
  }

  componentDidMount() {
    this.fetchRaces()
  }

  searchRaces = (race) => {
    fetch(`https://www.dnd5eapi.co/api/races/${race}`)
    .then(response => response.json())
    .then(result => {
      this.setState({
        search: result.results
      })
    })
  }

  handleOnChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  handleSearch = () => {
    this.searchRaces(this.state.search)
  }

  render() {
    return (
      <div>
        <Header />
        <div className='contentDiv'>
          <input type = 'text' onChange = {this.handleOnChange} />
          <button onClick = {this.handleSearch}>Search</button>
          <Content races={this.state.races} />
        </div>
        <Footer />
      </div>
    )
  }

}




export default App
