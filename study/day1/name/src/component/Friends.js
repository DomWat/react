import React, { Component } from 'react'


class FriendsList extends Component {

    render() {

        let friendsList = this.props.listOfFriends.map((friend, index) => {
            return <li key = {index}>{friend}</li>
        })

        return(
            friendsList
        )
        
    }

}

export default FriendsList