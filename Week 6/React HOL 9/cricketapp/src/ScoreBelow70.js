import React from "react";
import { players } from "./ListOfPlayers";

function ScoreBelow70() {

    const filteredPlayers = players.filter(
        player => player.score <= 70
    );

    return (

        <ul>

            {filteredPlayers.map((item, index) => (

                <li key={index}>
                    Mr. {item.name} {item.score}
                </li>

            ))}

        </ul>

    );

}

export default ScoreBelow70;