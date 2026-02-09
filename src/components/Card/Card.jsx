import React from "react";
import"./Card.css";

const Card = ({name, type, attack, effect,defense, image, onAdd}) => {

return(
    <div className="card">
        <img src={image} alt={name} className="card-image" />
        <h3 className="card-name">{name}</h3>
        <p className="card-type">{type}</p>
        <p className="card-effect">{effect}</p>
        <p className="card-atats">ATK:{attack} | DEF:{defense}</p>
        {onAdd && <button className="add-btn" onClick={onAdd}>Add to Deck</button>}
        {onAdd &&  <button className="add-btn" onClick={onAdd}>Remove</button>}
        
    </div>
);
};
export default Card;