import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Game from './Game';

const GameList = (props) => {
    const [wildGames,setWildGames] = useState([]);
    useEffect(() => {
        axios.get('https://apis.wilders.dev/wild-games/games/')
            .then(response => setWildGames(response.data))
            .catch(error => console.log(error))
    }, [])

    const [filter, setFilter] = useState(false);
    
    function filterChange() {
        setFilter(!filter);
    }

    return (
        <div className='gamelist'>
            <h2>Bienvenus sur l'App {props.name}</h2>
            <button onClick={filterChange}>
                {filter? 'View all games' : 'Filter the best games'}
            </button>
            {wildGames
            .filter((game) =>filter? game.rating >= 4.5 : game)
            
            .map(wildGame => {
                
                return <Game key={wildGame.id} id={wildGame.id} name={wildGame.name} released={wildGame.released} image={wildGame.background_image} rating={wildGame.rating} />
            }
            )
        }
            
        </div>
    );
};

export default GameList;