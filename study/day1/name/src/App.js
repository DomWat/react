import React, { Component } from 'react'
import FriendsList from './component/Friends'
import Name from './component/Name'

class App extends Component {


  render() {

    let friends = ["Jason", "Julian", "Will", "Cristina", "Taylor"]


    return (
      <div>
        <h1>Name</h1>
        <Name firstname = 'Dom' lastname = 'Waters'/>
        <h1>List of Friends</h1>
        <FriendsList listOfFriends = {friends} />
      </div>
    )
  }



}


export default App