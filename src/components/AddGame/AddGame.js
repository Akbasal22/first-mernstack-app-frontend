import React, { useRef } from 'react'
import axios from 'axios';
import './AddGame.css'

export default function AddGame() {

    const nameRef = useRef(null);
    const ratingRef = useRef(null);
    const finishedRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const rating = Number(ratingRef.current.value);
        const isFinished = finishedRef.current.checked;

        nameRef.current.value = "";
        ratingRef.current.value = "";
        finishedRef.current.checked = false;

        const data = { name, rating, isFinished };

        // do the post req

        try {
            const res = await axios.post('http://localhost:5000/api/v1/games', JSON.stringify(data), {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(res);
        } catch (error) {
            console.log(error)
        }
    }




    return (
        <form className='add-game-form' onSubmit={handleSubmit}>
            <h1>Add a game</h1>
            <input placeholder='Name' ref={nameRef} />
            <input placeholder='Your rating' ref={ratingRef} />
            <div className='checkbox-container'>
                <label htmlFor='checkbox'>Have you finished the game</label>
                <input id='checkbox' type='checkbox' ref={finishedRef} />
            </div>
            <button className='submit-btn' type='submit'>Add game</button>
        </form>
    )
}
