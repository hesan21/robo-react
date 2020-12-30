import React from "react";
import ReactDOM from "react-dom";
import { Card } from "../card/card";
import './card-list.css';

export const CardList = props => (
    <div className='card-list'>
    {
        props.monsters.map(monster => 
            <Card monster={monster}/>
        )
    }
    </div>
);