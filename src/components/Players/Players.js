import React from 'react';
import './Players.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faUser } from '@fortawesome/free-solid-svg-icons'

const Players = (props) => {
    const {photo, name, type, age, salary} = props.players;
    const addPlayer = props.addPlayer;
    return (
        <div className="player-container">
            <img src={photo} alt=""/>
            <br/>
            <br/>
            <h6><FontAwesomeIcon icon={faUser} /> {name}</h6>
            <p>Playing Role: {type}</p>
            <p>Age: {age}</p>
            <h5>Salary: {salary}/-</h5>
            {/* create button using bootstrap */}
            <button onClick={()=>props.addPlayer(props.players)} className='btn btn-success'><FontAwesomeIcon icon={faPlusCircle} /> Add Player</button>
        </div>
        
    );
};

export default Players;