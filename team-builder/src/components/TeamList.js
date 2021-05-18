import '../App.css';
import React from 'react';

function Player(props) {
    const { details } = props;
    return (
        <div class='container'>
            <h1>{details.firstName} {details.lastName}</h1>
            <p>Height: {details.height} inches <br/> Weight: {details.weight} lbs</p>
        </div>
    )
}

export default function TeamList(props) {
    const { list } = props;

    return (
        <div class='container'>
            {
                list.map((player, idx) => {
                    return <Player key={idx} details={player} />
                })
            }
        </div>
    )
}