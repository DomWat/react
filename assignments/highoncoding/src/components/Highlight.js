import React, { Component } from 'react'
import '../css/Highlight.css'


class Highlight extends Component {

    render() {

        return(
            <div className = 'container'>
                <div className = 'content'>
                    <h2>{this.props.title}</h2>
                    <p>When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completley avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot, and reviews.</p>
                </div>
            </div>
        )
        
    }

}

export default Highlight