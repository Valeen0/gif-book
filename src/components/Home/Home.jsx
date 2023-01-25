import React from 'react';
import { useTrendingGifs } from '../../hooks/useTrendingGifs';
import { Loader } from '../Loader/Loader';
import { GifsList } from '../Gif/GifsList';

export function Home(){
    
    const { loading, gifs } = useTrendingGifs();

    return(
        <>
            <div className='title'>
                <h3>Tendencias</h3>
                <hr />
            </div>
            {
                loading
                ? <Loader/>
                : <GifsList data={gifs} />
            }
        </>
    );

}