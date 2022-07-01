import react,{useState} from "react";
import Player from "./Player";
import "./style.css";


export default function App(){
    const [players,setPlayer]=useState([
        {pname:"Lamarcus",
        position:"Center-forward"},
        {pname:"marco",
        position:"Guard"},
        {pname:"Swati",
        position:"Gaurd-Forward"},
        {pname:"Akshay",
        position:"Guard"},
        {pname:"Ankit",
        position:"Guard"},
        {pname:"Aakash",
        position:"Guard"},
    ]);


    const playerList = players.map(({pname,position}) => (

        <li key={pname.replace(" ","").toLowerCase()}>
            <Player
            allPlayer={players}
            removePlayer = {setPlayer}
            pname={pname}
            position={position}
            />
            </li>
    
     ) );

     return (
        <div>
            <h1>Team Members ({players.length})</h1>
            <ul>{playerList}</ul>
            </div>
     );




}