import React from "react";
import "./card.styles.css";

export const Card = (props)=>(
    <div className="card-container">
        <img 
        src={`https://robohash.org/${props.pokedexx.id}?set=set2&size=180x180`} 
        alt="pokedex" />
        <h2>{props.pokedexx.name}</h2>
        <p>{props.pokedexx.email}</p>
    </div>
)