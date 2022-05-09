import React from "react";
import { useState } from "react";

import TempView from "./TempView";
import temperature_color from "../utils/temperature";

const TempSystem = () => {

    const [temp, setTemp] = useState(0);

    return(
        <div className="temp-system">

            <TempView temp={temp} />

            <div className="buttons">
                <div className="increament" onClick={() => setTemp(temp+1)}>
                    +
                </div>
                <div className="decreament" onClick={() => setTemp(temp-1)}>
                    -
                </div>
            </div>

        </div>
    )
}

export default TempSystem;