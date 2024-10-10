import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Game from '../GameContainer/Game';
import './AllGames.css'


export default function AllGames() {

    const [games, setGames] = useState([]);

    const getGames = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/v1/games');
            setGames(res.data.games);
        } catch (error) {
            console.error('Error fetching games:', error);
            throw error;
        }
    };


    useEffect(() => {
        setInterval(() => {
            getGames();
        }, 2000);
    }, []);




    return (

        <div className='games-container'>
            <span className='games-container-title' >Your Games</span>
            {games.map(game => <Game game={game} />)}
        </div>

    )
}
