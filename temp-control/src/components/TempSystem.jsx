import React from "react";
import {connect } from "react-redux";

import TempView from "./TempView";
import { decreaseTemp, increaseTemp } from "../actions";

const TempSystem = (props) => {

    return(
        <div className="temp-system">

            <TempView temp={props.temp} />

            <div className="buttons">
                <div className="increament" onClick={() => props.increaseTemp()}>
                    +
                </div>
                <div className="decreament" onClick={() => props.decreaseTemp()}>
                    -
                </div>
            </div>

        </div>
    )
}



const mapStateToProps = state => {
    return {
        temp: state.system_temperature
    }
}

const mapDispatchToProps = {
    increaseTemp,
    decreaseTemp
}

export default connect(mapStateToProps, mapDispatchToProps)(TempSystem);