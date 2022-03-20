import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Game = (props) => {
    const [deleteCard, setDeleteCard] = useState(false) ;

    const filtre = () => {
        setDeleteCard (!deleteCard);
    }


    return (
        <div className={ deleteCard? 'game_card_none' : 'game_card' }>
            <NavLink className={'link'} onClick={""} to={`/${props.id}`}>
                <div className='game'>

                    <h1>{props.name}</h1>
                    <div className='picture'>
                        <img src={props.image} alt={props.name}></img>
                    </div>
                    {/* <p>released : {props.released}</p> */}
                    <p>Note : {props.rating}</p>
                </div>
            </NavLink>

            <button onClick={filtre}>Delete</button>
        </div>
    );
};

export default Game;