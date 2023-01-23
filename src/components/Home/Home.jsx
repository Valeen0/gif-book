import React from 'react';
import './home.css';
import { useTrendingGifs } from '../../hooks/useTrendingGifs';
import { Loader } from '../Loader/Loader';
import { GifsList } from '../Gif/GifsList';

export function Home(){
    
    const { loading, gifs } = useTrendingGifs();

    return(
        <section className='home-container'>
            <h2>Tendencias</h2>
            <hr />
            {
                loading
                ? <Loader/>
                : <GifsList data={gifs} />
            }

        </section>
    );

}