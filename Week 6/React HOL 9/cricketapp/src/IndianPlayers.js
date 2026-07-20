import React from "react";

const IndianTeam = [

    "Sachin",
    "Dhoni",
    "Virat",
    "Rohit",
    "Yuvraj",
    "Raina"

];

export function OddPlayers() {

    const [first, , third, , fifth] = IndianTeam;

    return (

        <ul>

            <li>First : {first}</li>
            <li>Third : {third}</li>
            <li>Fifth : {fifth}</li>

        </ul>

    );

}

export function EvenPlayers() {

    const [, second, , fourth, , sixth] = IndianTeam;

    return (

        <ul>

            <li>Second : {second}</li>
            <li>Fourth : {fourth}</li>
            <li>Sixth : {sixth}</li>

        </ul>

    );

}

const T20Players = [

    "First Player",
    "Second Player",
    "Third Player"

];

const RanjiPlayers = [

    "Fourth Player",
    "Fifth Player",
    "Sixth Player"

];

export const IndianPlayers = [

    ...T20Players,
    ...RanjiPlayers

];

export function ListOfIndianPlayers() {

    return (

        <ul>

            {IndianPlayers.map((player, index) => (

                <li key={index}>
                    Mr. {player}
                </li>

            ))}

        </ul>

    );

}