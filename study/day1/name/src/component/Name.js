import React, { Component } from 'react'

class Name extends Component {
    render() {
        return (
            <h1>This is {this.props.lastname}, {this.props.firstname}</h1>
        )
    }
}

export default Name