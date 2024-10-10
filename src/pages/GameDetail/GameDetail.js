import React from 'react';
import axios from 'axios';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import GameDetailForm from '../../components/GameDetailForm/GameDetailForm';

export const loader = async ({ params }) => {
    try {
        const res = await axios.get(`http://localhost:5000/api/v1/games/${params.id}`);
        return res;
    } catch (error) {
        console.log(error);
        return null;
    }

}



export default function GameDetail() {

    const res = useLoaderData();
    const game = res.data.game;


    return (
        <div>
            <GameDetailForm game={game} />
        </div>
    )
}
