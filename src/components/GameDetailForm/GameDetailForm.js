import React, { useRef, useEffect } from 'react'
import './GameDetailForm.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function GameDetailForm({ game }) {
    const navigate = useNavigate();

    const nameRef = useRef(null);
    const ratingRef = useRef(null);
    const finishedRef = useRef(null);

    useEffect(() => {
        nameRef.current.value = game.name;
        ratingRef.current.value = game.rating;
        finishedRef.current.checked = game.isFinished;
    }, [game]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const rating = Number(ratingRef.current.value);
        const isFinished = finishedRef.current.checked;

        nameRef.current.value = "";
        ratingRef.current.value = "";
        finishedRef.current.checked = false;

        const data = { name, rating, isFinished };

        try {
            const res = await axios.patch(`http://localhost:5000/api/v1/games/${game._id}`, JSON.stringify(data), {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(res);
        } catch (error) {
            console.log(error);
        }

        navigate('/');
    }



    return (
        <div>
            <form className='game-detail-form' onSubmit={handleUpdate}>
                <h1>Edit Game</h1>
                <input placeholder='Name' ref={nameRef} />
                <input placeholder='Your rating' ref={ratingRef} />
                <div className='checkbox-container'>
                    <label htmlFor='checkbox'>Have you finished the game</label>
                    <input id='checkbox' type='checkbox' ref={finishedRef} />
                </div>
                <button className='submit-btn' type='submit'>Edit game</button>
            </form>
        </div>
    )
}
