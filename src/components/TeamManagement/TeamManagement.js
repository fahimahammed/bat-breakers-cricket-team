import React, { useEffect, useState } from 'react';
import Players from './Players/Players';
import Player from '../../Data/Players.json';
import './TeamManagement.css';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';

const TeamManagement = () => {
    const [selectedPlayer, setSelectedPlayer] = useState([]);
    useEffect(() => {
        let url = "../../Data/Players.json";
        fetch(url)
        .then(res => res.json())
        .then(selectedPlayer => setSelectedPlayer(selectedPlayer))
    }, []);
    
    //Handle add player
    const HandleAddPlayer = (Player) => {
        const newSelectedPlayer = [...selectedPlayer, Player];
        setSelectedPlayer(newSelectedPlayer);
    }
    return (
        <div className='team-container'>
            <div className="players-container">
                {
                    Player.map(Player => <Players addPlayer={HandleAddPlayer} players={Player} key={Player.id}></Players>)
                }
            </div>
            <div className='selectedPlayer-container'>
                <SelectedPlayers selectedPlayer={selectedPlayer}></SelectedPlayers>
            </div>
        </div>
    );
};

export default TeamManagement;