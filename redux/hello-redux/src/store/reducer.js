// reducer is the only person who can update the global state
// reducer takes in current state and an action and then returns the NEW state

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {

    if(action.type === 'INCREMENT') {
        return {
            ...state,
            counter: state.counter + 1
        } 
    } else if(action.type === 'DECREMENT') {
        return {
            ...state,
            counter: state.counter - 1
        }
    } else if(action.type === 'ADD') {
        return{
            ...state,
            counter: state.counter + action.payload 
        }
    } else if(action.type === 'SUBTRACT') {
        return{
            ...state,
            counter: state.counter - action.payload
        }
    }

    return state
}


export default reducer