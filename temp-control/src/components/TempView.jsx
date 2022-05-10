import React from "react";

const TempView = (props) => {
    return(
        <div className="temp-view">
            { props.temp }
        </div>
    )
}

export default TempView;