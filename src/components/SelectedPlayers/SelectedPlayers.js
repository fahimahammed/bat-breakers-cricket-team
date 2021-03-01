import React from 'react';
import './SelectedPlayers.css'


const SelectedPlayers = (props) => {

    const selectedPlayer1 = props.selectedPlayer;

    const total = selectedPlayer1.reduce((sum, player) => sum + player.salary, 0);
    return (
        <div className='addedPlayer'>
            <div className='addPlayerSummary'>
                <h3>Selected Player</h3> <hr/>
                <h6>Total Selected Player: {selectedPlayer1.length}</h6>
                <h5>Total cost: {total}/-</h5> <br/>
                <h5>List of Selected Players</h5> <hr/>
            </div>

            {
                selectedPlayer1.map(addPlayer => <AddedPlayer addPlayer={addPlayer}></AddedPlayer>)
            }

        </div>
    );
}

function AddedPlayer(props) {
    const { name, type, salary } = props.addPlayer;
    return (
        <div className='selectedPlayerName'>
            <h5>{name} ({type})</h5>
            <p>Salary: {salary}/-</p>
        </div>
    )

}

export default SelectedPlayers;