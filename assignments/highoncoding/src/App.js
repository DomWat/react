import React, { Component } from 'react'
import Article from './components/Article'
import Highlight from './components/Highlight'
import Menu from './components/Menu'


class App extends Component {

  render() {

    let article1 = 'Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enables the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps fro the Apple Watch.'

    let article2 = 'Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.'

    return(
      <div>
        <Menu title = 'HighOnCoding' option1 = 'Home' option2 = 'Categories'/>
        <Highlight title = 'Curse of the Current Reviews'/>
        <Article title = 'Hello WatchKit' article = {article1} comments = '12' likes = '124' />
        <Article title = 'Introduction to Swift' article = {article2} comments = '15' likes = '45' />
      </div>
    )
  }


}





export default App
