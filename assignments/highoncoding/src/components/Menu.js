import React, { Component } from 'react'
import '../css/Menu.css'


class Menu extends Component {

    render() {

        return(
            <div className = 'menu'>
                <div className = 'menuTitle'>
                    <h1>{this.props.title}</h1>
                </div>
                <div className = 'menuOptions'>
                    <a href = '#'>{this.props.option1}</a> 
                    <a href = '#'> {this.props.option2}</a>
                </div>
            </div>
        )
        
    }

}

export default Menu