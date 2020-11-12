import React, { Component } from 'react'


class Content extends Component {



    render() {
        const allRaces = this.props.races.map(race => {
            return <li key = {race.url}>
                <b>{race.name}</b>
            </li>
        })

        return(
            <ul><h1>Races:</h1> { allRaces }</ul>
        )
    }
}

export default Content