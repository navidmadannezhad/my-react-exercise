import { useState } from 'react';
import { connect } from "react-redux";

import './App.css';
import TempSystem from './components/TempSystem';
import temperature_color from "./utils/temperature";



const App = props => {

  return (
    <div className="App" style={{ backgroundColor: temperature_color(props.temp) }}>
      <TempSystem />
    </div>
  )
}



const mapStateToProps = state => {
  return { temp: state.system_temperature }
}

export default connect(mapStateToProps)(App);
