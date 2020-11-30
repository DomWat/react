import React, { useState, useEffect } from 'react'

let racesUrl = "https://www.dnd5eapi.co/api/races"

function Races() {
    const [race, setRace] = useState([])

    useEffect(() => {
        fetch(racesUrl)
            .then(response => response.json())
            .then(result => {
                setRace(result.results)
            })
    },[])

    const races = race.map(race => {
        return <li>{race.name}</li>
    })

    return(
        <div>
            <h1>Races</h1>
            <b>{races}</b>
        </div>
    )
}

export default Races