import React, { Component } from 'react'
import News from './components/News'
import Stepper from './components/Stepper'

class App extends Component {

  constructor() {
    super()


    this.state = {
      articles: []
    }
  }

  fetchArticles = () => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=0cf790498275413a9247f8b94b3843fd')
    .then(response => response.json())
    .then(result => {
      this.setState({
        articles: result.articles
      })
    })
  }


  componentDidMount() {
    this.fetchArticles()
  }


  render() {
    return (
      <div>

        <Stepper />
        <News articles = {this.state.articles}/>
      </div>
    )
  }
}

export default App