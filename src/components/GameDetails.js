import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import axios from 'axios';


const GameDetails = () => {

    const index = useParams();
    const [wildGame, setWildGame] = useState([]);
    useEffect(() => {
        axios.get(`https://apis.wilders.dev/wild-games/games/${+index.id}`)
            .then(response => setWildGame(response.data))
            .catch(error => console.log(error))
    }, [index])

    return (
        <div className='cardDetail'>
            <h2>{wildGame.name}</h2>
            <div className='gameDetails'>
                <div className='partie1'>
                    <div className='detail_pic'>
                        <img src={wildGame.background_image} alt={wildGame.name} />
                    </div>
                </div>
                <div className='detail_text'>
                    <p>Released : {wildGame.released}</p>
                    <p>Rating : {wildGame.rating}</p>
                </div>
            </div>
            <NavLink onClick={""} to={`/`}>
                <button className='return'>RETURN</button>
            </NavLink>
        </div>
    );
};

export default GameDetails;