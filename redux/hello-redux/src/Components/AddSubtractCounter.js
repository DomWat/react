import React, { useState } from 'react'
import { connect } from 'react-redux'


function AddSubtractCounter(props) {
    const [num, setNum] = useState(0)


    return(
        <div>
            <h1>Add and Subtract</h1>
            <input type = 'number' onChange = {e => setNum(e.target.valueAsNumber)}/>
            <button onClick = {() => props.onAdd(num)}>Add</button>
            <button onClick = {() => props.onSub(num)}>Subtract</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (value) => dispatch({type: 'ADD', payload: value}),
        onSub: (value) => dispatch({type: 'SUBTRACT', payload: value})
    }
}

export default connect(null, mapDispatchToProps)(AddSubtractCounter)