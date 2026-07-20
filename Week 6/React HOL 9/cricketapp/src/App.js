import './App.css';

import ListOfPlayers from "./ListOfPlayers";
import ScoreBelow70 from "./ScoreBelow70";

import {

    OddPlayers,
    EvenPlayers,
    ListOfIndianPlayers

} from "./IndianPlayers";

function App() {

    const flag = true;

    if (flag) {

        return (

            <div>

                <h1>List of Players</h1>

                <ListOfPlayers />

                <hr />

                <h1>List of Players having Scores Less than 70</h1>

                <ScoreBelow70 />

            </div>

        );

    }

    return (

        <div>

            <h1>Indian Team</h1>

            <h2>Odd Players</h2>

            <OddPlayers />

            <hr />

            <h2>Even Players</h2>

            <EvenPlayers />

            <hr />

            <h2>List of Indian Players Merged</h2>

            <ListOfIndianPlayers />

        </div>

    );

}

export default App;