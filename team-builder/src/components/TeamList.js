import '../App.css';
import React from 'react';

function NewTeamember(props) {
    const { details } = props;
    return (
        <div class='container'>
            <h1>{details.name}</h1>
            <p>email: {details.email}<br/> Role: {details.role}</p>
        </div>
    )
}

export default function TeamList(props) {
    const { list } = props;

    return (
        <div class='container'>
            {
                list.map((player, idx) => {
                    return <NewTeamember key={idx} details={player} />
                })
            }
        </div>
    )
}