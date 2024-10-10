import React from 'react'
import './Game.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Game({ game }) {

    const navigate = useNavigate();


    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            const data = JSON.stringify({ id: game._id });
            console.log(data);
            const res = await axios.delete(`http://localhost:5000/api/v1/games/${game._id}`);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    const handleEdit = () => {
        navigate(`/${game._id}`)
    }


    return (
        <div className='game-container'>
            <span className='name'>{game.name}</span>
            <span className='rating'>Your rating: {game.rating}/5</span>

            {game.isFinished ?
                <span className='finished'>You have finished this game</span>
                :
                <span className='not-finished'>You have NOT finished this game</span>
            }

            <div className='button-container'>
                <button className='game-button edit-button' onClick={handleEdit} >Edit Game Details</button>
                <button className='game-button delete-button' onClick={handleDelete}>Delete Game</button>
            </div>



        </div>
    )
}
