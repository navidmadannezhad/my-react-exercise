import './App.css';
import TempSystem from './components/TempSystem';
import { connect } from "react-redux";

function App() {

  return (
    <div className="App">
      <TempSystem />
    </div>
  )
}

const mapStateToProps = state => {
  return { system_temperature: state.system_temperature }
}

const root = connect(mapStateToProps)(App);

export default App
