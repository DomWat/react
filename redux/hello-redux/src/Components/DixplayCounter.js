import { connect } from 'react-redux'

function DisplayCounter(props) {
    return (
        <div>
            <h1>Display Counter</h1>
            <h2>{props.count}</h2>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.counter
    }
}

export default connect(mapStateToProps)(DisplayCounter)