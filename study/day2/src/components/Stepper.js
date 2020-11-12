import React, { Component } from 'react'
import '../css/Stepper.css'



class Stepper extends Component {

    constructor() {
        // make sure to call the constructor of the parent (Component)
        super()

        // STATE
        // Every time you will update the state
        // it will automatically call RENDER
        this.state = {
            counter: 0
        }
    }


    handleIncrement = () => {
        // setState is async operation, which means it will eventually update state
        this.setState({
            counter: this.state.counter + 1
        })
    }

    handleDeccrement = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }



    render() {
        return (
            <div className = 'stepperDiv'>
                <h1>{this.state.counter}</h1>
                <button className = 'buttonOne' onClick = {this.handleIncrement}>Increment</button>
                <button className = 'buttonTwo' onClick = {this.handleDeccrement}>Decrement</button>
            </div>
        )
    }
}



export default Stepper