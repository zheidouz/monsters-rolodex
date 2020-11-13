// @flow
import * as React from 'react';
import './card.css';

type Props = {};
export const Card = (props: Props) => {
    return (
        <div className='card-container'>
            <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt=""/>
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    );
};