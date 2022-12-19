import React from "react";

const ScoreBar = (props) => {
    return(
        <div className="score-container">
            <div>Aktualni skore:{props.actuallScore}</div>
            <div>Nejvyssi skore, ty magore:{props.highestScore}</div>
        </div>
    )
}
export default ScoreBar;