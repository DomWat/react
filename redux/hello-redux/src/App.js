import DisplayCounter from './Components/DixplayCounter'
import { connect } from 'react-redux'
import IncrementDecrementCounter from './Components/IncrementDecrementCounter';
import AddSubtractCounter from './Components/AddSubtractCounter';

function App(props) {
  return (
    <div>
      <h1>Hello Redux</h1>
      <h2>{props.ctr}</h2>

      <DisplayCounter />
      <IncrementDecrementCounter />
      <AddSubtractCounter />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter
  }
}

export default connect(mapStateToProps)(App);
