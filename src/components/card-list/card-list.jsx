// @flow
import * as React from 'react';
import './card-list.css';
import {Card} from "../card/card";

type Props = {};
export const CardList = (props: Props) => {

    return (
        <div className='card-list'>
            {props.monsters.map(monster => (
                <Card key={monster.id} monster={monster}/>
            ))}
        </div>
    );
};